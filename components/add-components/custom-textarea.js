import React from 'react'

const CustomTextArea = ({value, label, placeHolder, onChange, disabled = false}) => {
  return (
    <div className='relative flex flex-col grow gap-1'>
      <label className='text-[13px]
        text-light-secondary-text dark:text-dark-secondary-text
        '>{label}</label>
      <textarea className={`  border rounded-md p-3 h-32
        border-light-border dark:border-dark-border
        focus:outline-none
        focus:ring-2 focus:ring-light-muted-text/20
        ${disabled ? 'bg-hover-gray/40 text-light-muted-text/50 dark:text-dark-muted-text/50': 'text-light-secondary-text dark:text-dark-secondary-text'}
        placeholder:text-secondary-muted-text
    dark:placeholder:text-dark-secondary-text`}
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
      disabled={disabled}
      />
    </div>
  )
}

export default CustomTextArea