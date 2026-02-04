import React from 'react'

const AddVerificaltionModal = ({ref, children}) => {
  return (
            <>
            <div
                className="md:fixed md:inset-0 md:bg-black/10 md:backdrop-blur-[2px] md:z-40"
            // close when clicking overlay
            ></div>
            <dialog ref={ref} className='fixed z-50 flex flex-col m-auto mt-32 rounded-lg
    bg-light-background dark:bg-dark-background border 
    border-light-border dark:border-dark-border
    '>
        {children}
               
            </dialog>
        </>
  )
}

export default AddVerificaltionModal