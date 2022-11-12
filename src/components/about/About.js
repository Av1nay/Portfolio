import React from 'react'
import './about.css'
import Avatar from '../../assets/avatar1.png'
import {GiAchievement} from 'react-icons/gi'
import {IoIosPeople} from 'react-icons/io'
import {AiFillProject} from 'react-icons/ai'

const About = () =>{
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="conatainer about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={Avatar} alt="profile pic" />
                    </div>
                </div>    
            
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <GiAchievement className='icons'/>
                            <h5>Experience</h5>
                            <small>Numbers of years</small>
                        </article>
                        <article className="about_card">
                            <IoIosPeople className='icons'/>
                            <h5>Clients</h5>
                            <small>Number of clients</small>
                        </article>
                        <article className="about_card">
                            <AiFillProject className='icons'/>
                            <h5>Projects</h5>
                            <small>Number of Projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea placeat nisi explicabo doloremque, tempore corporis dolores deleniti iusto soluta tempora mollitia maxime. Iste minima voluptate minus nostrum. Minima, asperiores temporibus.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About