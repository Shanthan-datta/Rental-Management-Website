import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const NewBuilding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photo, setphoto] = useState("")
  const handlephoto = (e) =>{
    setphoto(e.target.files[0]);
  }
  const [form, setForm] = useState({
      buildingname: '',
      rent: '',
      address:'',
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
          ...form,
          [name]: value
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("picture",photo)
    formData.append("form",JSON.stringify(form))
    console.log(form)
    let response = await fetch("http://localhost:1000/api/v5/addbuilding",{
      method:"POST",
      credentials:'include', 
      body:formData
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl mb-6">Add New Building</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Building Name</label>
          <input
            type="text"
            name='buildingname'
            value={form.buildingname}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rent</label>
          <input
            type="number"
            name='rent'
            value={form.rent}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name='address'
            value={form.address}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Picture</label>
          <input
            type="file"
            onChange={handlephoto}
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
    </div>
  );
};

export default NewBuilding;

// import React, { useState } from 'react';

// const Newbuilding = () => {
//   const [buildingName, setBuildingName] = useState('');
//   const [rent, setRent] = useState('');
//   const [picture, setPicture] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log({ buildingName, rent, picture });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl mb-6">Add New Building</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700">Building Name</label>
//           <input
//             type="text"
//             value={buildingName}
//             onChange={(e) => setBuildingName(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Rent</label>
//           <input
//             type="number"
//             value={rent}
//             onChange={(e) => setRent(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Picture</label>
//           <input
//             type="file"
//             onChange={(e) => setPicture(e.target.files[0])}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewB;
