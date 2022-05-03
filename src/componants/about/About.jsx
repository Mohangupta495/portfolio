import React from 'react'
import "./about.css";
import ME from '../../assets/pc7.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt='About-Image'/>
          </div>
        </div>
        <div className="about_contant">
          <div className="about-cards">

            <article className='about-card'>
              <h2>Exprience</h2>
              <h4>Freshers</h4>
            </article>
           
            <article className='about-card'>
              <h2>Projects</h2>
              <h4>20+ Projects</h4>
            </article>


          </div>
          <div className="para">
          <p>My name is Mohan Gupta and i have always been passionate about web development, which led me to pursue a Bachelor of Computer Science degree. 
I am constantly seeking out new technologies and staying up-to-dateon trends in the industry.<br/><br/>
            Strong in design and integration with intuitive problem-solving skills. Proficient in <strong className='tech-store'>JAVA,  JAVASCRIPT, HTML,  CSS,  BOOTSTRAP and SQL.</strong> Passionate about implementing and launching new projects.


          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About