import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import Sidebar from "./Siddebar";
const ProtectedRoute = ({children}) => {
 
  let token =  JSON.parse(localStorage.getItem('token'))
  if(!token){
    console.log(token,'tokentoken')
    return <Navigate to='/login'/>
    }
   
  return (
    <div>
       <Sidebar> {children}</Sidebar>
     </div>
  )
}

export default ProtectedRoute