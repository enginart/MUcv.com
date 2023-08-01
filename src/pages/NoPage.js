import React from 'react'
import { useParams } from 'react-router-dom'
export const NoPage = () => {
  const {param} = useParams()
  console.log(param)
  return (
    <div>{param}</div>
  )
}
