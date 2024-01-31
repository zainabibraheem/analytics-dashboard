import React from 'react'
import './dashboard.css'
import Sidebar from './component/sidebar/sidebar'
import Header from './component/header/header'
import Main from './component/main/main'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Header/>
      <Main/>
    </div>
  )
}

export default Dashboard
