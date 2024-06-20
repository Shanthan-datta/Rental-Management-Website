import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authActions } from '../store'


function Login  () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goToSignUP = () => {
    navigate('/signUp')
}
  
  const [data, setdata] = useState({
    email:"",
    password:"",
})
const update = (e) => {
  const { name, value } = e.target;

  setdata({
    ...data,
    [name]: value
  });
}
const submit=async(e)=>{
    e.preventDefault()
      await axios.post("http://localhost:1000/api/v1/Login", data)
      .then((response)=>{
        sessionStorage.setItem("id",response.data.others._id)
        dispatch(authActions.login())
        navigate("/")
        
    }
  
  )
}

  return (
    
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
           
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative bg-gray-100 p-2 rounded-md' value={data.email} name="email" onChange={update} type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2 rounded-md' value={data.password} name="password" onChange={update} type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-purple-900 hover:bg-purple-600 relative text-white rounded-md' onClick={submit}>Sign In</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-8'>Not a member? 
              <button className='w-20 h-8 mx-2 bg-purple-900 hover:bg-purple-600 relative text-white rounded-md ' onClick={()=> goToSignUP()}>Sign up</button> 
              now
              </p>
        </form>
    </div>
    
  )
}
export default Login