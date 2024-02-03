import React from 'react'
import { chartData } from './data'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import '../App.css'

const Charts = () => {

  const options = {
    maintainAspectRatio: true,
    aspectRatio: 3,
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {

        }
      }
    },
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
      <div className='chart-div'>
        <h2>Charts</h2>

        <div  className='chart-container'>
          <Bar
            data={
              {
                labels: chartData.map((data) => data.label),
                datasets: [
                  {
                    label: '',
                    data: chartData.map((data) => data.value),
                    borderWidth: 2,
                    backgroundColor: '#34cAA540',
                    
                    borderRadius: {
                      topLeft: 80,
                      topRight: 80,
                      bottomLeft: 0,
                      bottomRight: 0,
                    }
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
