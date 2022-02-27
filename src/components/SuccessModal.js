import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '0',
      boxShadow: '3px 3px 31px 3px rgba(0,0,0,0.1)',
      borderRadius: '20px',
    },
  };

  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className='text-center'>
        <img src={logo} alt='logo' className='w-52 mx-auto' />
        <p className='mt-3 bg-gradient-to-bl from-sky-600 to-sky-900 px-2 py-3 rounded-lg text-white w-3/4 mx-auto font-semibold text-center'>
          Your expense was successfully added ✔
        </p>
        <Link to='/'>
          <button className='mt-5 bg-gray-200 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors'>
            Close ❌
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
