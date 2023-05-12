import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const [isUserExist, setIsUserExist] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    setIsUserExist(false)
    navigate("/login");
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (localStorage.getItem("userId")) {
        setIsUserExist(true);
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div className='app__navbar'>
        <div className='navbar'>
          <Link to={`/`}>
            <div>
                  <p>LOGO</p>
              </div>
          </Link>
            <div>
              {
                isUserExist ? <>
                      <Dropdown>
                          <Dropdown.Toggle variant="" id="dropdown-basic" style={{fontSize: "1.5rem"}}>

                            Hey, {localStorage.getItem("userName")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item><Link to={`/generate-timetable`}>Generate TimeTable</Link></Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout}>LogOut</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                </> : <>
                   <div className=''>
                    <div>
                        <Link to="/signup">
                          <button className="authButton" style={{color: "black"}}>SignUp</button>
                        </Link>
                        <Link to="/login">
                          <button className="authButton" style={{backgroundColor: "black", color: "white"}}>Login</button>
                        </Link>
                      </div>
                   </div>
                </>
              }
        
            </div>
        </div>
    </div>
  )
}

export default Navbar