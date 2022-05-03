import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/avatar12.png'
import HeaderSection from './HeaderSection';

const Header = () => {
  return (
  <header>
    <div className="header_container">
     <h5>Hello I'm</h5>
     <h1>Mohan Gupta</h1>
     <h5 className='text-light'>Front-end Doveloper</h5>
      <CTA/>
      <HeaderSection/>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
     <div className="me">
      <img src={ME} alt="me"/>
     </div>
    </div> 
  </header>
  )
}

export default Header