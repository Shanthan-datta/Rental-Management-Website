import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
           
            <div className='flex flex-col mb-4 rounded-md'>
                <label>First Name</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Last Name</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Email</label>
                <input className='border relative bg-gray-100 p-2' type="email" />
            </div>
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Contact Number</label>
                <input className='border relative bg-gray-100 p-2' type="tel" />
            </div>
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2 ' type="password" />
            </div>
            <div className='flex flex-col mb-4 rounded-md'>
                <label>Confirm Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-purple-900 hover:bg-purple-600 relative text-white rounded-md ' >Sign Up</button>
        </form>
    </div>
    )
  }
}