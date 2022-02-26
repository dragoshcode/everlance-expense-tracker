/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineStop } from 'react-icons/ai';

const TopFold = () => {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      {!window.location.pathname === '/' ? (
        <div className='flex flex-col gap-8 items-center md:justify-between md:gap-0 md:flex-row mt-8'>
          <div className='flex items-center bg-white gap-2 py-2 px-3 rounded-lg text-md'>
            <BiSearchAlt className='text-lg' />
            <input
              type='text'
              placeholder='Search for payments . . .'
              className='outline-none md:w-60 xl:w-72'
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <div className='flex items-center bg-white gap-2 py-2 px-3 rounded-lg text-md cursor-pointer hover:bg-gray-100 transition-all'>
            <MdOutlineAddCircleOutline className='text-lg' />
            <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-semibold'>
              Add
            </p>
          </div>
        </div>
      ) : (
        <div className='flex justify-between items-center mt-8'>
          <div className='flex items-center bg-white gap-2 py-2 px-3 rounded-lg text-md cursor-pointer hover:bg-gray-100 transition-all'>
            <IoIosArrowBack />
            <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-semibold'>
              Back
            </p>
          </div>
          <div className='flex items-center bg-white gap-2 py-2 px-3 rounded-lg text-md cursor-pointer hover:bg-gray-100 transition-all'>
            <AiOutlineStop />
            <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-semibold'>
              Cancel
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TopFold;
