import React, { useState } from 'react';

const NewBuilding = () => {
  const [buildingName, setBuildingName] = useState('');
  const [rent, setRent] = useState('');
  const [address, setAddress] = useState('');
  const [picture, setPicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ buildingName, rent, address, picture });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl mb-6">Add New Building</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Building Name</label>
          <input
            type="text"
            value={buildingName}
            onChange={(e) => setBuildingName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rent</label>
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Picture</label>
          <input
            type="file"
            onChange={(e) => setPicture(e.target.files[0])}
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
