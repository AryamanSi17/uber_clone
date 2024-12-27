import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../contexts/CaptainContext';
const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const{captain,setCaptain}=React.useContext(CaptainDataContext);
    const navigate=useNavigate();
    const submitHandler =async (e) => {
        e.preventDefault();
        const captain={
            email:email,
            password:password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
        if(response.status===200){
            const data=response.data;
            
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }
        
        setEmail('');
        setPassword('');
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="uber_captain_logo" className='w-16 mb-8' />
                <form onSubmit={(e) => { submitHandler(e); }}>
                    <h3 className='text-lg font-medium mb-2'>
                        What's your email?
                    </h3>
                    <input required value={email} type="email" placeholder="Email" className='bg-[#eeeeee] border rounded-lg px-4 py-2 w-full text-lg placeholder:text-base' onChange={(e) => setEmail(e.target.value)} />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input type="password" value={password} placeholder="Password" className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' onChange={(e) => setPassword(e.target.value)} />
                    <button className='bg-black text-white w-full py-2 px-4 rounded-lg font-semibold mb-3'>Login</button>
                </form>
                <p className='text-center'>New here? <Link to='/captain-signup' className='text-blue-600'>Create New Account</Link></p>
            </div>
            <div>
                <Link to='/login' className='bg-orange-500 flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg'>Sign in as a user</Link>
            </div>
        </div>
    );
};

export default CaptainLogin;
