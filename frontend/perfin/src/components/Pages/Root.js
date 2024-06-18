import React from 'react'
import Navbar from "../Navbar/Navbar"
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='flex h-screen'>
     
   
   <div className='w-1/5'>
<Navbar/>
   </div>
   
    
     <div className='w-5/6'>
     <Outlet/>
     </div>
    
    </div>
    
  )
}

export default Root