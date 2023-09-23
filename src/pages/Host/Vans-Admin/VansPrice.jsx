import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VansPrice = () => {
  const {price} = useOutletContext()
  return (
	<div className='text-black'>
      <h1 className='text-2xl font-bold'>Van Price</h1>
      <h1>${price}/day</h1>
  </div>
  )
}

export default VansPrice