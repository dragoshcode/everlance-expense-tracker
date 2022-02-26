import React from 'react';

const Reminder = () => {
  return (
    <div className='relative'>
      <div className='absolute -top-24 right-0 bg-white rounded-bl-lg p-2 flex flex-col gap-1'>
        <p className='font-semibold text-purple-500 text-xs'>🟣 - Education</p>
        <p className='font-semibold text-green-500 text-xs'>🟢 - Healthcare</p>
        <p className='font-semibold text-red-500 text-xs'>🔴 - Shopping</p>
        <p className='font-semibold text-yellow-500 text-xs'>🟡 - Food</p>
        <p className='font-semibold text-purple-500 text-xs'>🟠 - Other</p>
      </div>
    </div>
  );
};

export default Reminder;
