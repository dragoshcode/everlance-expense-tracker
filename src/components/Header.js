import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='pt-8'>
      <Link to='/'>
        <div className='mx-auto bg-gray-100 w-max rounded-lg'>
          <img src={logo} alt='logo' className='w-44' />
        </div>
      </Link>
    </div>
  );
};

export default Header;
