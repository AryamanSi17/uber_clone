import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>

            <h5 className=' text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehiclePanelOpen(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className="flex border-2 border-white active:border-black mb-2 rounded-xl w-full p-3 items-center">
                <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png" alt="Vehicle" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-base">
                        UberGo <span><i className="ri-user-fill">4</i></span>
                    </h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-normal text-xs text-gray-600">
                        Affordable, compact ride
                    </p>
                </div>
                <h2 className="text-lg font-semibold">₹193.20</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className="flex border-2  border-white active:border-black mb-2 rounded-xl w-full p-3 items-center">
                <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Vehicle" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-base">
                        Moto <span><i class="ri-user-fill">1</i></span>
                    </h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-normal text-xs text-gray-600">
                        Affordable, motor ride
                    </p>
                </div>
                <h2 className="text-lg font-semibold">₹93.20</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className="flex border-2  border-white active:border-black mb-2 rounded-xl w-full p-3 items-center">
                <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="Vehicle" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-base">
                        UberAuto <span><i class="ri-user-fill">3</i></span>
                    </h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-normal text-xs text-gray-600">
                        Affordable, auto ride
                    </p>
                </div>
                <h2 className="text-lg font-semibold">₹113.20</h2>
            </div>
        </div>
    )
}

export default VehiclePanel