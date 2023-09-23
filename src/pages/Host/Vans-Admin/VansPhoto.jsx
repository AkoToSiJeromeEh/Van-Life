import React from 'react'
import { useOutletContext } from 'react-router-dom'
const VansPhoto = () => {
  const {imageUrl } = useOutletContext()

  return (
	<div className='text-black'>
    <h1 className='text-2xl font-bold'>Vans Image{imageUrl.lenght > 1 ? 's' : null}</h1>
    <img className='rounded-md' width='200px' src={imageUrl} alt='vans' />
  </div>
  )
}

export default VansPhoto