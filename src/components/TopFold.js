import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

const TopFold = () => {
  return (
    <div className='flex flex-col gap-4 items-center md:justify-between md:gap-0 md:flex-row mt-8'>
      <div className='flex items-center bg-white gap-2 py-2 px-3 rounded-lg text-md hover:bg-gray-100 transition-all'>
        <BiSearchAlt className='text-lg' />
        <input
          type='text'
          placeholder='Search for payments . . .'
          className='outline-none md:w-60 xl:w-72'
        />
      </div>
      <div className='flex items-center bg-white gap-2 py-2 px-3 rounded-lg text-md cursor-pointer hover:bg-gray-100 transition-all'>
        <MdOutlineAddCircleOutline className='text-lg mt-1' />
        <p>Add</p>
      </div>
    </div>
  );
};

export default TopFold;
