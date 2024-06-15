import React, { useState } from 'react'



export default function Ticket() {
    const [form, setform] = useState({
        name : '',
        contactNo: '',
        flatNo: '',
        buildingName: '',
        street: '',
        city: '',
        postalCode: '',
        issue: ''
        })
        const handleChange = (e) => {
            const { name, value } = e.target;

            setform({
              ...form,
              [name]: value
            });

          };

  return (
    
    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
            
            <div className='flex flex-col mb-4'>
                <label>Name</label>
                <input className='border relative bg-gray-100 p-2' name="name" value={form.name} onChange={handleChange} type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Contact No.</label>
                <input className='border relative bg-gray-100 p-2' name="contactNo" value={form.contactNo}  onChange= {handleChange} type="tel" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Flat Number</label>
                <input className='border relative bg-gray-100 p-2' value={form.flatNo} type="text" required />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Building Name</label>
                <input className='border relative bg-gray-100 p-2' value={form.buildingName} type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Street</label>
                <input className='border relative bg-gray-100 p-2'  value={form.street} type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>City</label>
                <input className='border relative bg-gray-100 p-2' value={form.city} type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Postal Code</label>
                <input className='border relative bg-gray-100 p-2' value={form.postalCode} type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Issue</label>
                <textarea className='border relative bg-gray-100 p-2' value={form.issue} rows="5"></textarea>
            </div>
            <button className='w-full py-3 mt-8 bg-purple-800 hover:bg-purple-600 relative text-white' >Proceed</button>
            
            
        </form>
    </div>
    
  )
}