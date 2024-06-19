

import React from 'react'
import { X } from 'lucide-react';

const Modal = ({onClose}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm text-green-500 flex justify-center items-center transition-opacity duration-300 ease-in-out'>
      <div className='mt-5 flex flex-col gap-5 w-11/12 max-w-lg'>
        <button className='place-self-end text-gray-400 hover:text-gray-100 transition-colors duration-300' onClick={onClose}><X size={30}/></button>
        <div className='bg-blue-400 rounded-xl px-10 py-10 flex flex-col gap-5 items-center shadow-lg'>
          <form className='flex flex-col text-3xl font-extrabold'>
            <select name='category' className='text-center my-4 rounded-sm py-2 px-3 bg-white text-gray-800'>
              <option value="BANK">BANK</option>
              <option value="CREDIT CARD">CREDIT CARD</option>
              <option value="INVESTMENT">INVESTMENT</option>
            </select>

            <select name='type' className='text-center my-4 rounded-sm py-2 px-3 bg-white text-gray-800'>
              <option value="DEBIT">DEBIT</option>
              <option value="CREDIT">CREDIT</option>
              <option value="INVESTMENT">INVESTMENT</option>
            </select>

            <input className='my-4 py-2 px-3 rounded-sm bg-white text-gray-800 outline-none text-xl text-center' type='number' placeholder='Amount in ₹' name='amount' step={0.01} required />
            <input className='my-4 py-2 px-3 rounded-sm bg-white text-gray-800 outline-none text-xl text-center' type='text' placeholder='Description' name='description' />

            <button className='my-4 py-2 px-5 bg-green-400 text-white rounded-sm hover:bg-green-500 transition-colors duration-300' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
