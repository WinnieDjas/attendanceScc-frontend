// import React, { Component } from 'react'
import './navbar.css'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
// import HomeIcon from '@mui/icons-material/Home';

const Navbar =()=> {
  return (
    <nav className='NavbarItems'>
      <h1 className='Nav-Logo'>Attendance</h1>
      <ul className='Nav-menu'>
        {MenuItems.map((Item, Index) =>{
          return (
            <li key={Index}>
            <a href='/'>
              {/* <i className="HomeIcon"></i> */}
              {Item.title}</a>
          </li>
          )
        })}
        
      </ul>
    </nav>
  )
}

export default Navbar
