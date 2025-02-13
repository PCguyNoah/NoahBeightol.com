import React, { useState, useEffect } from 'react';
import './Home.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import headshot from '../images/Noah-headshot.JPG'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typed from 'typed.js';

const Home = () => {
  document.title = '| Noah Beightol'
  const [activeSection, setActiveSection] = React.useState('');
  const el = React.useRef(null);
  React.useEffect(() =>
  {
      const typed = new Typed(el.current, {
          strings: ['Welcome!^1000','Noah Beightol ^1000'],
          smartBackspace: true,
          typeSpeed: 70,
      });

      return () =>
      {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
      };
  }, []);

  const handleScrollTo = (event, id) => {
    event.preventDefault();
    // Set the active section to this ID
    setActiveSection(id);

    // Scroll to the element with matching id
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div>
        <div className='main-container'>
          <div className='content-container'>
            <div className='title-container'>
              <span className="home-title" ref={el} />
            </div>

            <div className="card-container" id="about-section">
              <div className="card">
                <div className='headshot-container'>
                  <Avatar 
                    alt="Remy Sharp" 
                    src={headshot} 
                    sx={{ width: 120, height: 120 }}
                  />
                </div>
                
                <div className='headshot-container'>
                  I am currently a senior pursuing a Bachelor's Degree in Computer Science at the University of Central Florida. My interests lie in Big Data, Machine Learning, Artificial Intelligence, & Game Development. Additionally, I am an undergraduate researcher and work as a Peer Mentor for students interested in pursuing internship or research opportunities as well.
                </div>
              </div>
              
            </div>

            <div className="card-container" id="experience-section">
              <div className="card">
              </div>
            </div>

            <div className="card-container" id="contact-section">
              <div className="card">
              </div>
            </div>
          </div>

          <div className='bottom-container' role="presentation">
            <Breadcrumbs className='bottom-container-text' aria-label="breadcrumb">
              <Link 
                underline="hover" 
                color={activeSection === 'about-section' ? 'text.primary' : 'inherit'}
                href="#"
                onClick={(e) => handleScrollTo(e, 'about-section')}
              >
                About
              </Link>
              <Link
                underline="hover"
                color={activeSection === 'experience-section' ? 'text.primary' : 'inherit'}
                href="#"
                onClick={(e) => handleScrollTo(e, 'experience-section')}
              >
                Experience
              </Link>
              <Link
                underline="hover"
                color={activeSection === 'contact-section' ? 'text.primary' : 'inherit'}
                href="#"
                onClick={(e) => handleScrollTo(e, 'contact-section')}
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