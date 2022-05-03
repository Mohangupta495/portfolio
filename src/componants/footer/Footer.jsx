import React from 'react';
import "./footer.css";
import {SiGmail} from "react-icons/si"
import {AiFillGithub,AiOutlineLinkedin} from "react-icons/ai"



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Mohan Gupta</a>

      <ul className='footer_pera'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Experience</a></li>
        <li><a href="#per">Project</a></li>
        <li><a href="#con">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://github.com/Mohangupta495" target="_blank"><AiFillGithub size={40}/></a>
        <a href="https://www.linkedin.com/in/mohan-gupta-2120b1204/" target="_blank"><AiOutlineLinkedin size={40}/></a>
        <a href="mailto:Mohangoyal969074@gmail.com" target="_blank"><SiGmail size={40}/></a>
      </div>

      <div className="footer_copyright">
        <p>Desined By Mohan Gupta</p>
      </div>
    </footer>
  )
}

export default Footer