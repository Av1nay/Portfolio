import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaRegUser} from 'react-icons/fa'
import {RiContactsBookUploadFill} from 'react-icons/ri'
import {BiMessageRoundedEdit} from 'react-icons/bi'

const Nav = () => {
  return (
    <>
      <nav>
        <li><a href='#'><HiHome/></a></li>
        <li><a href='#about'><FaRegUser/></a></li>
        <li><a href='#experience'><RiContactsBookUploadFill/></a></li>
        <li><a href='#contact'><BiMessageRoundedEdit/></a></li>
      </nav>
    </>
  )
}

export default Nav