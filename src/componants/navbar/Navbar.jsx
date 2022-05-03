import React, { useState } from 'react';
import "./navbar.css";
import {FaHome , FaUserAlt} from 'react-icons/fa'
import {BiBook ,BiMessageAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Navbar = () => {
    const [activeNav,setActiveNav]=useState('#');

  return (
 <nav id='nav-tag'>  
   <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' :''}><FaHome size={20}/></a>
   <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' :''}><FaUserAlt size={20}/></a>
   <a href="#experience" onClick={()=>setActiveNav('#exp')} className={activeNav==='#exp' ? 'active' :''}><BiBook size={20}/></a>
   <a href="#project" onClick={()=>setActiveNav('#per')} className={activeNav==='#per' ? 'active' :''}><RiServiceLine size={20}/></a>
   <a href="#contact" onClick={()=>setActiveNav('#con')} className={activeNav==='#con' ? 'active' :''}><BiMessageAlt size={20}/></a>
 </nav>
  )
}

export default Navbar