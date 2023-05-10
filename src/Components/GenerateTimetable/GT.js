import React from 'react'
import { Navigate } from "react-router-dom";

const GT = () => {

  console.log(localStorage.getItem("isUserLoggedIn"))
  
  return (
    <div className=''>
      {localStorage.getItem("isUserLoggedIn") === null && (
          <Navigate to="/login" replace={true} />
        )
      }
    </div>
  )
}

export default GT