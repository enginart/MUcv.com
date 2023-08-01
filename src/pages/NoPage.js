import React from 'react'
import { useParams } from 'react-router-dom'
export const NoPage = () => {
  const {param} = useParams()
  console.log(param)
  return (
    <div className="bod">
      <h3 style={{color: 'white'}}>No Page Found</h3>
    </div>
  )
}
