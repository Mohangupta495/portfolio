import React from 'react'
import {BsLinkedin ,BsWhatsapp} from "react-icons/bs"
import {SiGithub} from "react-icons/si"
import {GrMail} from "react-icons/gr"

const HeaderSection = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/mohan-gupta-2120b1204/" target="_blank"><BsLinkedin size={30}/></a>
        <a href="https://github.com/Mohangupta495" target="_blank"><SiGithub size={30}/></a>
        <a href="mailto:Mohangoyal969074@gmail.com" target="_blank"><GrMail size={30}/></a>
    </div>
  )
}

export default HeaderSection