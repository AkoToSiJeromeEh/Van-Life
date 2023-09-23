import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VansInfo = () => {
  const { name , type , description , visibility } = useOutletContext()
  return (
    <div className="van-details-container">
    <ul className="flex flex-col gap-5 leading-relaxed">
     <li>
       <span className="font-bold">Name</span> : {name}
     </li>
     <li>
       <span className="font-bold">Category</span> : {type}
     </li>
     <li className="w-5/6 leading-snug">
       <span className="font-bold ">Description</span> : {description}
     </li>
     <li>
       <span className="font-bold">Visibility</span> : {visibility}
     </li>
    </ul>
    </div>
  )
}

export default VansInfo

