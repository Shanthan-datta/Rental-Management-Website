import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let id = sessionStorage.getItem("id")






export default function Ticket() {
    const [array, setarray] = useState([])
    
    const [form, setform] = useState({
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
              [name]: value.trim()
            });

          };
          const aftersubmission = async (e)=>{
            e.preventDefault()
            const isFormIncomplete = Object.values(form).some(value => value.trim() === '');
            if(isFormIncomplete){
                toast.error("fill all the boxes")
            }
            else if(id){
                
                await axios.post("http://localhost:1000/api/v2/ticket", { contactNo: form.contactNo ,flatNo:form.flatNo, buildingName: form.buildingName , street:form.street, city:form.city , postalCode:form.postalCode, issue:form.issue,id:id}) 
                setarray([...array,form])
                setform({
                    contactNo: '',
                    flatNo: '',
                    buildingName: '',
                    street: '',
                    city: '',
                    postalCode: '',
                    issue: ''
                })
                toast.success("your ticket is added")
            } else {
                toast.error("please login to raise a ticket")
            }

            
          }

  return (
    <>
    <ToastContainer/>
    <div className='flex justify-center items-center h-full'>
         
        <form className='max-w-[1000px] w-full mx-auto bg-white p-8' >
            <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
            
            <div className='flex flex-col mb-4'>
                <label>Contact No.</label>
                <input className='border relative bg-gray-100 p-2' name="contactNo" value={form.contactNo}  onChange= {handleChange} type="tel" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Building Name</label>
                <input className='border relative bg-gray-100 p-2' name="buildingName" value={form.buildingName} onChange= {handleChange} type="text" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Flat Number</label>
                <input className='border relative bg-gray-100 p-2' name="flatNo" value={form.flatNo} onChange= {handleChange} type="text" required />
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
        </>
  )
}
// import React from 'react'



// export default function Ticket() {
//   return (

    

//     <div className='flex justify-center items-center h-full'>
//         <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
//             <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
            
//             <div className='flex flex-col mb-4'>
//                 <label>Name</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>Contact No.</label>
//                 <input className='border relative bg-gray-100 p-2' type="tel" />
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>Flat Number</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>Building Name</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>Street</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>City</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>Postal Code</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>Issue</label>
//                 <textarea className='border relative bg-gray-100 p-2' rows="5"></textarea>
//             </div>
//             <button className='w-full py-3 mt-8 bg-purple-800 hover:bg-purple-600 relative text-white'>Proceed</button>
            
            
//         </form>
//     </div>
    
//   )
// }