import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className='bg-cover h-screen pt-8 flex justify-between flex-col w-full bg-red-400 bg-[url(https://images.unsplash.com/photo-1501746655892-baf3ac230061?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] '>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber_logo" className='w-16 ml-8' />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-2xl font-bold'>Get started with Uber</h2>
                <Link to ='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home