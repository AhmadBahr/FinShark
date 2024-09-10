import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4'>
      <div className='flex items-center gap-4'>
        <Link to="/">
          <img src={logo} alt="logo" className='w-20 h-15' />
        </Link>
        <Link to='/search' className='font-bold hover:text-blue-600'>Search</Link>
      </div>
      <ul className='flex gap-4 items-center'>
        <li><a href='#' className='font-bold text-white bg-green-500 px-4 py-2 rounded hover:bg-green-400'>Sign Up</a></li>
        <li><a href='#' className='font-bold text-gray-600 hover:underline'>Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
