import React from 'react'
import Card from '../Cards/Card'
import GetDate from '../Cards/GetDate'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Expense = () => {

  return (
    <div className='p-4 text-center bg-blue-100 h-screen'>
        
        <Card cardheading={"Expense By Category"} title1={"Income this Month"} title2={"Expense this Month"} incomeamount={50000} expanseamount={20000} charttype={"pie"}/>
        <div className='flex-col '>
            <div className='flex justify-between w-2/3 mx-auto'>
            <div>
            <h1 className='text-lg '>
                Latest Expense
            </h1>
            </div>
            <div>
            <h1 className='text-lg'>
                <GetDate/>
            </h1>
            </div>
            </div>


           
            <div className='my-3 '> 
           <table className='w-2/3 table-auto border-collapse text-left mx-auto justify-between'>
    
  <thead>
    <tr>
      <th>Category</th>
      <th>Type</th>
      <th>Amount</th>
      <th>Description</th>
      <th>Edit/Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Credit Card</td>
      <td>Debit</td>
      <td>₹ 3000</td>
      <td>Shopping</td>
      <td className='flex'><FaEdit className='cursor-pointer hover:text-green-700'/> <MdDeleteForever className='cursor-pointer hover:text-red-700'/></td>
    </tr>
    <tr>
      <td>Bank</td>
      <td>Credit</td>
      <td>₹ 32000</td>
      <td>Salary</td>
      <td className='flex'><FaEdit className='cursor-pointer hover:text-green-700'/> <MdDeleteForever className='cursor-pointer hover:text-red-700'/></td>
    </tr>
    <tr>
      <td>Investment</td>
      <td>Debit</td>
      <td>₹ 3400</td>
      <td>Investment</td>
      <td className='flex'><FaEdit className='cursor-pointer hover:text-green-700'/> <MdDeleteForever className='cursor-pointer hover:text-red-700'/></td>
    </tr>
  </tbody>
</table>

            </div>

        </div>
        <div>
        <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add Expense</button>
        </div>
    </div>
  )
}

export default Expense