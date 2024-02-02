import React from 'react'
import '../App.css'
import { ordersData } from './data'
import downloadInvoice from '../assets/download-icon.png'

const Tables = () => {
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <div className='orders'>
      <div className='orders-header'>
        <h2>Last Orders</h2>
        <p>See All</p>
      </div>
      <table className='order'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>

        </thead>

        <tbody>
          {ordersData.map((data) => {

            const { id, name, status, price, image, } = data

            return (
              <tr key={id}>
                <td className='td-name'>
                  {image}
                  <span>{name}</span>
                </td>

                <td className='td-date'>{currentDate}</td>

                <td className='td-price'>${price}</td>
                <td>{status}</td>
                <td className='td-invoice'>
                  <img src={downloadInvoice} alt='download invoice' />
                  <span>view</span>
                </td>
              </tr>
            )

          })}

        </tbody>

      </table>
    </div>
  )
}

export default Tables
