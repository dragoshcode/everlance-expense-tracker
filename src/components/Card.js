/* eslint-disable default-case */
import React from 'react';
import moment from 'moment';
import { BsTrash2 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/actions/expenses';

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  };

  switch (item.category) {
    case 'Education':
      return (
        <div className='flex justify-between items-center bg-white py-3 px-5 rounded-lg mt-4'>
          <div className='flex flex-col'>
            <p className='text-purple-500 font-semibold'>{item.title}</p>
            <p className='font-semibold opacity-50'>{time}</p>
          </div>
          <div className='flex flex-col items-end'>
            <BsTrash2
              className='hover:opacity-50 cursor-pointer transition-opacity text-gray-700'
              onClick={handleDelete}
            />
            <p className='text-purple-500 font-semibold'>${item.amount}</p>
          </div>
        </div>
      );
    case 'Healthcare':
      return (
        <div className='flex justify-between items-center bg-white py-3 px-5  rounded-lg mt-4'>
          <div className='flex flex-col'>
            <p className='text-green-500 font-semibold'>{item.title}</p>
            <p className='font-semibold opacity-50'>{time}</p>
          </div>
          <div className='flex flex-col items-end'>
            <BsTrash2
              className='hover:opacity-50 cursor-pointer transition-opacity text-gray-700'
              onClick={handleDelete}
            />
            <p className='text-green-500 font-semibold'>${item.amount}</p>
          </div>
        </div>
      );
    case 'Shopping':
      return (
        <div className='flex justify-between items-center bg-white py-3 px-5  rounded-lg mt-4'>
          <div className='flex flex-col'>
            <p className='text-red-500 font-semibold'>{item.title}</p>
            <p className='font-semibold opacity-50'>{time}</p>
          </div>
          <div className='flex flex-col items-end'>
            <BsTrash2
              className='hover:opacity-50 cursor-pointer transition-opacity text-gray-700'
              onClick={handleDelete}
            />
            <p className='text-red-500 font-semibold'>${item.amount}</p>
          </div>
        </div>
      );
    case 'Food':
      return (
        <div className='flex justify-between items-center bg-white py-3 px-5  rounded-lg mt-4'>
          <div className='flex flex-col'>
            <p className='text-yellow-500 font-semibold'>{item.title}</p>
            <p className='font-semibold opacity-50'>{time}</p>
          </div>
          <div className='flex flex-col items-end'>
            <BsTrash2
              className='hover:opacity-50 cursor-pointer transition-opacity text-gray-700'
              onClick={handleDelete}
            />
            <p className='text-yellow-500 font-semibold'>${item.amount}</p>
          </div>
        </div>
      );
    case 'Other':
      return (
        <div className='flex justify-between items-center bg-white py-3 px-5  rounded-lg mt-4'>
          <div className='flex flex-col'>
            <p className='text-orange-500 font-semibold'>{item.title}</p>
            <p className='font-semibold opacity-50'>{time}</p>
          </div>
          <div className='flex flex-col items-end'>
            <BsTrash2
              className='hover:opacity-50 cursor-pointer transition-opacity text-gray-700'
              onClick={handleDelete}
            />
            <p className='text-orange-500 font-semibold'>${item.amount}</p>
          </div>
        </div>
      );
  }
};

export default Card;
