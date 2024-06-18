import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLoginPage() {
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        // Add your login logic here
        // Assuming successful login, navigate to the StaffLogin page
        navigate('/AdminLogin');
    };

    return (
        <div className='flex justify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleSignIn}>
                <h2 className='text-4xl font-bold text-center py-4'>3WayAssist Admin</h2>
                <div className='flex flex-col mb-4'>
                    <label>Name</label>
                    <input className='border relative bg-gray-100 p-2 rounded-md' type="text" />
                </div>
                
                <div className='flex flex-col'>
                    <label>Password</label>
                    <input className='border relative bg-gray-100 p-2 rounded-md' type="password" />
                </div>
                
                <button className='w-full py-3 mt-8 bg-purple-900 hover:bg-purple-600 relative text-white rounded-md' type="submit">
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default AdminLoginPage;