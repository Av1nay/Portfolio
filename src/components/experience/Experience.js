import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiMysql} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experince_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <div>
                <icons><AiFillHtml5/></icons>
                <h4>HTML</h4>
                <small>Experienced</small>  
              </div>
            </article>
            <article className='experience_details'>
            <div>
                <icons><AiFillHtml5/></icons>
                <h4>HTML</h4>
                <small>Experienced</small>  
              </div>
            </article>
            <article className='experience_details'>
              <div>
                <icons><AiFillHtml5/></icons>
                <h4>HTML</h4>
                <small>Experienced</small>  
              </div>
            </article>
          </div>
        </div>
        <div className="experince_Backend">
          <h3>Backendd Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <div>
                <icons><SiMysql/></icons>
                <h4>SQL</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <div>
              <icons><SiMysql/></icons>
                <h4>SQL</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <div>
              <icons><SiMysql/></icons>
                <h4>SQL</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience