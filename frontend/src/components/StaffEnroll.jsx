import React, { useState } from 'react';

const StaffEnroll = () => {
  const [name, setName] = useState('');
  const [staffID, setStaffID] = useState('');
  const [typeOfWork, setTypeOfWork] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ name, staffID, typeOfWork, email });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl mb-6">Enroll New Staff</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Staff ID</label>
          <input
            type="text"
            value={staffID}
            onChange={(e) => setStaffID(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type of Work</label>
          <input
            type="text"
            value={typeOfWork}
            onChange={(e) => setTypeOfWork(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StaffEnroll;

// import React, { useState } from 'react';

// const StaffEnroll = () => {
//   const [name, setName] = useState('');
//   const [staffID, setStaffID] = useState('');
//   const [typeOfWork, setTypeOfWork] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log({ name, staffID, typeOfWork, email });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl mb-6">Enroll New Staff</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Staff ID</label>
//           <input
//             type="text"
//             value={staffID}
//             onChange={(e) => setStaffID(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Type of Work</label>
//           <input
//             type="text"
//             value={typeOfWork}
//             onChange={(e) => setTypeOfWork(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
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

// export default StaffEnroll;
