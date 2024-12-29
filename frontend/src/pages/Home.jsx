import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRidePanel from '../components/ConfirmRidePanel';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const lookingForDriverRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [lookingForDriver, setLookingForDriver] = useState(false)
  const [ waitingForDriver, setWaitingForDriver ] = useState(false)
  console.log('Confirm Ride Panel:', confirmRidePanel);
console.log('Looking For Driver:', lookingForDriver);
console.log('LookingForDriverRef:', lookingForDriverRef.current);


  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (lookingForDriver) {
      gsap.to(lookingForDriverRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(lookingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [lookingForDriver])
  return (
    <div>
      <img className='w-16 absolute left-5 top-5 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
      <div className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src="https://datei.wiki/blog/wp-content/uploads/2020/10/schedule-uber-in-advance.01-5bfc595146e0fb002614ed1b.jpg" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setpanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-bold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-16 w-1 bg-gray-900 top-[50%] left-10 rounded-full'></div>
            <input
              onClick={() => {
                setpanelOpen(true)
              }}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type="text" placeholder='Enter your location' />
            <input
              onClick={() => {
                setpanelOpen(true)
              }}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
              type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-[0%] bg-white' >
          <LocationSearchPanel setpanelOpen={setpanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div className="fixed w-full z-10 bottom-0 bg-white px-3 py-6" ref={vehiclePanelRef}>
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <ConfirmRidePanel setConfirmRidePanel={setConfirmRidePanel} setLookingForDriver={setLookingForDriver} />
      </div>
      <div ref={lookingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <LookingForDriver />
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full  z-10 bottom-0  bg-white px-3 py-6 pt-12'>
                <WaitingForDriver
                    setLookingForDriver={setLookingForDriver}
                    setWaitingForDriver={setWaitingForDriver}
                    waitingForDriver={waitingForDriver} />
       </div>
    </div>
  )

}

export default Home