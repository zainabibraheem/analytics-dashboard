import React from 'react'
import '../App.css'
import { platformData } from './data'

const Platforms = () => {

  const newPlatformData = platformData.map((data) => {
    const { id, price, value, title, percentage, color } = data

      const style = {
         width: percentage ,
         height:'0.75rem',
         backgroundColor: color,
         borderRadius: '2.5rem',
        }
    
    return (
      <div key={id}>
        <div className='platform-item'>
          <p className='platform-title'>{title}</p>
          <div className='progress' >
            <div style={style}></div>
          </div>


          <div className='platform-price'>
            <p> ${price}</p>
            <p>+{value}%</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='platforms'>
      <div className='platform-header'>
        <h2>Top Platform</h2>
        <p>See All</p>
      </div>
      <div>
        {newPlatformData}
      </div>
    </div>
  )
}

export default Platforms