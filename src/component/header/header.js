import React from 'react'
import './header.css'

import photo from '../../assets/profile-photo.jpg'
import arrowDown from '../../assets/arrow-down.png'
import search from '../../assets/search.png'
import calender from '../../assets/calendar-linear.png';
import bell from '../../assets/bell-outline.png'


const Header = () => {

    const currentDate = new Date().toLocaleDateString('en-US' , {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
   }) 

  return (
    <div>
       <header className='header'>
        <div className='header-div'>
          <div className='dashboard-search'>
            <h2 className='title'>Dashboard</h2>
            <div className='search-div'>
              <img src={search} alt='search icon' />
              <input className='search-input' type='text' placeholder='search...' />
            </div>
          </div>

          <div className='profile'>
            <div className='calender-div'>
              <div className='calender'>
                <img src={calender} alt='caleder icon' />
                <p>{currentDate}</p>
              </div>
              <div className='bell-div'><img src={bell} alt='notification bell' /></div>
            </div>

            <div className='client-div'>
              <div className='client-profile'>
                <img src={photo} alt='client' />

                <div className='client-info'>
                  <p className='client-name'>Justin Bergson</p>
                  <p className='client-email'>justin@gmail.com</p>
                </div>
              </div>


              <img src={arrowDown} alt='arrow down' />

            </div>


          </div>

        </div>
      </header>
    </div>
  )
}

export default Header
