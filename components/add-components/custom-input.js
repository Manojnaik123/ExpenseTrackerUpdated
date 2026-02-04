import React from 'react'

const CustomInput = ({value, label, type, placeHolder, onChange, isValid, max, disabled=false }) => {
  return (
    <div className='relative flex flex-col grow gap-1'>
      <label className='text-[13px]
        text-light-secondary-text dark:text-dark-secondary-text
        '>{label}</label>
      <input className={` ${disabled ? 'bg-hover-gray/40 text-light-muted-text/50 dark:text-dark-muted-text/50': 'text-light-secondary-text dark:text-dark-secondary-text'}
      border rounded-md p-3
        border-light-border dark:border-dark-border
        focus:outline-none
        focus:ring-2 focus:ring-light-muted-text/20
        
        placeholder:text-secondary-muted-text
    dark:placeholder:text-dark-secondary-text
    ${isValid &&  'ring-3 ring-warning-primary/30'}
    ${isValid &&  'focus:ring-3 focus:ring-warning-primary/30'}
      `}
        type={type}
        placeholder={placeHolder}
        onChange={onChange}
        max={max}
        value={value}
        disabled={disabled}
      />
    </div>
  )
}

export default CustomInput