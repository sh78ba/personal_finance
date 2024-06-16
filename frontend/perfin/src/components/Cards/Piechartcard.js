import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const Piechartcard = () => {
    
  return (
    <div className=''>
        <Pie
  data={{
    labels:['Rent', 'Food',"Electricity"],
  datasets:[
    {
      data: [25000, 10000, 2000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],}
  }
  options={{plugins: {
    legend: {
      display: false,
    },
  },}}

  
/>
    </div>
  )
}

export default Piechartcard