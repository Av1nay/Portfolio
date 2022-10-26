import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiMysql} from 'react-icons/si'

const frontend = [
  {
    skill:'HTML',
    working_expereince:'Expereinced',
    icon:<AiFillHtml5/>
  },
  {
    skill:'CSS',
    working_expereince:'Expereinced',
    icon:<AiFillHtml5/>
  },
  {
    skill:'JavaScript',
    working_expereince:'Expereinced',
    icon:<AiFillHtml5/>
  },
  {
    skill:'React',
    working_expereince:'Beginner',
    icon:<AiFillHtml5/>
  }
]
const backend = [
  {
    skill:'SQL',
    working_expereince:'Expereinced',
    icon:<SiMysql/>
  },
  {
    skill:'SQL',
    working_expereince:'Expereinced',
    icon:<SiMysql/>
  },
  {
    skill:'SQL',
    working_expereince:'Expereinced',
    icon:<SiMysql/>
  },
  {
    skill:'SQL',
    working_expereince:'Expereinced',
    icon:<SiMysql/>
  }
]
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experince_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {
              frontend.map(({index, skill, working_expereince, icon}) => {
                return(
                  <article className='experience_details'>
                    <div>
                      <icons>{icon}</icons>
                      <h4>{skill}</h4>
                      <small>{working_expereince}</small>
                    </div>
                  </article>
                )
              }) 
            }
          </div>
        </div>
        <div className="experince_Backend">
          <h3>Backendd Development</h3>
          <div className="experience_content">
          {
              backend.map(({index, skill, working_expereince, icon}) => {
                return(
                  <article className='experience_details'>
                    <div>
                      <icons>{icon}</icons>
                      <h4>{skill}</h4>
                      <small>{working_expereince}</small>
                    </div>
                  </article>
                )
              }) 
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience