import React from 'react';
import Card from './Card';

const ExpenseList = () => {
  const list = [
    {
      title: 'Made a purchase',
      logo: 'logo',
      createdAt: Date.now(),
      amount: '4567$',
    },
    {
      title: 'Made a purchase',
      logo: 'logo',
      createdAt: Date.now(),
      amount: '4567$',
    },
  ];

  return (
    <div className='mt-6'>
      {list?.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default ExpenseList;
