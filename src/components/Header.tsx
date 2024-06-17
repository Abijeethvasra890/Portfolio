// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-zinc-200 p-4 flex justify-between items-center">
      <img src='av_logo.png' className='w-[50px] md:ml-10' />
      <div className='flex gap-5 md:file:mr-10'>
        <h1 className="text-xl">Projects</h1>
        <h1 className="text-xl">About</h1>
      </div>
      
    </header>
  );
};

export default Header;
