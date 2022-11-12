import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaRegUser} from 'react-icons/fa'
import {RiContactsBookUploadFill} from 'react-icons/ri'
import {RiPassportFill} from 'react-icons/ri'
import {BiMessageRoundedEdit} from 'react-icons/bi'

const navmenu = [
  {
    id:1,
    itle:"#home",
    icon:<HiHome/>
},
{
    id:2,
    title:"#about",
    icon:<FaRegUser/>
},
{
    id:3,
    title:"#experience",
    icon:<RiContactsBookUploadFill/>
},
{
    id:4,
    title:"#portfolio",
    icon:<RiPassportFill/>
},
/* {
    id:5,
    title:"#contact",
    icon:<BiMessageRoundedEdit/>
} */
]

const Nav = () => {
  return(
    <nav>
      {
        navmenu.map(({id, title, icon}) => {
          return (
            <a href={title} key={id}>{icon}</a>
          )
        })
      }
    </nav>
  )
}
export default Nav