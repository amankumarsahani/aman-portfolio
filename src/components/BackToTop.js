import React, { useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll';
import {  FiChevronUp } from 'react-icons/fi';

function BackToTopBtn() {
  const [show,setShow]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      return window.scrollY>600?setShow(true):setShow(false);
    })
  })

  const scrollToTop=()=>{
    animateScroll.scrollToTop();
    
  }
  return (
    show && <button onClick={()=>{scrollToTop()}} className='bg-accent h-12 w-12 hover:bg-accent-hover text-white rounded-full fixed right-10 bottom-10 cursor-pointer flex justify-center items-center transition-all '>
      
      <FiChevronUp className='w-6 h-6'/>
    </button>
  )
}

export default BackToTopBtn
