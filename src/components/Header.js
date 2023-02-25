import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import NavMobile from './NavMobile';
import Social from './Social';

function Header() {
    const [bg,setBg]=useState(false);
    useEffect(()=>{
        console.log(bg);
        window.addEventListener('scroll',()=>{
            return window.scrollY>50?setBg(true):setBg(false);
        },[]);
    });
  return (
    <div className={`${bg ?'bg-tertiary h-20':'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className='container mx-auto h-full flex items-center justify-between '>
        <a href='/'>
            <h1 className='text-2xl font-bold lg:text-xl'>Aman Kumar Sahani</h1>
        </a>
        <div className='hidden lg:block'>
            <Nav/>
        </div>
        <div className='hidden lg:block'>
            <Social/>
        </div>
        <div className='lg:hidden'>
            <NavMobile/>
        </div>
      </div>
    </div>
  )
}

export default Header
