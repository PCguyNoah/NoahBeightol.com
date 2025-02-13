import React, { useState, useEffect } from 'react';
import './Home.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import headshot from '../images/file.png'
import Typed from 'typed.js';

const Home = () => {
  document.title = '| Noah Beightol'

  const el = React.useRef(null);
  React.useEffect(() =>
  {
      const typed = new Typed(el.current, {
          strings: ['Hello^1000', 'Hola^1000', 'Bonjour^1000', 'Nǐn hǎo^1000','Ciao^1000'],
          smartBackspace: true,
          shuffle: true,
          typeSpeed: 70,
      });

      return () =>
      {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
      };
  }, []);

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
      <div>
        <div className='main-container'>
          <div className='content-container'>
          <span className="home-title" ref={el} />
            <div className='card'>
            </div>
          </div>

          
        

          <div className='bottom-container' role="presentation" onClick={handleClick}>
            <Breadcrumbs className='bottom-container-text' aria-label="breadcrumb">
              <Link underline="hover" color="text.primary" href="/">
                About
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Experience
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
              >
                Contact
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>
  );
}

export default Home;