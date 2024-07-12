import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const Piechartcard = ({data,labels}) => {    
  return (
  
    <div className=''>
        <Pie 
  data={{
    labels:labels,
  datasets:[
    {
      data: data,
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
        
        'rgb(255, 205, 86)',
      ],
      borderColor: [
        'rgba(54, 162, 235,1)',
        'rgba(255, 99, 132,1)',
        
        'rgba(255, 205, 86,1)',
      ],
      borderWidth: 1,
    },
  ],}
  }
  options={{plugins: {
   
    
  },maintainAspectRatio: false}}

  
/>
    </div>
  )
}

export default Piechartcard