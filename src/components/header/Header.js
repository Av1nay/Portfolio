import React from 'react'
import './header.css'
import CTA from './CTA'
import Avatar from '../../assets/avatar1.png'
import HeaderSocials from './HeaderSocials'
import {BiChevronsRight} from 'react-icons/bi'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>User Name</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>

        <HeaderSocials/>

        <div className="profile">
          <img src={Avatar} alt="profile" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down  <span className='BiChevronsRight-icon'><BiChevronsRight fontSize={20}/></span></a>
      </div>
    </header>
  )
}

export default Header