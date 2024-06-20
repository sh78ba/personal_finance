
import React from 'react';
import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <div className='md:w-1/5 w-full md:h-auto '>
        <Navbar />
      </div>
      <div className='md:w-4/5 w-full flex-grow'>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
