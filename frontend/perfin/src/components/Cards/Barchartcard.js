import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchartcard = ({data}) => {
  return (
    <div>
        <Bar data={{
            labels:['Food', 'Rent', 'Electricity', 'Shopping', 'Medicine'],
            datasets: [
                {
                  
                  data: data,
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ],
        }}>

        </Bar>
    </div>
  )
}

export default Barchartcard