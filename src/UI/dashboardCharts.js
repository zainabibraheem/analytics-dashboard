import React from 'react'
import { chartData } from './data'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import '../App.css'

const Charts = () => {

  const options = {
    maintainAspectRatio: true,
    aspectRatio: 2,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        }
      },

      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10000,
        }
      }
    }
  }

  return (
    <div className='charts'>
      <div className='chart div'>
        <h2>Charts</h2>

        <div >
          <Bar
            data={
              {
                labels: chartData.map((data) => data.label),
                datasets: [
                  {
                    label: 'sales',
                    data: chartData.map((data) => data.value),
                    borderWidth: 1
                  }
                ]
              }
            }

            options={options}
          />
        </div>
      </div>
    </div>
  )
}

export default Charts
