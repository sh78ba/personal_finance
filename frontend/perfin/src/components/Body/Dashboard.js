import React from 'react'
import Card from '../Cards/Card'



const Dashboard = () => {
  return (
    <div className='p-4 bg-blue-100 h-screen flex flex-wrap justify-around'>
  <div>
  <Card cardheading={"Credit Card"} title1={"Income this Month"} title2={"Expense this Month"} incomeamount={50000} expanseamount={20000} charttype={"bar"}>

</Card>
  </div>
  <div className=''>
  <Card cardheading={"Bank"} title1={"Credit this Month"} title2={"Debit this Month"} incomeamount={50000} expanseamount={20000} charttype={"pie"}>

</Card>
  </div>
  <div>
  <Card cardheading={"Investment Tracker"} title1={"Investment this Year"} title2={"Investment last Year"} incomeamount={50000} expanseamount={20000} charttype={"bar"}>

</Card>
  </div>

  <div>
    <Card cardheading={"Overall Income this Year"} title1={"Income this Year"} title2={"Expanse this Year"} incomeamount={50000} expanseamount={20000} charttype={"pie"}>

    </Card>
  </div>

  
  
    </div>
  )
}

export default Dashboard