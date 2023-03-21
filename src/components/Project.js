import React from 'react'

function Project(props) {
    const {item}=props;
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-5'><img className='rounded-xl h-[30vh]' src={item.image} alt={item.image}/></div>
    <p className='capitalize text-accent text-sm-mb-3'>{item.category}</p>
    <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
    </div>
  )
}

export default Project
