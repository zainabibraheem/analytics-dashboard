import React from 'react'
import './sidebar.css'
import logo from '../../assets/Vector.png';
import iconOne from '../../assets/category.png';
import iconTwo from '../../assets/trend-up.png';
import iconThree from '../../assets/profile-2user.png';
import iconFour from '../../assets/box.png';
import iconFive from '../../assets/discount-shape.png';
import iconSix from '../../assets/info-circle.png';
import iconSeven from '../../assets/brightness.png';
import iconEight from '../../assets/moon.png'
import arrow from '../../assets/arrow-right.png'
import settings from '../../assets/setting-2.png'
import logout from '../../assets/logout.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className='menu'>
        <div className='main-menu'>
          <div>
            <img src={logo} alt='logo' />
          </div>

          <div className='icon-div'>
            <div className='sb-icon'>
              
              <img src={iconOne} alt='sb icon' className='sb-icon-img' />

            </div>

            <div className='sb-icon'>
              <img src={iconTwo} alt='sb icon' className='sb-icon-img' />
            </div>

            <div className='sb-icon'>
              <img src={iconThree} alt='sb icon' className='sb-icon-img' />
            </div>

            <div className='sb-icon'>
              <img src={iconFour} alt='sb icon' className='sb-icon-img' />
            </div>

            <div className='sb-icon'>
              <img src={iconFive} alt='sb icon' className='sb-icon-img' />
            </div>

            <div className='sb-icon'>
              <img src={iconSix} alt='sb icon' className='sb-icon-img' />
            </div>

            <div className='theme-div'>
              <div className='theme'>
                <img src={iconSeven} alt='theme icon' className='theme-icon' />
                <img src={iconEight} alt='theme icon' className='theme-icon' />
              </div>
            </div>

          </div>

        </div>

        <div className='other-menu'>
        <div className='sb-icon'>
          <img src={arrow} alt='' />
        </div>

        <div className='sb-icon'>
          <img src={settings} alt='' />
        </div>

        <div className='sb-icon'>
          <img src={logout} alt='' />
        </div>
      </div>

      </div>


     
    </div>
  )
}

export default Sidebar
