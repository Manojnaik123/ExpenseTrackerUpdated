import { more } from "@/lib/icons";

function ActiveGoal() {
    return (
        <>

            <div className='border-b
              border-light-border dark:border-dark-border'>
                <div className='flex justify-start items-center gap-2 py-4 pb-2'>
                    <div className='p-3 bg-red-400/20 text-red-400 rounded-md'>
                        {more}
                    </div>
                    <div className='grow'>
                        <div className='flex justify-between'>
                            <span className='text-light-primary-text dark:text-dark-primary-text'>
                                Tech Upgrade
                            </span>
                            <span className='text-sm text-light-primary-text dark:text-dark-primary-text'>$ 250</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-sm text-light-secondary-text'>
                                new laptop and smartphone
                            </span>
                            <span className='text-sm text-light-secondary-text'>
                                12-2-2023
                            </span>
                        </div>
                    </div>
                </div>
                <div className='pb-2'>
                    <div className="w-full h-3 overflow-hidden 
                                            rounded-full border border-light-border dark:border-dark-border
                                            bg-hover-gray/50
                                            ">
                        <div
                            className="h-full transition-all duration-300 rounded-r-full"
                            style={
                                {
                                    width: `${60}%`,
                                    backgroundColor: 'red',
                                }
                            }
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default ActiveGoal;