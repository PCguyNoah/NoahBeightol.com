import React, { useState, useEffect } from 'react';
import './Home.css';
import Typed from 'typed.js';
import SchoolIcon from '@mui/icons-material/School';
import headshot from '../images/Noah-headshot.JPG'
import Avatar from '@mui/material/Avatar';
import CodeIcon from '@mui/icons-material/Code';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const Home = () => {
  document.title = '| Noah Beightol'

  const [activeSection, setActiveSection] = React.useState('');
  const el = React.useRef(null);
  React.useEffect(() =>
  {
      const typed = new Typed(el.current, {
          strings: ['Hello!^500','My name is Noah Beightol ^500'],
          smartBackspace: true,
          typeSpeed: 70,
      });

      return () =>
      {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
      };
  }, []);

  return (
      <div>
        <div className='main-container'>
            <div className='title-container'>
              <span className="home-title" ref={el} />
            </div>
          </div>

          <div className='info-container'>
            <div className='blurb'>
              <div className='school-icon'>
                <SchoolIcon sx={{ fontSize: 80 }}/>
              </div>
              <div className='school-text'>
                  I studied computer science at the University of Central Florida
                </div>
            </div>

            <div className='blurb'>
              <div className='work-icon'>
                <CodeIcon sx={{ fontSize: 80 }}/>
              </div>
              <div className='work-text'>
                  I currently work at DICK'S Sporting Goods as a full stack Software Engineer
                </div>
            </div>

            <div className='blurb'>
              <div className='fun-icon'>
                <ColorLensIcon sx={{ fontSize: 80 }}/>
              </div>
              <div className='fun-text'>
                  I am an aspiring content creator who focuses on introspective content
                </div>
            </div>
          </div>

          <div className='alert-box'>
            <div className='alert-info'>
              <Alert className='alert-text' variant="filled" icon={<CheckIcon fontSize="inherit" />} severity="success">
                Status: Noah currently has a job!
              </Alert>
            </div>
          </div>
          
            
          <div className='bottom-container' role="presentation">
            <Breadcrumbs className='bottom-container-text' aria-label="breadcrumb">
              <Link 
                underline="hover" 
                href="https://www.youtube.com/@PCguyNoah"
                color='text.primary'
              >
                <YouTubeIcon fontSize="large"/>
              </Link>

              <Link
                underline="hover"
                href="https://www.linkedin.com/in/noahbeightol/"
                aria-current="page"
                color='text.primary'
              >
                <LinkedInIcon fontSize="large"/>
              </Link>

              <Link
                underline="hover"
                href="https://github.com/PCguyNoah"
                color='text.primary'
              >
                <GitHubIcon fontSize="large"/>
              </Link>
            </Breadcrumbs>
          </div>
      </div>
  );
}

export default Home;