import React, { useEffect, useState } from 'react'
import Card from '../Cards/Card'
import axios from 'axios';



const Dashboard = () => {

  const [groupBankDebit,setGroupBankDebit]=useState(null)
  const [groupBankCredit,setGroupBankCredit]=useState(null)
  const [groupCreditCardCredit,setGroupCreditCardCredit]=useState(null)
  const [groupCreditCardDebit,setGroupCreditCardDebit]=useState(null)
  const [chartData,setChartData]=useState(null)
  const [chartDataCreditCard,setChartDatareditCard]=useState(null)
  const [currentYearInvestment,setCurrentYearInvestment]=useState(null)
  const [prevYearInvestment,setPrevYearInvestment]=useState(null)
  const [investChartData,setInvestChartData]=useState(null)
  const [creditSum,setCreditSum]=useState(null);
  const [debitSum,setDebitSum]=useState(null)
  const [overallIncomeChartData,setOverallIncomeChartData]=useState(null)

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
     
    const twoyearresponse = await axios.get("http://localhost:8888/personalfinance/api/v1/transaction/gettwoyearinvestment", {
      params: { email: localStorage.getItem("useremail") },
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    });

    const overallincomeresponse = await axios.get("http://localhost:8888/personalfinance/api/v1/transaction/overallincome", {
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
    setChartDatareditCard([
      groupedSums["CREDIT CARD"].CREDIT||0,
      groupedSums["CREDIT CARD"].DEBIT||0
    ])

    setCreditSum(overallincomeresponse.data["creditSum"])
    setDebitSum(overallincomeresponse.data["debitSum"])

    setOverallIncomeChartData([overallincomeresponse.data["creditSum"],overallincomeresponse.data["debitSum"]])


    //sum of investment for current year
    const {currentYear,previousYear}=twoyearresponse.data
        const currentYearSum = currentYear.reduce((acc, transaction) => acc + transaction.amount, 0);
        const previousYearSum = previousYear.reduce((acc, transaction) => acc + transaction.amount, 0);
       setCurrentYearInvestment(currentYearSum)
       setPrevYearInvestment(previousYearSum)

       setInvestChartData([
        previousYearSum,
        currentYearSum
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
  <Card cardheading={"Credit Card"} title1={"Income this Month"} title2={"Expense this Month"} incomeamount={groupCreditCardCredit} expanseamount={groupCreditCardDebit} charttype={"bar"} chartData={chartDataCreditCard} labels={['CREDIT', 'DEBIT']} label={"Credit Usage"}> 

</Card>
  </div>
  <div className='my-3'>
  <Card cardheading={"Bank"} title1={"Credit this Month"} title2={"Debit this Month"} incomeamount={groupBankCredit} expanseamount={groupBankDebit} charttype={"pie"}  chartData={chartData} labels={['CREDIT', 'DEBIT']}>

</Card>
  </div>
  <div className='my-3'>
  <Card cardheading={"Investment Tracker"} title1={"Investment this Year"} title2={"Investment last Year"} incomeamount={currentYearInvestment} expanseamount={prevYearInvestment} charttype={"bar"} chartData={investChartData} labels={['PREVIOUS YEAR', 'CURRENT YEAR']} label={"Investment"}>

</Card>
  </div>

  <div className='my-3'>
    <Card cardheading={"Overall Income this Year"} title1={"Income this Year"} title2={"Expanse this Year"} incomeamount={creditSum} expanseamount={debitSum} charttype={"pie"} chartData={overallIncomeChartData} labels={["Income this Year","Expense this Year"]}>

    </Card>
  </div>

  
  
    </div>
  )
}

export default Dashboard