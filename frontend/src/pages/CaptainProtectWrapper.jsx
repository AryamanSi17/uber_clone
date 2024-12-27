import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../contexts/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
    }, [token])
    return (
        <>{children}</>
    )
}

export default CaptainProtectWrapper