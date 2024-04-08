import React from 'react';

const Spinner = () => {
  return (
    <div className='flex md:h-[90vh] h-[70vh] justify-center items-center'>
      <div className='md:w-60 md:h-60 h-32 w-32 border-[12px] border md:border-[20px] border-t-blue-500 border-r-blue-500  border-white rounded-full animate-spin'></div>
    </div>
  );
};

export default Spinner;
