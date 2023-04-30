import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='app__navbar'>
        <div className='navbar'>
            <div>
                <p>LOGO</p>
            </div>
            <div>
                <Link to={`login`}><p>Generate TimeTable</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar