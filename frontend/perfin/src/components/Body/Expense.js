
import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import GetDate from '../Cards/GetDate';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Modal from '../Cards/Modal';
import axios from 'axios';

const ExpenseTable = ({ expenseData,handleDelete }) => (
  <table className='w-11/12 sm:w-2/3 table-auto border-collapse text-left mx-auto justify-between'>
    <thead>
      <tr>
        <th>Category</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {expenseData.map((val) => (
        <tr key={val._id}>
          <td>{val.category}</td>
          <td>{val.type}</td>
          <td>₹ {val.amount}</td>
          <td>{val.description}</td>
          <td className='flex'>
            <FaEdit className='cursor-pointer hover:text-green-700' />
            <MdDeleteForever className='cursor-pointer hover:text-red-700' onClick={()=>handleDelete(val._id)}/>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Expense = () => {
  const [showModal, setShowModal] = useState(false);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

 

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8888/personalfinance/api/v1/transaction/getalldetails", {
        params: { email: localStorage.getItem("useremail") },
        headers: {
          'x-access-token': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      setExpenseData(response.data); // Assuming response.data is an array of expenses
  
    } catch (error) {
      console.error("Error fetching transactions:", error);
      if (error.response && error.response.data) {
        console.log(error.response.data.message);
      } else {
        console.log("An unexpected error occurred. Please try again.");
      }
    }
  };

  const refreshData = () => {
    fetchData(); // Fetch data again after submission
  };


  const handleDelete = async (id) => {
    try {
    await axios.delete("http://localhost:8888/personalfinance/api/v1/transaction/delete", {
        params:{
            id:id
        },
        headers: {
          'x-access-token': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      refreshData(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div className='p-4 text-center bg-blue-100 h-screen'>
      <Card
        cardheading={"Expense By Category"}
        title1={"Income this Month"}
        title2={"Expense this Month"}
        incomeamount={50000}
        expanseamount={20000}
        charttype={"pie"}
      />
      <div className='flex-col my-3'>
        <div className='flex justify-between w-2/3 mx-auto'>
          <div>
            <h1 className='text-lg'>Latest Expense</h1>
          </div>
          <div>
            <h1 className='text-lg'><GetDate /></h1>
          </div>
        </div>
        <div className='my-3'>
          <ExpenseTable expenseData={expenseData} handleDelete={handleDelete} />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => setShowModal(true)}
        >
          Add Expense
        </button>
        {showModal && <Modal onClose={() => { setShowModal(false); refreshData(); }} />} {/* Pass refreshData callback */}
      </div>
    </div>
  );
};

export default Expense;
