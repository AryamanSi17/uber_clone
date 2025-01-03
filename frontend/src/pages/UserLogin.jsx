import React, { useState, useContext } from 'react'
import { UserDataContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
    const submitHandler = async (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if (response.status === 200) {
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber_logo" className='w-16 mb-8' />
                <form onSubmit={(e) => { submitHandler(e) }}>
                    <h3 className='text-lg font-medium mb-2'>
                        What's your email?
                    </h3>
                    <input required value={email} type="email" placeholder="Email" className='bg-[#eeeeee] border rounded-lg px-4 py-2 w-full text-lg placeholder:text-base' onChange={(e) => setEmail(e.target.value)} />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input type="password" value={password} placeholder="Password" className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' onChange={(e) => setPassword(e.target.value)} />
                    <button className='bg-black text-white w-full py-2  px-4 rounded-lg font-semibold mb-3'>Login</button>
                </form>
                <p className='text-center'>New here? <Link to='/signup' className='text-blue-600' >Create New Account</Link></p>
            </div>
            <div>
                <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg'>Sign in as a captain</Link>
            </div>
        </div>
    )
}

export default UserLogin