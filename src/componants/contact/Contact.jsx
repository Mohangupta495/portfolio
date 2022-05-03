import React from 'react'
import {GrMail} from "react-icons/gr"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {useRef} from 'react'
import emailjs from "emailjs-com"

import "./contact.css";

const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fk0fkrg', 'template_g6gocjc', form.current, '5wZYZuOzO9t5k1cjo')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact_container container">
        <div className="contact-options">

          <article className="contact-option">
            <GrMail size={40}/>
            <h4>Email Me</h4>
            <h4>Mohangoyal969074@gmail.com</h4>
            <a href="mailto:Mohangoyal969074@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact-option">
            <AiOutlineLinkedin size={40}/>
            <h4>Follow me</h4>
            <h4>Mohan Gupta</h4>
            <a href="https://www.linkedin.com/in/mohan-gupta-2120b1204/" target="_blank">Send a message</a>
          </article>

          <article className="contact-option">
            <AiFillGithub size={40}/>
            <h4>Whatsapp Me</h4>
            <h4>+91 9368877221</h4>
            <a href="https://api.whatsapp.com/send?phone=+9368877221" target="_blank">Send a message</a>
          </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" placeholder='Type your Message' rows="7"></textarea>
            <button className='btn btn-primary sub' type='submit'>Send Message</button>
          </form>
        
      </div>
</section>
  )
}

export default Contact