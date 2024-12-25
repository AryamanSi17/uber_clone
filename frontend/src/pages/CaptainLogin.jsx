import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        });
        console.log(captainData);
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
