import React from 'react'
import '../App.css'
import totalOrder from '../assets/box-tick.png';
import totalRefund from '../assets/3d-rotate.png';
import averageSales from '../assets/shopping-cart.png';
import totalIncome from '../assets/coin.png';
import greenGraph from '../assets/group-3.png';
import trendingUp from '../assets/trending-up.png';
import trendingDown from '../assets/trending-down.png';
import redGraph from '../assets/group-4.png'



const Trends = () => {

  return (
    <div className='trends'>
      <div className='trend'>
        <div className='trend-div'>
          <img src={totalOrder} alt=''box tick/>
          <img src={greenGraph}  alt='graph'/>
        </div>
        
        <p>Total Order</p>

        <p>350</p>

        <div className='trend-div'>
          <div className='trendingup-div'>
            <img  src={trendingUp} alt='trending-up'/>
            <p>23.5%</p>
          </div>
          <p>vs. previous month</p>
        </div>

      </div>

      <div className='trend'>
        <div className='trend-div'>
          <img src={totalRefund} alt=''box tick/>
          <img src={redGraph}  alt='graph'/>
        </div>
        
        <p>Total refund</p>

        <p>270</p>

        <div className='trend-div'>
          <div className='trendingdown-div'>
            <img  src={trendingDown} alt='trending-down'/>
            <p>23.5%</p>
          </div>
          <p>vs. previous month</p>
        </div>

      </div>

      <div className='trend'>
        <div className='trend-div'>
          <img src={averageSales} alt=''box tick/>
          <img src={redGraph}  alt='graph'/>
        </div>
        
        <p>Average Sales</p>

        <p>1567</p>

        <div className='trend-div'>
          <div className='trendingdown-div'>
            <img  src={trendingDown} alt='trending-down'/>
            <p>23.5%</p>
          </div>
          <p>vs. previous month</p>
        </div>

      </div>

      <div className='trend'>
        <div className='trend-div'>
          <img src={totalIncome} alt=''box tick/>
          <img src={greenGraph}  alt='graph'/>
        </div>
        
        <p>Total Income</p>

        <p>$350.000</p>

        <div className='trend-div'>
          <div className='trendingup-div'>
            <img  src={trendingUp} alt='trending-up'/>
            <p>23.5%</p>
          </div>
          <p>vs. previous month</p>
        </div>

      </div>

    </div>
  )
}

export default Trends
