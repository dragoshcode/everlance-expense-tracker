import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='pt-8'>
      <div className='mx-auto bg-gray-100 w-max rounded-lg'>
        <img src={logo} alt='logo' className='w-44' />
      </div>
    </div>
  );
};

export default Header;
