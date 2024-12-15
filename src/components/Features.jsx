import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Features() {
    return (
        <section className='py-20'>
            <motion.div 
                className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <div className='text-6xl mb-4'>🔒</div>
                    <h2 className='text-xl font-bold mb-2'>Privacy at the Core</h2>
                    <p>Your data is encrypted and secure.</p>
                </div>
                <div>
                    <div className='text-6xl mb-4'>🛡️</div>
                    <h2 className='text-xl font-bold mb-2'>Zero-Knowledge Computing</h2>
                    <p>We never see your data.</p>
                </div>
                <div>
                    <div className='text-6xl mb-4'>✔️</div>
                    <h2 className='text-xl font-bold mb-2'>Verified Insights</h2>
                    <p>Trustworthy and accurate results.</p>
                </div>
            </motion.div>
        </section>
    )
}
