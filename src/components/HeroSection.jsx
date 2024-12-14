import React from 'react'
import heroBackground from '../assets/hero.jpg';
import { Link, useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const navigate = useNavigate();
    return (
        <section
            className='text-center py-20 bg-[#f9f9f9]'
            style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.85,
            }}
        >
            <div className='max-w-4xl mx-auto'>

                <h1 className='text-4xl font-bold mb-4 text-[#e6f3ff]'>
                    Your Genomic Insights, Your Privacy, Our Mission.
                </h1>
                <p className='text-lg mb-8 text-[#ffffff]'>
                    Discover health and ancestry insights while keeping your data
                    secure.
                </p>
                <div>
                    <button
                        className='bg-[#ff9f43] text-white py-2 px-4 rounded mr-4 hover:bg-[#ff7b00] transition-transform transform  active:scale-95'
                        onClick={() => navigate('/upload')}
                    >
                        Upload Your DNA
                    </button>
                    <button
                        className='bg-[#FDCB57] text-black py-2 px-4 rounded transition-transform transform  active:scale-95'
                        onClick={() => navigate('/results')}
                    >
                        View Result
                    </button>
                </div>
            </div>
        </section>
    )
}
