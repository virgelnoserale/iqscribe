import React, { useState } from 'react';
import images from '../components/images'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll'


const NavBar = () => {
    const [nav, setNav]=useState(false);
    const links = [
        {
            id:1,
            link:'home',
        },
        {
            id:2,
            link:'about',
        },
                {
            id:3,
            link:'services',
        },
        {
            id:4,
            link:'contact',
        },
    ];
  return (
      
    <div className='flex justify-between items-center w-full h-20 text-white fixed px-4'>
    
        {/**Logo */}
        <div className='flex items-center gap-0'>
            <span>
            <img src={images.iqs_logo_png} alt='iqsLogo' className='w-[100px] md:w-[150px]'/>
            </span>
        </div>
    
        {/* for PC screen Nav*/}   
        <ul className='hidden md:flex'>
            {links.map(({ id, link }) =>(
                <li key={id} className=' px-4 cursor-pointer capitalize font-medium text-green-600 hover:text-green-800 hover:underline underline-offset-8 active:bg-violet-700 duration-300 '>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
                ))}
        </ul>
        
        {/**useState */}    
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
        </div>
        
        {/* for mobile screen Nav*/}      
        {nav && (        
            <ul className=' flex flex-col items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-green-800 to-green-400 text-white duration-300'>
                {links.map(({ id, link }) =>(
                <li key={id} className='px-10 cursor-pointer capitalize py-6 text-3xl hover:text-green-900 duration-300'>
                <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                </li>
                ))}  
            </ul>
        )}
    </div>
  )
}

export default NavBar