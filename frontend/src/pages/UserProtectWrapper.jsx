//this file is created to handle the home page access for the user

import React,{ useState,useEffect, useContext } from 'react'
import {UserDataContext} from '../contexts/UserContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const UserProtectWrapper = ({children}) => {
    const {user,setUser}=useContext(UserDataContext)
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    useEffect(()=>{
    if(!token){
      navigate('/login')
    }

    },[token])
  return (
   <>
   {children}
   </>
  )
}

export default UserProtectWrapper