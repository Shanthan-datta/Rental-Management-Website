import React, { useState } from 'react'
import axios from "axios"




export default function Ticket() {
    
    const [form, setform] = useState({
        name : '',
        email: "",
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
          const aftersubmission = async (e)=>{
            e.preventDefault()
            await axios.post("http://localhost:1000/api/v2/ticket", form)
            .then((response)=>{
                console.log(response)
                setform({
                    name : '',
                    email: "",
                    contactNo: '',
                    flatNo: '',
                    buildingName: '',
                    street: '',
                    city: '',
                    postalCode: '',
                    issue: ''
                    })
            })
            
          }

  return (
    
    <div className='flex justify-center items-center h-full'>
         
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' >
            <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
            
            <div className='flex flex-col mb-4'>
                <label>Name</label>
                <input className='border relative bg-gray-100 p-2' name="name" value={form.name} onChange={handleChange} type="text" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative bg-gray-100 p-2' name="email" value={form.email} onChange={handleChange} type="text" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Contact No.</label>
                <input className='border relative bg-gray-100 p-2' name="contactNo" value={form.contactNo}  onChange= {handleChange} type="tel" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Flat Number</label>
                <input className='border relative bg-gray-100 p-2' name="flatNo" value={form.flatNo} onChange= {handleChange} type="text" required />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Building Name</label>
                <input className='border relative bg-gray-100 p-2' name="buildingName" value={form.buildingName} onChange= {handleChange} type="text" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Street</label>
                <input className='border relative bg-gray-100 p-2' name="street" value={form.street} onChange= {handleChange} type="text" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>City</label>
                <input className='border relative bg-gray-100 p-2' name="city" value={form.city} onChange= {handleChange} type="text" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Postal Code</label>
                <input className='border relative bg-gray-100 p-2' name="postalCode" value={form.postalCode} onChange= {handleChange} type="text" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Issue</label>
                <textarea className='border relative bg-gray-100 p-2' name="issue" value={form.issue} onChange= {handleChange} rows="5" type="text" required></textarea>
            </div>
            <button className='w-full py-3 mt-8 bg-purple-800 hover:bg-purple-600 relative text-white'  onClick={aftersubmission}>Proceed</button>
            
            
        </form>
    </div>
    
  )
}