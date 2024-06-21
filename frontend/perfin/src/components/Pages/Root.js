
import React, { useContext } from 'react';
import Navbar from "../Navbar/Navbar";
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext} from '../SignInSignUp/AuthContext';



const Root = () => {

    const{token,loading}=useContext(AuthContext)
    if (loading) {
        return null;
      }
    
    if (!token) {
        return <Navigate to="/signin" replace />;
      }
    
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
