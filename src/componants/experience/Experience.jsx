import React from 'react';
import "./experience.css";
import {BsStarFill,BsStarHalf,BsBootstrapFill} from 'react-icons/bs'
import {FaHtml5 ,FaJava} from 'react-icons/fa'
import {RiReactjsLine} from 'react-icons/ri'
import {SiCss3,SiMysql,SiVisualstudio} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container-experience container">
        <div className="experience-frontend">
          <div className="containt-experience">

            <article className='experience-details'> 
            <div>
              <div className="logo-name">
            <FaHtml5 className='html-icon' size={50}  />
            <h4>HTML</h4></div>
            <div className="rate">
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
            </div></div>
            </article>

            <article className='experience-details'> 
            <div><div className="logo-name">
            <SiCss3 className='css-icon' size={50}/>
            <h4>CSS</h4>
            </div>
            <div className="rate">
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
            <BsStarFill className='starb'/>
            </div></div>
            </article>

            <article className='experience-details'> 
            <div><div className="logo-name"><IoLogoJavascript className='js-icon' size={50}/>
            <h4>JavaScript</h4>
            </div>
            <div className="rate">
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='starb'/>
            <BsStarFill className='starb'/>
            </div></div>
            </article>

            <article className='experience-details'> 
            <div>
            <div className="logo-name"><RiReactjsLine className='react-icon' size={50}/>
            <h4>ReactJS</h4>
            </div>
            <div className="rate">
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
            <BsStarFill className='starb'/>
            <BsStarFill className='starb'/>
            </div>
            </div>
            </article>
          </div>
          </div>

        <div className="experience-backend">
          <div className="containt-experience">
         
            <article className='experience-details'> 
            <div><div className="logo-name"><FaJava className='java-icon' size={50}/>
            <h4>Java</h4></div>
            <div className="rate">
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
            </div></div>
            </article>

            <article className='experience-details'> 
            <div>
            <div className="logo-name"><BsBootstrapFill className='boot-icon' size={50}/>
            <h4>Bootstrap</h4></div>
            <div className="rate">
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
            <BsStarFill className='starb'/>
            
            </div>
            </div>
            </article>

            <article className='experience-details'> 
              <div>
              <div className="logo-name">
              <SiMysql className='mongo-icon' size={50}/>
            <h4>My Sql</h4>
              </div>
           <div className="rate">
           <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
            <BsStarFill className='starb'/>
            <BsStarFill className='starb'/>
           </div>
              </div>
            </article>

            <article className='experience-details'> 
        <div>
        <div className="logo-name"><SiVisualstudio className='node-icon' size={50}/>
            <h4>Visual Studio</h4></div>
           <div className="rate">
           <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
            <BsStarFill className='starb'/>
            <BsStarFill className='starb'/>
           </div>
        </div>
            </article>
            
            
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience