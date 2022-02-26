import React, { useState } from 'react';
import { GrFormAdd } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addExpense } from '../redux/actions/expenses';
import Dropdown from './Dropdown';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Category');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);

    if (isNaN(val)) {
      setAmount('');
      return;
    }

    setAmount(val);
  };

  const handleSubmit = () => {
    if (!title || !amount || category === 'Category') {
      const notify = () => toast('Please fill all the data');
      notify();
      return;
    }

    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
  };

  return (
    <div className='bg-white rounded-lg p-6 mt-5'>
      <ToastContainer
        position='bottom-right'
        autoClose={1900}
        hideProgressBar={false}
        closeOnClick
      />
      <div className=''>
        <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-semibold'>
          Title:
        </p>
        <input
          type='text'
          placeholder='What have you spent on?'
          value={title}
          onChange={(e) => handleTitle(e)}
          className='outline-none mt-3 text-white py-2 placeholder:text-white placeholder:text-opacity-60 px-4 rounded-lg bg-gradient-to-bl from-sky-500 to-sky-800 opacity-80'
        />
      </div>
      <div className='mt-6'>
        <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-semibold'>
          Amount:
        </p>
        <input
          type='text'
          placeholder='How much have you spent?'
          value={amount}
          onChange={(e) => handleAmount(e)}
          className='outline-none mt-3 text-white py-2 placeholder:text-white placeholder:text-opacity-60 px-4 rounded-lg bg-gradient-to-bl from-sky-500 to-sky-800 opacity-80'
        />
      </div>
      <div className='mt-6'>
        <Dropdown category={category} setCategory={setCategory} />
      </div>
      <div className='group w-max cursor-pointer ' onClick={handleSubmit}>
        <div className='flex items-center mt-8 bg-gray-200 w-max py-1 px-3 rounded-lg gap-2 group-hover:opacity-60 transition-opacity pointer-events-none'>
          <GrFormAdd className='group-hover:opacity-60 transition-opacity' />
          <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-semibold group-hover:bg-gradient-to-bl group-hover:from-sky-300 group-hover:to-sky-500 transition-colors'>
            Add
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
