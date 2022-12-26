import React,{useState}from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar =()=> {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665065641/samples/Attendance%20pict/logos1_v3xdrc.png" alt=""/>
        </div>
        <div className="rightSide">
            <Link  to="/"> Home</Link>
            <Link  to="/signin"> SignIn</Link>
            <Link  to="/contact"> Contact</Link>
            <Link  to="/logout"> LogOut</Link>
        </div>

    </div>
  )
}

export default Navbar