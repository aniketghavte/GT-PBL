import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import './Login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSignUp = () => {
    axios.post('http://localhost:4000/api/auth/register', {
      name: name,
      email: email,
      password: password
    })
    .then(async function (response) {
      // handle success
      toast.success(response.data.message);
      localStorage.setItem("userName", response.data.user.name)
      localStorage.setItem("userId", response.data.user._id)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(response);
    
      navigate('/generate-timetable')

    })
    .catch(function (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data);
    })
    .finally(function () {
    });
  }


  return (
    <>
      {localStorage.getItem("userId") !== null && (
          
          <Navigate to="/generate-timetable" replace={true} />
        )
      }
      <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Hello There, <br />
            <span className="text-primary">SignUp To Generate TimeTable</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

         
              <p>Name</p>
              <MDBInput wrapperClass='mb-4'  id='form1' type='email' placeholder='Name' value={name} onChange={handleNameChange} />
              <p>Email</p>
              <MDBInput wrapperClass='mb-4'  id='form1' type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
              <p>Password</p>
              <MDBInput wrapperClass='mb-4' id='form1' type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Me' />
              </div>

              <button className='sign_btn' style={{width: "100%", marginBottom: "2rem", border: "none", height: "2rem", borderRadius: "5px"}} onClick={handleSignUp}>Sign In</button>

              <p>Already Have an Account? <span><Link to="/login">Login Here</Link></span></p>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    </>
  )
}

export default Signup