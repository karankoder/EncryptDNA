import React from 'react'
import { motion } from 'framer-motion'

export default function OurAlternatives() {
    return (
        <section className='py-20 bg-[#A8DADC] relative'>
            <div className='relative max-w-4xl mx-auto text-center'>
                <h2 className='text-4xl font-bold mb-8 text-[#1D3557]'>
                    Our Privacy-Protecting Alternative
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <motion.div
                        className='bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className='text-6xl mb-4'>🔒</div>
                        <h3 className='text-2xl font-bold mb-2 text-[#457B9D]'>Secure Data Handling</h3>
                        <p className='text-[#1D3557]'>
                            Your data is encrypted and handled with the utmost security.
                        </p>
                    </motion.div>
                    <motion.div
                        className='bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className='text-6xl mb-4'>🔍</div>
                        <h3 className='text-2xl font-bold mb-2 text-[#457B9D]'>Anonymous Insights</h3>
                        <p className='text-[#1D3557]'>Gain insights without revealing your identity.</p>
                    </motion.div>
                    <motion.div
                        className='bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className='text-6xl mb-4'>🏅</div>
                        <h3 className='text-2xl font-bold mb-2 text-[#457B9D]'>Verified Results</h3>
                        <p className='text-[#1D3557]'>Trustworthy and accurate results you can rely on.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
