import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
import { products } from "../constants";
import PopularProductCard from '../components/PopularProductCard';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/newbuilding');
  };

  return (
    <div className="max-container max-sm:mt-12 p-4">
      <section id="products">
        <div className="flex flex-col justify-start gap-5">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-palanquin font-bold">
              Available <span className="text-purple-800">Flats</span>
            </h2>
            <button
              onClick={handleButtonClick}
              className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
            >
              Add Building
            </button>
          </div>
        </div>
        <div className="flex mt-16 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-16 gap-4">
        <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64 lg:h-auto max-h-80">
          <h3 className="text-xl font-bold">Pending Tickets</h3>
          <div className="overflow-y-auto max-h-56">
            {/* Add your pending tickets content here */}
            {Array.from(Array(10).keys()).map((index) => (
              <p key={index}>Pending Ticket {index + 1}</p>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64 lg:h-auto max-h-80">
          <h3 className="text-xl font-bold">Completed Tickets</h3>
          <div className="overflow-y-auto max-h-56">
            {/* Add your completed tickets content here */}
            {Array.from(Array(10).keys()).map((index) => (
              <p key={index}>Completed Ticket {index + 1}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
// import { products } from "../constants";
// import PopularProductCard from '../components/PopularProductCard';

// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/newbuilding');
//   };

//   return (
//     <div className="max-container max-sm:mt-12">
//       <section id="products">
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-4xl font-palanquin font-bold">
//               Available <span className="text-purple-800">Flats</span>
//             </h2>
//             <button
//               onClick={handleButtonClick}
//               className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//             >
//               Add Building
//             </button>
//           </div>
//         </div>
//         <div className="flex mt-16 w-120 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
//           {products.map((product) => (
//             <PopularProductCard key={product.name} {...product} />
//           ))}
//         </div>
//       </section>

//       <section className="flex mt-16 gap-4">
//         <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64">
//           <h3 className="text-xl font-bold">Pending Tickets</h3>
//           {/* Add your pending tickets content here */}
//         </div>
//         <div className="flex-1 bg-purple-100 border border-black rounded p-4 overflow-y-auto scrollbar-webkit scrollbar-thin h-64">
//           <h3 className="text-xl font-bold">Completed Tickets</h3>
//           {/* Add your completed tickets content here */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminLogin;

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
// import { products } from "../constants";
// import PopularProductCard from '../components/PopularProductCard';

// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/Newbuilding');
//   };

//   return (
//     <div>
//       <section id="products" className="max-container max-sm:mt-12">
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-between items-center">
//             <h2 className="text-4xl font-palanquin font-bold">
//               Available <span className="text-purple-800">Flats</span>
//             </h2>
//             <button
//               onClick={handleButtonClick}
//               className="bg-purple-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-purple-700"
//             >
//               Add Building
//             </button>
//           </div>
//         </div>
//         <div className="flex mt-16 w-120 flex-row flex-shrink-0 gap-4 py-2 overflow-x-auto scrollbar-webkit scrollbar-thin">
//           {products.map((product) => (
//             <PopularProductCard key={product.name} {...product} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminLogin;

// import { products } from "../constants"
// import PopularProductCard from '../components/PopularProductCard';

// const AdminLogin = () => {
//   return (
//     <div>
//       <section id="products"
//        className="max-container max-sm:mt-12
//        ">
//         <div className="flex flex-col
//         justify-start gap-5">
//           <h2 className="text-4xl font-palanquin
//           font-bold">Available 
//           <span className="text-purple-800">Flats </span>
//           </h2>
          


//         </div>
//         <div className="flex mt-16 w-120 flex-row  flex-shrink-0 gap-4 py-2 overflow-x-auto 
//         scrollbar-webkit scrollbar-thin
//           ">
//           {products.map((product)=>(
//             <PopularProductCard key={product.name}
//             {...product}/>
//           ))}


//         </div>

//       </section>

//     </div>
//   )
// }

// export default AdminLogin