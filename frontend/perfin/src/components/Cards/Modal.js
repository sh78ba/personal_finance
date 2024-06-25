
// import React, { useState } from 'react'
// import { X } from 'lucide-react';
// import axios from 'axios';

// const Modal = ({onClose}) => {

// const [type,setType]=useState("DEBIT");
// const [category,setCategory]=useState("BANK");
// const [amount,setAmount]=useState("");
// const [description,setDescription]=useState("");



// const handleCategory=(e)=>{
//  setCategory(e.target.value);
// }

// const handleType=(e)=>{
// setType(e.target.value)
// }

// const handleAmount=(e)=>{
//   setAmount(e.target.value)
// }

// const handleDescription=(e)=>{
//   setDescription(e.target.value)
// }

// const handleSubmit=async(e)=>{
//   e.preventDefault();
//   try{
//     await axios.post("http://localhost:8888/personalfinance/api/v1/transaction/create",
//       {
//         email: localStorage.getItem('useremail'),
//         category: category,
//         type: type,
//         amount: amount,
//         description: description
//       },
//       {
//         headers: {
//           'x-access-token': localStorage.getItem('token'),
//           'Content-Type': 'application/json'
//         }
//     })
    
//   }catch(error){
//     console.error("Transation Creation failed:", error);
//         if (error.response && error.response.data) {
//             console.log(error.response.data.message)
//           }else {
//             console.log("An unexpected error occurred. Please try again.");
//           }
//         }
//   }


//   return (
//     <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm text-green-500 flex justify-center items-center transition-opacity duration-300 ease-in-out'>
//       <div className='mt-5 flex flex-col gap-5 w-11/12 max-w-lg'>
//         <button className='place-self-end text-gray-400 hover:text-gray-100 transition-colors duration-300' onClick={onClose}><X size={30}/></button>
//         <div className='bg-blue-400 rounded-xl px-10 py-10 flex flex-col gap-5 items-center shadow-lg'>
//           <form className='flex flex-col text-3xl font-extrabold'>
//             <select name='category' className='text-center my-4 rounded-sm py-2 px-3 bg-white text-gray-800'onChange={handleCategory} >
//               <option value="BANK">BANK</option>
//               <option value="CREDIT CARD">CREDIT CARD</option>
//               <option value="INVESTMENT">INVESTMENT</option>
//             </select>

//             <select name='type' className='text-center my-4 rounded-sm py-2 px-3 bg-white text-gray-800' onChange={handleType}>
//               <option value="DEBIT">DEBIT</option>
//               <option value="CREDIT">CREDIT</option>
//               <option value="INVESTMENT">INVESTMENT</option>
//             </select>

//             <input className='my-4 py-2 px-3 rounded-sm bg-white text-gray-800 outline-none text-xl text-center' type='number' placeholder='Amount in ₹' name='amount' step={0.01} onChange={handleAmount} required />
//             <input className='my-4 py-2 px-3 rounded-sm bg-white text-gray-800 outline-none text-xl text-center' type='text' placeholder='Description' name='description' onChange={handleDescription} />

//             <button className='my-4 py-2 px-5 bg-green-400 text-white rounded-sm hover:bg-green-500 transition-colors duration-300' type='submit' onClick={handleSubmit}>Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Modal




import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

const Modal = ({ onClose, isEditing, expense }) => {
  const [type, setType] = useState("DEBIT");
  const [category, setCategory] = useState("BANK");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isEditing && expense) {
      setType(expense.type);
      setCategory(expense.category);
      setAmount(expense.amount);
      setDescription(expense.description);
    }
  }, [isEditing, expense]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update existing expense
    
        await axios.put(`http://localhost:8888/personalfinance/api/v1/transaction/update?id=${expense._id}`,{
          email: localStorage.getItem("useremail"),
          category: category,
          type: type,
          amount: amount,
          description: description
        }, {
          headers: {
            'x-access-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        });
      } else {
        // Create new expense
        await axios.post("http://localhost:8888/personalfinance/api/v1/transaction/create", {
          email: localStorage.getItem('useremail'),
          category: category,
          type: type,
          amount: amount,
          description: description
        }, {
          headers: {
            'x-access-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        });
      }
      onClose();
    } catch (error) {
      console.error("Transaction failed:", error);
      if (error.response && error.response.data) {
        console.log(error.response.data.message);
      } else {
        console.log("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm text-green-500 flex justify-center items-center transition-opacity duration-300 ease-in-out'>
      <div className='mt-5 flex flex-col gap-5 w-11/12 max-w-lg'>
        <button className='place-self-end text-gray-400 hover:text-gray-100 transition-colors duration-300' onClick={onClose}><X size={30} /></button>
        <div className='bg-blue-400 rounded-xl px-10 py-10 flex flex-col gap-5 items-center shadow-lg'>
          <form className='flex flex-col text-3xl font-extrabold' onSubmit={handleSubmit}>
            <select name='category' className='text-center my-4 rounded-sm py-2 px-3 bg-white text-gray-800' value={category} onChange={handleCategory}>
              <option value="BANK">BANK</option>
              <option value="CREDIT CARD">CREDIT CARD</option>
              <option value="INVESTMENT">INVESTMENT</option>
            </select>

            <select name='type' className='text-center my-4 rounded-sm py-2 px-3 bg-white text-gray-800' value={type} onChange={handleType}>
              <option value="DEBIT">DEBIT</option>
              <option value="CREDIT">CREDIT</option>
              <option value="INVESTMENT">INVESTMENT</option>
            </select>

            <input className='my-4 py-2 px-3 rounded-sm bg-white text-gray-800 outline-none text-xl text-center' type='number' placeholder='Amount in ₹' name='amount' value={amount} step={0.01} onChange={handleAmount} required />
            <input className='my-4 py-2 px-3 rounded-sm bg-white text-gray-800 outline-none text-xl text-center' type='text' placeholder='Description' name='description' value={description} onChange={handleDescription} />

            <button className='my-4 py-2 px-5 bg-green-400 text-white rounded-sm hover:bg-green-500 transition-colors duration-300' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

