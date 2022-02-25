import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex justify-center'>
      <img src={logo} alt='logo' width={176} />
    </div>
  );
};

export default Header;
