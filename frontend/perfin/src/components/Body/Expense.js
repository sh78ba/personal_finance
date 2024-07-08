
import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import GetDate from '../Cards/GetDate';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Modal from '../Cards/Modal';
import axios from 'axios';


const ExpenseTable = ({ expenseData, handleDelete, handleEdit }) => (
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
            <FaEdit className='cursor-pointer hover:text-green-700' onClick={() => handleEdit(val)} />
            <MdDeleteForever className='cursor-pointer hover:text-red-700' onClick={() => handleDelete(val._id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Expense = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const [currentExpense, setCurrentExpense] = useState(null);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [chartData, setChartData] = useState([0, 0, 0]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
  
      // Ensure day and month are two digits
      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;
  
      const response = await axios.get("http://localhost:8888/personalfinance/api/v1/transaction/getalldetails", {
        params: { email: localStorage.getItem("useremail"), date: `${day}/${month}/${year}` },
        headers: {
          'x-access-token': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      setExpenseData(response.data);

      const monthlyresponse=await axios.get("http://localhost:8888/personalfinance/api/v1/transaction/getmonthly",{
        params: { email: localStorage.getItem("useremail")},
        headers: {
          'x-access-token': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })

      const transactions=monthlyresponse.data;
      const grouped=transactions.reduce((acc,transaction)=>{
        const {type,amount}=transaction;
        if (!acc[type]) {
          acc[type] = 0;
        }


        acc[type] += amount;
        // console.log(acc)

        return acc;
      }, {});
      setIncomeAmount(grouped.CREDIT || 0);
      setExpenseAmount(grouped.DEBIT || 0);
      setChartData([
        grouped.CREDIT || 0,
        grouped.DEBIT || 0,
        grouped.INVESTMENT || 0,
      ]);
     
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
    fetchData();

  };
  

  const handleEdit = (expense) => {
    setIsEditing(true);
    setCurrentExpense(expense);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8888/personalfinance/api/v1/transaction/delete", {
        params: { id: id },
        headers: {
          'x-access-token': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      refreshData();
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
        incomeamount={incomeAmount}
        expanseamount={expenseAmount}
        charttype={"pie"}
        chartData={chartData}
        labels={['CREDIT', 'DEBIT',"INVESTMENT"]}
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
          <ExpenseTable expenseData={expenseData} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => { setIsEditing(false); setShowModal(true); }}
        >
          Add Expense
        </button>
        {showModal && (
          <Modal
            onClose={() => { setShowModal(false); refreshData(); }}
            isEditing={isEditing}
            expense={currentExpense}
          />
        )}
      </div>
    </div>
  );
};

export default Expense;
