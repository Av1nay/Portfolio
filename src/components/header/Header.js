import React from 'react'
import './header.css'
import CTA from './CTA'
import Avatar from '../../assets/avatar1.png'
import HeaderSocials from './HeaderSocials'
import {BiChevronsRight} from 'react-icons/bi'

const Header = () => {
  return (
    <section id='#home'>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h2>Abhinay Chaudhary</h2>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="profile">
          <img src={Avatar} alt="profile" />
        </div>
        <a href="#about" className='scroll_down'>Scroll Down<span className='BiChevronsRight-icon'>
          <BiChevronsRight fontSize={20}/>
        </span></a>
      </div>
    </section>
  )
}
export default Header