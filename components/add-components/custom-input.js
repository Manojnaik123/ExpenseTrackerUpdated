import React from 'react'

const CustomInput = ({ label, type, placeHolder }) => {
  return (
    <div className='relative flex flex-col grow gap-1'>
      <label className='text-[13px]
        text-light-secondary-text dark:text-dark-secondary-text
        '>{label}</label>
      <input className='border rounded-md p-3
        border-light-border dark:border-dark-border
        focus:outline-none
        focus:ring-2 focus:ring-light-muted-text/20
        text-light-secondary-text dark:text-dark-secondary-text
        placeholder:text-secondary-muted-text
    dark:placeholder:text-dark-secondary-text
    
        '
        type={type}
        placeholder={placeHolder}
      />
    </div>
  )
}

export default CustomInput