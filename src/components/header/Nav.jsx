import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    const {path , txtRoute} = props
  return (
    <li className='item_nav'>
        <NavLink to={path}>{txtRoute}</NavLink>
    </li>
  )
}

export default Nav