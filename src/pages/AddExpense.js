import React from 'react';
import AddForm from '../components/AddForm';
import TopFold from '../components/TopFold';

const AddExpense = () => {
  return (
    <div className='w-10/12 mx-auto min-h-screen'>
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
