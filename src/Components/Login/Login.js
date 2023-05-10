import React from 'react'
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

const Login = () => {
  return (
  <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Hello There, <br />
            <span className="text-primary">Login To Generate TimeTable</span>
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

              <MDBRow>
                <MDBCol col='6'>
                  <p>First Name</p>
                  <MDBInput wrapperClass='mb-4'  id='form1' type='text' placeholder='FirstName'/>
                </MDBCol>

                <MDBCol col='6'>
                  <p>Last Name</p>
                  <MDBInput wrapperClass='mb-4'  id='form1' type='text' placeholder='LastName'/>
                </MDBCol>
              </MDBRow>
              <p>Email</p>
              <MDBInput wrapperClass='mb-4'  id='form1' type='email' placeholder='Email'/>
              <p>Password</p>
              <MDBInput wrapperClass='mb-4' id='form1' type='password' placeholder='Password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Me' />
              </div>

              <button className='sign_btn' style={{width: "100%", marginBottom: "2rem", border: "none", height: "2rem", borderRadius: "5px"}}>Sign In</button>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default Login