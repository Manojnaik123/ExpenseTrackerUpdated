import React from 'react'

const AddVerificaltionModal = ({ ref, children }) => {
    return (
        <>
            <div
                className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-60"
            // close when clicking overlay
            ></div>
            <dialog ref={ref} className='fixed z-70 flex flex-col m-auto mt-32 px-4 bg-transparent
                '>
                <div className='rounded-lg mx-auto
                bg-light-background dark:bg-dark-background border 
                border-light-border dark:border-dark-border'>
                    {children}
                </div>
            </dialog>
        </>
    )
}

export default AddVerificaltionModal