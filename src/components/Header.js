import React from 'react';
import logo from '../assets/logo.png';
import { Link, Routes, Route } from 'react-router-dom';
import Reminder from './Reminder';

import { useSelector } from 'react-redux';

const Header = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);

  return (
    <div className='pt-8 relative'>
      <Link to='/'>
        <div className='mx-auto bg-gray-100 w-max rounded-lg'>
          <img src={logo} alt='logo' className='w-44' />
        </div>
      </Link>
      {list.length ? (
        <Routes>
          <Route path='/' element={<Reminder />} />
        </Routes>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Header;
