import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import AddExpense from './pages/AddExpense';

const App = () => {
  return (
    <div className='bg-gradient-to-bl from-sky-500 to-sky-900 min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-expense' element={<AddExpense />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
