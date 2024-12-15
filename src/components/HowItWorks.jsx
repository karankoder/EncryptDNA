import React from 'react'
import { motion } from 'framer-motion' // Import motion from framer-motion

export default function HowItWorks() {
    return (

        <section className='py-20 bg-[#FFE8A1]'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-8'>How It Works</h2>
                <div className='space-y-8'>
                    <motion.div
                        className='flex items-center hover:scale-105 transition-transform'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4'>
                            1
                        </div>
                        <div className='flex items-center'>
                            <div className='text-4xl mr-4'>☁️</div>
                            <p>Upload your raw DNA file.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='flex items-center hover:scale-105 transition-transform'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4'>
                            2
                        </div>
                        <div className='flex items-center'>
                            <div className='text-4xl mr-4'>🔍</div>
                            <p>Receive your encrypted DNA Passport.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='flex items-center hover:scale-105 transition-transform'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4'>
                            3
                        </div>
                        <div className='flex items-center'>
                            <div className='text-4xl mr-4'>✔️</div>
                            <p>
                                Get the result of chances of getting a disease from your DNA Passport.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}
