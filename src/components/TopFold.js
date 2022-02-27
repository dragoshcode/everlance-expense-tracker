import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineStop } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../redux/actions/expenses';

const TopFold = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <>
      {window.location.pathname === '/' ? (
        <div className='flex flex-col gap-5 items-center md:justify-between md:gap-0 md:flex-row mt-8'>
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
          <Link to='/add-expense'>
            <div className='flex items-center justify-center bg-white gap-2 py-2 px-3 rounded-lg text-md cursor-pointer hover:bg-gray-100 transition-all lg:w-28'>
              <MdOutlineAddCircleOutline className='text-lg' />
              <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-semibold'>
                Add
              </p>
            </div>
          </Link>
        </div>
      ) : (
        <div className='flex justify-between items-center mt-8 lg:w-3/4 mx-auto 2xl:w-1/2'>
          <Link to='/'>
            <div className='flex items-center bg-white gap-2 py-2 px-3 rounded-lg text-md cursor-pointer hover:bg-gray-100 transition-all'>
              <IoIosArrowBack />
              <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-semibold'>
                Back
              </p>
            </div>
          </Link>
          <Link to='/'>
            <div className='flex items-center bg-white gap-2 py-2 px-3 rounded-lg text-md cursor-pointer hover:bg-gray-100 transition-all'>
              <AiOutlineStop />
              <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-semibold'>
                Cancel
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default TopFold;
