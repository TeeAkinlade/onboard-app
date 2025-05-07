import Image from 'next/image'
import React from 'react'
import { notification, shape } from '../constant/media'

const Navbar = () => {
  return (
    <nav className='w-full z-50'>
        <div className="relative">
        <Image 
          src={shape} 
          alt="shape" 
          width={180} 
          height={180} 
          className="object-fit" 
        />
        <div className="absolute top-0 p-6 w-full">
            <Image
                src={notification}
                alt="nav"
                width={100}
                height={100}
                className='w-full object-cover'
            />
        </div>
      </div>
    </nav>
  )
}

export default Navbar