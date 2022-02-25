import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='bg-gradient-to-bl from-sky-500 to-sky-900 h-screen'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
