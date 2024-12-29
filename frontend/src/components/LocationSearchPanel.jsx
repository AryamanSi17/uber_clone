import React from 'react'

const LocationSearchPanel = (props) => {
  const locations=["Chhotey Quazipur Khurd","123 Main St, Springfield",
    "456 Elm St, Metropolis",
    "789 Oak St, Gotham"]
  return (
    <div>
        {
          locations.map((location,index)=>(
            <div onClick={()=>{
              props.setVehiclePanelOpen(true)
              props.setpanelOpen(false)
            }}
            key={index} className='flex gap-2 border-2 p-2 border-white active:border-black items-center justify-start my-2'>
              <h2 className='bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-line"></i></h2>
              <h4 className='font-medium'>{location}</h4>
            </div>
          ))
        }
       
    </div>
  )
}

export default LocationSearchPanel