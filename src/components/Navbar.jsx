import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <nav className="h-10 md:h-13 p-2 md:p-3 2xl:p-2 bg-cyan-950 flex justify-between">
        <div className='text-base md:text-xl xl:text-2xl font-serif text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-white'>Trip Tail</div>
        <div>
            <ul className='hidden md:flex text-sm md:gap-3 xl:gap-4 p-1 2xl:p-2 xl:pr-2 2xl:mr-5 text-white'>
                <button className='hover:text-red-500'>Home</button>
                <button className='hover:text-red-500'>Blog</button>
                <button className='hover:text-red-500'>Destination</button>
                <button className='hover:text-red-500'>Catagories</button>
                <button className='hover:text-red-500'>Gallery</button>
                <button className='hover:text-red-500'>About</button>
                <button className='hover:text-red-500'>Contact</button>
            </ul>
            <div className='md:hidden'>
              <MenuIcon className='text-white'/>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar