import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchartcard = ({ data, labels,label }) => {

 

  return (
    <div>
      <Bar 
      
        data={{
          labels: labels,
          datasets: [
            {  label:label,
              data: data,
              backgroundColor: ['rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',],
            },
          ],
        }}


      />
    </div>
  );
}

export default Barchartcard;
