import React from 'react'
import logo from '../../assets/logo.png'

interface Props { }

const Navbar = (props: Props) => {
  return (
    <nav className='relative container mx-auto p6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-20'>
          <img src={logo} alt='' />
          <div className='hidden font-bold lg:flex'>
            <a href='' className='text-black hover:text-darkBlue'>
              Dashboard
              <div className='hover:text-darkBlue'>Login</div>
            </a>
            <a href=''
              className='px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70'>
              SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar