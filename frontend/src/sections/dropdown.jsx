import React from 'react'
import { navLinks } from '../constants'

const Dropdown = () => {
    return (
      <section>
        <div id="menu" className=" absolute top-20 flex flex-col items-start w-1/2 rounded-lg p-2 mr-10">
          {navLinks.map((item) =>(
            <div className='flex w-full justify-between hover:shadow-lime-950 cursor-pointer rounded-r-lg border-l-transparent py-3' key={item.label}>
            <a href={item.href}><h3>{item.label}</h3></a>
            </div>

          )

          )}
        </div>
      </section>
      )
}

export default Dropdown