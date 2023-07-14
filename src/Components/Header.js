import React from 'react'

export default function Header() {
    let style = {
        height:250
    }
    

  return (
    <div>
        <header>
            <div className="bg-dark p-5" style = {style}>
    
            <h1 className='text-center p-5 fs-1'>BUFON's News</h1>
       
            </div>
        </header>
    </div>
  )
}
