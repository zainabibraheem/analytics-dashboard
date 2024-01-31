import React from 'react'
import './main.css'
import Charts from '../../UI/dashboardCharts'
import Trends from '../../UI/dashboardTrends'
import Tables from '../../UI/dashboardOrders'
import Platforms from '../../UI/dashboardPlatforms'

const Main = () => {
  return (
    <div className='main'>
      <Charts />
      <Trends/>
      <Tables/>
      <Platforms/>
    </div>
  )
}

export default Main
