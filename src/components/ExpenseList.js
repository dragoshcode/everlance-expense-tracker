import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import empty from '../assets/empty.svg';

const ExpenseList = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);

  return (
    <div className='mt-6'>
      {list.length ? (
        list.map((item) => <Card item={item} />)
      ) : (
        <div className='mt-10'>
          <img
            src={empty}
            alt='empty'
            className='bg-white p-6 rounded-lg w-full max-w-md mx-auto'
          />
          <p className='bg-white w-max mx-auto p-2 rounded-lg mt-4 font-semibold'>
            Oh, you don't spend money? 🤔
          </p>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
