import React from 'react'
import profile_img from "../../images/profile.webp"
import { AiOutlineDashboard } from "react-icons/ai";
import { FaSearchDollar } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='text-lg bg-blue-400 h-screen p-4 text-white'>
        <div className='profile align-middle  text-center'> 
        <div className=' mx-auto w-10'><img className='rounded-full'src={profile_img} alt='profile'></img></div>
        <div className=' my-1'>UserName</div>
       <div className=' my-1 text-base'>email@email.com</div>
       <div className='cursor-pointer my-1 text-base rounded-md bg-white text-blue-400'>Edit Profile</div>

        </div>
        <div className='navigation mt-6 '>
            <div className='cursor-pointer my-3 p-3 flex items-center hover:bg-blue-500 rounded'><AiOutlineDashboard/><p className='ml-2'>Dashboard</p></div>
            <div className='cursor-pointer my-3  p-3 flex items-center  hover:bg-blue-500 rounded'><FaSearchDollar/><p className='ml-2'>Expanse</p></div>
            <div className='cursor-pointer my-3 p-3 flex items-center  hover:bg-blue-500 rounded'><FaMoneyCheckAlt/><p className='ml-2'>Budget</p></div>
            <div className='cursor-pointer my-3 p-3 flex items-center  hover:bg-blue-500 rounded'><LuListTodo/><p className='ml-2'>Todo</p></div>
           

            
             </div>
            <div className=''>
            <hr className="h-px my-6 border-0 bg-blue-500"></hr>
            <div className='cursor-pointer flex  p-3 items-center text-base  hover:bg-blue-500 rounded'><CiLogout/><p className='ml-2'>Logout</p></div>
            </div>
    </div>
  )
}

export default Navbar