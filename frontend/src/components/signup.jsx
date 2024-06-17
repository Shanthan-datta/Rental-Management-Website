import React, { Component, useState } from 'react'
import axios from 'axios'

const SignUp =()=> {
    const [cfmPassword,setcfmPassword] = useState("")

    
    const [data, setdata] = useState({
        firstName:"",
        lastName:"",
        email:"",
        contactNo:"",
        password:"",
    })
    const updatecfmPassword = (e) => {
        const {name , value} = e.target
        setcfmPassword(value)
    }
    const update = (e) => {
        const { name, value } = e.target;

        setdata({
          ...data,
          [name]: value
        });
    }
    const submit=async(e)=>{
        e.preventDefault()
        if(data.password === cfmPassword){
            await axios.post("http://localhost:1000/api/v1/register", data)
            .then((response)=>{
                console.log(response)
                setdata({
                    firstName:"",
                    lastName:"",
                    email:"",
                    contactNo:"",
                    password:"",
                    cfmPassword:"",
                    })
                    setcfmPassword("")
                    alert("successfully registered")
            })
            
        } else {
            alert("need to provide same password")
            setdata({
                password:"",
                cfmPassword:"",
                })
            
        }
    }
import React, { Component, useState } from 'react'
import axios from 'axios'

const SignUp =()=> {
    const [cfmPassword,setcfmPassword] = useState("")

    
    const [data, setdata] = useState({
        firstName:"",
        lastName:"",
        email:"",
        contactNo:"",
        password:"",
    })
    const updatecfmPassword = (e) => {
        const {name , value} = e.target
        setcfmPassword(value)
    }
    const update = (e) => {
        const { name, value } = e.target;

        setdata({
          ...data,
          [name]: value
        });
    }
    const submit=async(e)=>{
        e.preventDefault()
        if(data.password === cfmPassword){
            await axios.post("http://localhost:1000/api/v1/register", data)
            .then((response)=>{
                console.log(response)
                setdata({
                    firstName:"",
                    lastName:"",
                    email:"",
                    contactNo:"",
                    password:"",
                    cfmPassword:"",
                    })
                    setcfmPassword("")
                    alert("successfully registered")
            })
            
        } else {
            alert("need to provide same password")
            setdata({
                password:"",
                cfmPassword:"",
                })
            
        }
    }
    return (
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={submit}>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={submit}>
            <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
           
            <div className='flex flex-col mb-4 rounded-md'>
                <label>First Name</label>
                <input className='border relative bg-gray-100 p-2' value={data.firstName} name="firstName" onChange={update} type="text"  />
                <input className='border relative bg-gray-100 p-2' value={data.firstName} name="firstName" onChange={update} type="text"  />
            </div>
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Last Name</label>
                <input className='border relative bg-gray-100 p-2' value={data.lastName} name="lastName" onChange={update} type="text" />
                <input className='border relative bg-gray-100 p-2' value={data.lastName} name="lastName" onChange={update} type="text" />
            </div>
        
        
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Email</label>
                <input className='border relative bg-gray-100 p-2' value={data.email} name="email" onChange={update} type="email" />
                <input className='border relative bg-gray-100 p-2' value={data.email} name="email" onChange={update} type="email" />
            </div>
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Contact Number</label>
                <input className='border relative bg-gray-100 p-2' value={data.contactNo} name="contactNo"  onChange={update} type="tel" />
                <input className='border relative bg-gray-100 p-2' value={data.contactNo} name="contactNo"  onChange={update} type="tel" />
            </div>
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2 ' value={data.password} name="password" onChange={update} type="password" />
                <input className='border relative bg-gray-100 p-2 ' value={data.password} name="password" onChange={update} type="password" />
            </div>
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Confirm Password</label>
                <input className='border relative bg-gray-100 p-2' value={cfmPassword} name="cfmPassword" onChange={updatecfmPassword} type="password" />
                <input className='border relative bg-gray-100 p-2' value={cfmPassword} name="cfmPassword" onChange={updatecfmPassword} type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-purple-900 hover:bg-purple-600 relative text-white rounded-md ' type="submit" >Sign Up</button>
            <button className='w-full py-3 mt-8 bg-purple-900 hover:bg-purple-600 relative text-white rounded-md ' type="submit" >Sign Up</button>
        </form>
    </div>
    )
  
}
export default SignUp
// import React, { Component } from 'react'

// export default class SignUp extends Component {
//   render() {
//     return (
//       <div className='flex justify-center items-center h-full'>
//         <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
//             <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
           
//             <div className='flex flex-col mb-4 rounded-md'>
//                 <label>First Name</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col mb-4 rounded-md'>
//                 <label>Last Name</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col mb-4 rounded-md'>
//                 <label>Email</label>
//                 <input className='border relative bg-gray-100 p-2' type="email" />
//             </div>
//             <div className='flex flex-col mb-4 rounded-md'>
//                 <label>Contact Number</label>
//                 <input className='border relative bg-gray-100 p-2' type="tel" />
//             </div>
//             <div className='flex flex-col mb-4 rounded-md'>
//                 <label>Password</label>
//                 <input className='border relative bg-gray-100 p-2 ' type="password" />
//             </div>
//             <div className='flex flex-col mb-4 rounded-md'>
//                 <label>Confirm Password</label>
//                 <input className='border relative bg-gray-100 p-2' type="password" />
//             </div>
//             <button className='w-full py-3 mt-8 bg-purple-900 hover:bg-purple-600 relative text-white rounded-md ' >Sign Up</button>
//         </form>
//     </div>
//     )
//   }
// }