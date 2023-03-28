import React from 'react';
import { arrowIcon, MainPageVideo } from '../../assets/assets';
import './mainpage.css';


const MainPage = () => {
  return (
    <section className='mainSection' id="main">
      <div className='backgroundWrapper'>
        <video src={MainPageVideo} autoPlay loop muted></video>
        <div className='overlay'></div>
      </div>
      <div className='mainContentWrapper'>
        <div className='contentContainerMain'>
          <h1>BE CAREFUL</h1>
          <h3>WHAT YOU WISH FOR</h3>
          <ul>
            <li><a href="#">WISHLIST NOW</a></li>
            <li><a href="#">CREATOR SIGN UP</a></li>
          </ul>
        </div>
        <div className='arrowDownDiv'>
          <a href="#section_one"><img className='arrow-icon' src={arrowIcon} alt="" /></a>
        </div>
      </div>
    </section>
  )
}

export default MainPage