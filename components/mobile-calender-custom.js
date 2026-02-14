import { calender } from '@/lib/icons';
import React, { useEffect, useRef, useState } from 'react';

const MobileCalenderCustom = ({ options, handleOnSelectClick }) => {
  const [dDVisible, setDDVisible] = useState(false);
  const containerRef = useRef(); // ref for the outer div

  const toggleDD = () => setDDVisible(prev => !prev);

  function handleSelect(id){
    handleOnSelectClick(id);
    setDDVisible(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // check if the click is outside the container
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setDDVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className='relative text-light-secondary-text dark:text-dark-secondary-text'>
      <button
        className='hover:bg-hover-gray/50 p-2 rounded-full'
        onClick={toggleDD}
      >
        {calender}
      </button>

      {dDVisible && (
        <div
          className='absolute right-0 top-9 rounded-md flex flex-col slide-down
                     bg-light-surface-background dark:bg-dark-surface-background
                     border border-light-border dark:border-dark-border'
        >
          {options?.map(item => (
            <button
              key={item.key}
              className='px-4 py-2 w-36 text-start
                         border-light-border dark:border-dark-border
                         hover:bg-hover-gray/70'
              onClick={()=> handleSelect(item.key)}
            >
              {item.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileCalenderCustom;
