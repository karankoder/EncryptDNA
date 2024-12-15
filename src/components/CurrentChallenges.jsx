import React from 'react'
import { motion } from 'framer-motion'
import dnaPrivacyRisk from '../assets/dna_privacy2.png'

export default function CurrentChallenges() {
    return (
        <section className='py-20 bg-[#F1FAEE]'>
            <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <motion.div
                    className='text-center md:text-left'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className='text-6xl mb-4'>🧬</div>
                    <h2 className='text-3xl font-bold mb-4'>
                        Safeguarding Your Genetic Information
                    </h2>
                    <p className='text-lg mb-4'>
                        Your genetic data is unique to you. Protecting it from unauthorized access is crucial to prevent potential misuse and ensure your privacy.
                    </p>
                    <ul className='list-disc list-inside text-left mb-4'>
                        <li>Risk of genetic discrimination by employers or insurers.</li>
                        <li>Unauthorized access to personal health information.</li>
                        <li>Potential misuse of genetic data by third parties.</li>
                        <li>Lack of consent and transparency in data sharing.</li>
                    </ul>
                </motion.div>
                <motion.div
                    className='flex justify-center'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={dnaPrivacyRisk}
                        alt='DNA Privacy Risk'
                        className='w-full h-auto'
                    />
                </motion.div>
            </div>
        </section>
    )
}
