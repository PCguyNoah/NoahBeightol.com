import React, { useState, useEffect } from 'react';
import './Home.css';
import AppBar from '@mui/material/AppBar';
import headshot from '../images/headshot.png'

const Home = () => {
  document.title = '| Noah Beightol'


  return (
      <div>
        <div className='main-container'>
          <div className='main-banner'>
            <div className='split-first-banner'>
              <div className='branded-title'>Noah Beightol</div>
            </div>

            <div className='split-last-banner'>
              <button className='branded-title-button'>About</button>
              <button className='branded-title-button'>Contact</button>
            </div>
          </div>
        </div>
        <div className='main-content-container'>
           <div className='card'></div>
           <div className='card2'></div>
           <div className='card3'></div>
        </div>
      </div>
  );
}

export default Home;