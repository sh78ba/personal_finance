import React, { useEffect, useState } from 'react'
import Card from '../Cards/Card'
import axios from 'axios';



const Dashboard = () => {

  const [groupBankDebit,setGroupBankDebit]=useState(null)
  const [groupBankCredit,setGroupBankCredit]=useState(null)
  const [groupCreditCardCredit,setGroupCreditCardCredit]=useState(null)
  const [groupCreditCardDebit,setGroupCreditCardDebit]=useState(null)
  const [chartData,setChartData]=useState(null)

  useEffect(() => {
    fetchData();
  },[]);

 const fetchData = async () => {
  try {
    const monthlyresponse = await axios.get("http://localhost:8888/personalfinance/api/v1/transaction/getmonthly", {
      params: { email: localStorage.getItem("useremail") },
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    });

    const transactions = monthlyresponse.data;

    // Sum transactions by category and type
    const groupedSums = transactions.reduce((acc, transaction) => {
      const { category, type, amount } = transaction;
      if (!acc[category]) {
        acc[category] = {};
      }
      if (!acc[category][type]) {
        acc[category][type] = 0;
      }
      acc[category][type] += amount;
      return acc;
    }, {});

    setGroupBankDebit(groupedSums.BANK.DEBIT||0)
    setGroupBankCredit(groupedSums.BANK.CREDIT||0)
    setGroupCreditCardCredit(groupedSums["CREDIT CARD"].CREDIT||0)
    setGroupCreditCardDebit(groupedSums["CREDIT CARD"].DEBIT||0)
    setChartData([
      groupedSums.BANK.CREDIT||0,
      groupedSums.BANK.DEBIT||0
    ])

  } catch (error) {
    console.error("Error fetching transactions:", error);
    if (error.response && error.response.data) {
      console.log(error.response.data.message);
    } else {
      console.log("An unexpected error occurred. Please try again.");
    }
  }
};

  return (
    <div className='p-4 bg-blue-100 h-screen flex flex-wrap justify-around z-5 overflow-auto'>
  <div className='my-3'>
  <Card cardheading={"Credit Card"} title1={"Income this Month"} title2={"Expense this Month"} incomeamount={groupCreditCardCredit} expanseamount={groupCreditCardDebit} charttype={"bar"}>

</Card>
  </div>
  <div className='my-3'>
  <Card cardheading={"Bank"} title1={"Credit this Month"} title2={"Debit this Month"} incomeamount={groupBankCredit} expanseamount={groupBankDebit} charttype={"pie"}  chartData={chartData} labels={['CREDIT', 'DEBIT']}>

</Card>
  </div>
  <div className='my-3'>
  <Card cardheading={"Investment Tracker"} title1={"Investment this Year"} title2={"Investment last Year"} incomeamount={50000} expanseamount={20000} charttype={"bar"}>

</Card>
  </div>

  <div className='my-3'>
    <Card cardheading={"Overall Income this Year"} title1={"Income this Year"} title2={"Expanse this Year"} incomeamount={50000} expanseamount={20000} charttype={"pie"}>

    </Card>
  </div>

  
  
    </div>
  )
}

export default Dashboard