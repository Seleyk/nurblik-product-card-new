import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-5 right-8 z-50 flex gap-3'>
      <div className="cursor-pointer hover:underline"> Cart </div>
      <div className="cursor-pointer hover:underline"> Menu </div>
    </div>
  )
}

export default Navbar