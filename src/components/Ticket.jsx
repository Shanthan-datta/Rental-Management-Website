import React from 'react'



export default function Ticket() {
  return (

    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
            
            <div className='flex flex-col mb-4'>
                <label>Name</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Contact No.</label>
                <input className='border relative bg-gray-100 p-2' type="tel" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Flat Number</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Building Name</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Street</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>City</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Postal Code</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Issue</label>
                <textarea className='border relative bg-gray-100 p-2' rows="5"></textarea>
            </div>
            <button className='w-full py-3 mt-8 bg-purple-800 hover:bg-purple-600 relative text-white'>Proceed</button>
            
            
        </form>
    </div>
    
  )
}