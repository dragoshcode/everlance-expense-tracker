import React from 'react';
import TopFold from '../components/TopFold';
import ExpenseList from '../components/ExpenseList';

const Home = () => {
  return (
    <div className='w-4/5 sm:w-1/2 mx-auto'>
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
