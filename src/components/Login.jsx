import React from 'react'



function Login() {
  return (
    
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>3WayAssist</h2>
           
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2 rounded-md' type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2 rounded-md' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-purple-900 hover:bg-purple-600 relative text-white rounded-md'>Sign In</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-8'>Not a member? 
              <button className='w-20 h-8 mx-2 bg-purple-900 hover:bg-purple-600 relative text-white rounded-md '>Sign up</button> 
              now
              </p>
        </form>
    </div>
    
  )
}
export default Login