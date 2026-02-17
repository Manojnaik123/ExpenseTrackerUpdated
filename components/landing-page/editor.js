'use client';

import React, { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'

const BlogAddPage = () => {
  // Blog metadata
  const [title, setTitle] = useState('')
  const [miniDesc, setMiniDesc] = useState('')
  const [author, setAuthor] = useState('Aarav Mehta')
  const [coverImage, setCoverImage] = useState(null)

  // Initialize TipTap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      TextStyle,
      Color,
    ],
    content: '<p>Start writing your blog...</p>',
    immediatelyRender: false, // 👈 Add this
  })

  // Function to handle image uploads inside editor
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (!file || !editor) return
    // Normally you'd upload to server/cloud storage. Here we'll use a local URL
    const url = URL.createObjectURL(file)
    editor.chain().focus().setImage({ src: url, alt: file.name }).run()
  }

  // Function to handle cover image
  const handleCoverImageUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return
    setCoverImage(URL.createObjectURL(file))
  }

  // Function to generate Table of Contents based on headings
  const getTOC = () => {
    if (!editor) return []
    const headings = []
    const doc = editor.getJSON()
    const traverse = (node) => {
      if (node.type.startsWith('heading')) {
        headings.push({
          level: parseInt(node.attrs.level),
          text: node.content?.map(c => c.text).join('') || '',
        })
      }
      if (node.content) node.content.forEach(traverse)
    }
    traverse(doc)
    return headings
  }

  // Function to save blog
  const handleSaveBlog = async () => {
    if (!editor) return
    const content = editor.getHTML()
    const blogData = {
      title,
      miniDesc,
      author,
      coverImage,
      content,
      createdAt: new Date(),
    }

    console.log('Blog saved!', blogData)
    alert('Blog data logged in console. Replace this with API call.')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
      {/* Editor Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>

        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Mini Description"
          value={miniDesc}
          onChange={(e) => setMiniDesc(e.target.value)}
          className="w-full mb-3 border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mb-3 border p-2 rounded"
        />

        <div className="mb-3">
          <label className="block mb-1 font-medium">Cover Image</label>
          <input type="file" onChange={handleCoverImageUpload} />
          {coverImage && (
            <img src={coverImage} alt="cover" className="mt-2 w-full max-h-64 object-cover rounded" />
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Insert Image in Blog</label>
          <input type="file" onChange={handleImageUpload} />
        </div>

        {/* Rich Text Editor */}
        <EditorContent editor={editor} className="border p-3 rounded min-h-[300px]" />

        <button
          onClick={handleSaveBlog}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publish Blog
        </button>
      </div>

      {/* Table of Contents */}
      <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md sticky top-6 h-fit">
        <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
        <ul className="list-disc list-inside space-y-1">
          {getTOC().map((item, index) => (
            <li key={index} className={`ml-${item.level * 2}`}>
              {item.text || 'Untitled'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogAddPage
