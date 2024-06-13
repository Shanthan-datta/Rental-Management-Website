import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants';
import { useState } from 'react';
import Dropdown from '../sections/dropdown';

const Nav = () => {
  const [isOpen, setopen] = useState(false)
  return (
    <header className='padding-x py-5 absolute
    z-10 w-full'>
        <nav className='flex justify-between 
        items-center max-container'>  
            <a href="/">
                <img
                    src={headerLogo}
                    alt='Logo'
                    width={180}
                    height={60}
                
                
                />
            </a>
            <ul className='flex-1 flex
            justify-center items-center gap-16
            max-lg:hidden'>
             {navLinks.map((item) => (
                <li key={item.label}>
                   <a
                    href={item.href}
                    className='font-monts
                    errat leading-normal text-lg
                    text-black'
                   >
                    {item.label}
                   </a>
                </li>
             ))}
  
             
            </ul>
            <div className='hidden max-lg:block'>
                <button onClick={()=>setopen((prev)=>!prev)}>
                  {!isOpen && <img
                  src={hamburger}
                  alt='Hamburger'
                  width={25}
                  height={25}
                
                />}

                {isOpen && <Dropdown/>}
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Nav