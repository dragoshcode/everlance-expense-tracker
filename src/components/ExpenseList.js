import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import empty from '../assets/empty.svg';
import { toast, ToastContainer } from 'react-toastify';

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filterList = list.filter((item) => item.title.includes(query));
  const notifySuccess = () => toast.success('Expense Deleted');

  return (
    <div className='mt-8'>
      <ToastContainer
        position='bottom-right'
        autoClose={1400}
        hideProgressBar={false}
        closeOnClick
      />
      {filterList.length ? (
        filterList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
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
