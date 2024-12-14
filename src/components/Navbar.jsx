import React from 'react'
import dna from '../assets/dna.png';

export default function Navbar() {
    return (
        <header className='w-full bg-gradient-to-r bg-[#004D79] p-4 flex justify-between items-center'>
            <div className='logo'>
                <img src={dna} alt='Monadic DNA' className='h-10' />
            </div>
            <nav className='flex items-center space-x-4'>
                <a href='#home' className='text-white hover:text-[#308ab2]'>
                    Home
                </a>
                <a href='#about' className='text-white hover:text-[#3A506B]'>
                    About
                </a>
                <a href='#services' className='text-white hover:text-[#3A506B]'>
                    Services
                </a>
                <a href='#contact' className='text-white hover:text-[#3A506B]'>
                    Contact
                </a>
                <button className='bg-[#FF9F43] text-white py-2 px-4 rounded transition-transform transform  active:scale-95'>
                    Get Started
                </button>
            </nav>
        </header>
    )
}
