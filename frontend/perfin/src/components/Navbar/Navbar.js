import React from 'react'
import profile_img from "../../images/profile.webp"
import { AiOutlineDashboard } from "react-icons/ai";
import { FaSearchDollar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='w-1/6 text-lg'>
        <div className='profile align-middle  text-center'> 
        <div className='cursor-pointer my-1 mx-auto w-10'><img src={profile_img} alt='profile'></img></div>
        <div className='cursor-pointer my-1'>UserName</div>
       <div className='cursor-pointer my-1 text-base'>email@email.com</div>
       <div className='cursor-pointer my-1 text-base'>Edit Profile</div>

        </div>
        <div className='navigation my-6 px-4'>
            <div className='cursor-pointer my-3 flex items-center'><AiOutlineDashboard/><p className='ml-2'>Dashboard</p></div>
            <div className='cursor-pointer my-3 flex items-center'><FaSearchDollar/><p className='ml-2'>Expanse</p></div>
            <div className='cursor-pointer my-3 flex items-center'><FaMoneyCheckAlt/><p className='ml-2'>Budget</p></div>
            <div className='cursor-pointer my-3 flex items-center'><LuListTodo/><p className='ml-2'>Todo</p></div>
           

            
             </div>
            <div className='px-4'>
            <div className='cursor-pointer flex items-center text-base'><CiLogout/><p className='ml-2'>Logout</p></div>
            </div>
    </div>
  )
}

export default Navbar