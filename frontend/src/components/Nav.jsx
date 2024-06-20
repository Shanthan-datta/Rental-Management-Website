import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoginDropdown from '../components/LoginDropdown';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
import Dropdown from '../sections/dropdown';
import { headerLogo } from '../assets/images'; // Import the headerLogo image
import { dropdownlist } from '../constants';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
const Nav = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
 
  const [isOpen, setOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const logout =()=>{
    sessionStorage.clear("id")
    dispatch(authActions.logout())
}



  return (
    <header className="padding-x py-5 absolute z-10 w-full">
    <nav className="flex justify-between items-center max-container">
        <Link to="/">
            <img src={headerLogo} alt="Logo" width={180} height={60} /> {/* Include the header logo */}
          </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden relative">
                  <li className="relative">
                  <Link
                    to="/"
                    className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
                    onClick={() => setOpen(false)} // Close the dropdown when a link is clicked
                  >
                    Home
                  </Link>
                  </li>
                  <li className="relative">
                  <Link
                    to="#about-us"
                    className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
                    onClick={() => setOpen(false)} // Close the dropdown when a link is clicked
                  >
                    About Us
                  </Link>
                  </li>

                  <li className="relative">
                  <Link
                    to="Ticket"
                    className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
                    onClick={() => setOpen(false)} // Close the dropdown when a link is clicked
                  >
                    Help ticket
                  </Link>
                  </li>

                  <li className="relative">
                  <Link
                    to="#contact-us"
                    className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
                    onClick={() => setOpen(false)} // Close the dropdown when a link is clicked
                  >
                    Contact Us
                  </Link>
                  </li>
                
                  {!isLoggedIn && 
                  <>
                  <li className="relative">
                    <div className="relative">
                        <button
                        onClick={() => setLoginOpen((prev) => !prev)}
                        className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
                        >
                        {dropdownlist.label}
                        </button>
                        {isLoginOpen && <LoginDropdown dropdownLinks={dropdownlist.dropdown} />}
                    </div>
                </li>

                <li className="relative">
                    <Link
                    to="signUp"
                    className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
                    onClick={() => setOpen(false)} // Close the dropdown when a link is clicked
                  >
                    Signup
                  </Link>
                  </li>
                  </>
                  }


                  {isLoggedIn && 
                  <li className="relative" onClick={logout}>
                    <Link
                    to="#"
                    className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
                    onClick={logout} // Close the dropdown when a link is clicked
                  >
                    Logout
                  </Link>
                  </li>}
                  
        </ul>
        <div className="hidden max-lg:block">
            <button onClick={() => setOpen((prev) => !prev)}>
              {!isOpen && (
                <img src={hamburger} alt="Hamburger" width={25} height={25} />
              )}
              {isOpen && <Dropdown />}
            </button>
          </div>

</nav>
</header>
  );
};

export default Nav;


// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import LoginDropdown from '../components/LoginDropdown';
// import { navLinks } from '../constants';
// import { hamburger } from '../assets/icons';
// import Dropdown from '../sections/dropdown';
// import { headerLogo } from '../assets/images';

// const Nav = () => {
//   const [isOpen, setOpen] = useState(false);
//   const [isLoginOpen, setLoginOpen] = useState(false);
//   const location = useLocation();

//   const isStaffLoginPage = location.pathname === '/StaffLogin';

//   return (
//     <header className="padding-x py-5 absolute z-10 w-full">
//       {!isStaffLoginPage && ( // Conditionally render header content if not on StaffLogin page
//         <nav className="flex justify-between items-center max-container">
//           <Link to="/">
//             <img src={headerLogo} alt="Logo" width={180} height={60} /> {/* Include the header logo */}
//           </Link>
//           <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden relative">
//             {navLinks.map((item) => (
//               <li key={item.label} className="relative">
//                 {item.dropdown ? (
//                   <div className="relative">
//                     <button
//                       onClick={() => setLoginOpen((prev) => !prev)}
//                       className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
//                     >
//                       {item.label}
//                     </button>
//                     {isLoginOpen && <LoginDropdown dropdownLinks={item.dropdown} />}
//                   </div>
//                 ) : (
//                   <Link
//                     to={item.href}
//                     className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
//                   >
//                     {item.label}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <div className="hidden max-lg:block">
//             <button onClick={() => setOpen((prev) => !prev)}>
//               {!isOpen && (
//                 <img src={hamburger} alt="Hamburger" width={25} height={25} />
//               )}
//               {isOpen && <Dropdown />}
//             </button>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Nav;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import LoginDropdown from '../components/LoginDropdown';

// const Nav = () => {
//   const [isLoginOpen, setLoginOpen] = useState(false);

//   return (
//     <header className="padding-x py-5 absolute z-10 w-full">
//       <nav className="flex justify-between items-center max-container">
//         {/* Your Logo */}
//         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden relative">
//           {/* Remove or modify this section based on your needs */}
//           <li>
//             <Link to="/some-link">Some Link</Link>
//           </li>
//           {/* End of section to remove or modify */}
//         </ul>
//         {/* Your Hamburger Menu */}
//       </nav>
//     </header>
//   );
// };

// export default Nav;


// import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Dropdown from '../sections/dropdown';
// import LoginDropdown from '../components/LoginDropdown';

// const Nav = () => {
//   const [isOpen, setOpen] = useState(false);
//   const [isLoginOpen, setLoginOpen] = useState(false);

//   return (
//     <header className="padding-x py-5 absolute z-10 w-full">
//       <nav className="flex justify-between items-center max-container">
//         <Link to="/">
//           <img src={headerLogo} alt="Logo" width={180} height={60} />
//         </Link>
//         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden relative">
//           {navLinks.map((item) => (
//             <li key={item.label} className="relative">
//               {item.dropdown ? (
//                 <div className="relative">
//                   <button
//                     onClick={() => setLoginOpen((prev) => !prev)}
//                     className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
//                   >
//                     {item.label}
//                   </button>
//                   {isLoginOpen && <LoginDropdown dropdownLinks={item.dropdown} />}
//                 </div>
//               ) : (
//                 <Link
//                   to={item.href}
//                   className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
//                 >
//                   {item.label}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="hidden max-lg:block">
//           <button onClick={() => setOpen((prev) => !prev)}>
//             {!isOpen && (
//               <img src={hamburger} alt="Hamburger" width={25} height={25} />
//             )}
//             {isOpen && <Dropdown />}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;


// import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants';
// import { useState } from 'react';
// import Dropdown from '../sections/dropdown';
// import LoginDropdown from '../components/LoginDropdown';

// const Nav = () => {
//   const [isOpen, setOpen] = useState(false);
//   const [isLoginOpen, setLoginOpen] = useState(false);

//   return (
//     <header className="padding-x py-5 absolute z-10 w-full">
//       <nav className="flex justify-between items-center max-container">
//         <a href="/">
//           <img src={headerLogo} alt="Logo" width={180} height={60} />
//         </a>
//         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden relative">
//           {navLinks.map((item) => (
//             <li key={item.label} className="relative">
//               {item.dropdown ? (
//                 <div className="relative">
//                   <button
//                     onClick={() => setLoginOpen((prev) => !prev)}
//                     className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
//                   >
//                     {item.label}
//                   </button>
//                   {isLoginOpen && <LoginDropdown dropdownLinks={item.dropdown} />}
//                 </div>
//               ) : (
//                 <a
//                   href={item.href}
//                   className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
//                 >
//                   {item.label}
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="hidden max-lg:block">
//           <button onClick={() => setOpen((prev) => !prev)}>
//             {!isOpen && (
//               <img src={hamburger} alt="Hamburger" width={25} height={25} />
//             )}
//             {isOpen && <Dropdown />}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;


// import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants';
// import { useState } from 'react';
// import Dropdown from '../sections/dropdown';
// import LoginDropdown from '../components/LoginDropdown';

// const Nav = () => {
//   const [isOpen, setOpen] = useState(false);
//   const [isLoginOpen, setLoginOpen] = useState(false);

//   return (
//     <header className="padding-x py-5 absolute z-10 w-full">
//       <nav className="flex justify-between items-center max-container">
//         <a href="/">
//           <img src={headerLogo} alt="Logo" width={180} height={60} />
//         </a>
//         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden relative">
//           {navLinks.map((item) => (
//             <li key={item.label} className="relative">
//               {item.isButton ? (
//                 <div className="relative">
//                   <button
//                     onClick={() => setLoginOpen((prev) => !prev)}
//                     className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
//                   >
//                     {item.label}
//                   </button>
//                   {isLoginOpen && <LoginDropdown dropdownLinks={item.dropdown} />}
//                 </div>
//               ) : (
//                 <a
//                   href={item.href}
//                   className="font-montserrat leading-normal text-lg text-black"
//                 >
//                   {item.label}
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="hidden max-lg:block">
//           <button onClick={() => setOpen((prev) => !prev)}>
//             {!isOpen && (
//               <img src={hamburger} alt="Hamburger" width={25} height={25} />
//             )}
//             {isOpen && <Dropdown />}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;






// import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants';
// import { useState } from 'react';
// import Dropdown from '../sections/dropdown';

// const Nav = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <header className="padding-x py-5 absolute z-10 w-full">
//       <nav className="flex justify-between items-center max-container">
//         <a href="/">
//           <img src={headerLogo} alt="Logo" width={180} height={60} />
//         </a>
//         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               {item.isButton ? (
//                 <a
//                   href={item.href}
//                   className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 font-montserrat leading-normal text-lg"
//                 >
//                   {item.label}
//                 </a>
//               ) : (
//                 <a
//                   href={item.href}
//                   className="font-montserrat leading-normal text-lg text-black"
//                 >
//                   {item.label}
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="hidden max-lg:block">
//           <button onClick={() => setOpen((prev) => !prev)}>
//             {!isOpen && (
//               <img src={hamburger} alt="Hamburger" width={25} height={25} />
//             )}
//             {isOpen && <Dropdown />}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;





// import { Fragment } from 'react'
// import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// <Menu as="div" className="relative inline-block text-left">
// <div>
//   <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//     Options
//     <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
//   </MenuButton>
// </div>

// <Transition
//   enter="transition ease-out duration-100"
//   enterFrom="transform opacity-0 scale-95"
//   enterTo="transform opacity-100 scale-100"
//   leave="transition ease-in duration-75"
//   leaveFrom="transform opacity-100 scale-100"
//   leaveTo="transform opacity-0 scale-95"
// >
//   <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//     <div className="py-1">
//       <MenuItem>
//         {({ focus }) => (
//           <a
//             href="#"
//             className={classNames(
//               focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//               'block px-4 py-2 text-sm'
//             )}
//           >
//             Account settings
//           </a>
//         )}
//       </MenuItem>
//       <MenuItem>
//         {({ focus }) => (
//           <a
//             href="#"
//             className={classNames(
//               focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//               'block px-4 py-2 text-sm'
//             )}
//           >
//             Support
//           </a>
//         )}
//       </MenuItem>
      
      
//     </div>
//   </MenuItems>
// </Transition>
// </Menu>

