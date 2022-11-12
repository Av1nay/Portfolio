import React from 'react'
import './portfolio.css'
import ProjectImage from '../../assets/project.jpg'

const projectData = [
  {
    pimage:ProjectImage,
    title:'Project Title',
    address:'www.github.com',
    demo:'www.github.com'
  },
  {
    pimage:ProjectImage,
    title:'Project Title',
    address:'www.github.com',
    demo:'www.github.com'
  },
  {
    pimage:ProjectImage,
    title:'Project Title',
    address:'www.github.com',
    demo:'www.github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          projectData.map(({pimage,title,address,demo}) => {
            return(
              <article className='portfolio_item'>
                <div className="portfolio_item_image">
                  <img src={pimage} alt={projectData.title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item_btn">
                  <a href={address} className='btn' >Go for Project</a>
                  <a href={demo} className='btn btn-primary' >Go for Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio