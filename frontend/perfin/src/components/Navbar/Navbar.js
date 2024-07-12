
import React, { useContext, useState } from 'react';
import profile_img from "../../images/profile.webp";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaSearchDollar } from "react-icons/fa";
// import { FaMoneyCheckAlt } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger menu icon
import { AuthContext } from '../SignInSignUp/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {useremail,username,handleLogout}=useContext(AuthContext)
  const navigate=useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu=()=>{
    setIsOpen(false);
  }

  const logout=()=>{
    handleLogout();
    navigate("/signin")
  }


  return (
    <div className='relative '>
      <button className='md:hidden p-4 fixed top-0 left-0 z-20' onClick={toggleMenu}>
        <GiHamburgerMenu size={24} />
      </button>
      <div className={`bg-blue-400 h-screen p-4 text-white flex flex-col fixed w-screen  ${isOpen ? 'block' : 'hidden'} md:block  md:w-1/5`}>
        <div className='flex justify-between items-center mb-4'>
          <div className='profile text-center mx-auto p-4 border-2 rounded-2xl'>
            <div className='mx-auto w-10'>
              <img className={`rounded-full ${isOpen ? 'block' : 'hidden'} md:block `} src={profile_img} alt="profile" />
            </div>
            <div className={`mt-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
              <div className='my-1'>{username}</div>
              <div className='my-1 text-base'>{useremail}</div>
              {/* <div className='cursor-pointer my-1 text-base rounded-md bg-white text-blue-400'>Edit Profile</div> */}
            </div>
          </div>
        </div>
        <div className={`mt-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/dashboard">
            <div className='cursor-pointer my-3 p-3 flex items-center hover:bg-blue-500 rounded' onClick={closeMenu}>
              <AiOutlineDashboard />
              <p className='ml-2'>Dashboard</p>
            </div>
          </Link>
          <Link to="/expense">
            <div className='cursor-pointer my-3 p-3 flex items-center hover:bg-blue-500 rounded' onClick={closeMenu}>
              <FaSearchDollar />
              <p className='ml-2'>Expense</p>
            </div>
          </Link>
          {/* <div className='cursor-pointer my-3 p-3 flex items-center hover:bg-blue-500 rounded' onClick={closeMenu}>
            <FaMoneyCheckAlt />
            <p className='ml-2'>Budget</p>
          </div> */}
          <div className='cursor-pointer my-3 p-3 flex items-center hover:bg-blue-500 rounded' onClick={closeMenu}>
            <LuListTodo />
            <p className='ml-2'>Todo</p>
          </div>
          <hr className="h-px my-6 border-0 bg-blue-500"></hr>
          <div className='cursor-pointer flex p-3 items-center text-base hover:bg-blue-500 rounded'>
            <CiLogout />
            <p className='ml-2'onClick={logout}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
