import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize Toastify


const NewBuilding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [form, setForm] = useState({
    buildingname: '',
    rent: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!form.buildingname.trim() || !form.rent.trim() || !form.address.trim() || !photo) {
      toast.error('Please fill out all fields and upload a photo.');
      return;
    }

    const formData = new FormData();
    formData.append('picture', photo);
    formData.append('form', JSON.stringify(form));

    try {
      let response = await fetch('http://localhost:1000/api/v5/addbuilding', {
        method: 'POST',
        headers:{
          'Access-Control-Allow-Origin': '*',
        },
        // credentials: 'include',
        body: formData
      });
      console.log(response)
      if (response.ok) {
        toast.success('Building added successfully!');
        // Clear the form after successful submission
        setForm({
          buildingname: '',
          rent: '',
          address: '',
        });
        setPhoto(null);
       
      } else {
        toast.error('Failed to add building. Please try again later.');
      }
    } catch (error) {
      console.error('Error adding building:', error);
      toast.error('Failed to add building. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl mb-6">Add New Building</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Building Name</label>
          <input
            type="text"
            name="buildingname"
            value={form.buildingname}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rent</label>
          <input
            type="number"
            name="rent"
            value={form.rent}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Picture</label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default NewBuilding;
