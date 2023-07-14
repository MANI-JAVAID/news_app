import React from 'react'
import loading from "./loading.gif"

export default function Spinner() {
  return (
    <div>
        <div className=" container text-center ">
        <img className='m-3' src={loading} alt="loading" />
        </div>
    </div>
  )
}
