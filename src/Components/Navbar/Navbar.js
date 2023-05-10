import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='app__navbar'>
        <div className='navbar'>
          <Link to={`/`}>
            <div>
                  <p>LOGO</p>
              </div>
          </Link>
            <div>
                <Link to={`/generate-timetable`}><p>Generate TimeTable</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar