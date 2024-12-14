import React from 'react'

export default function Features() {
    return (
        <section className='py-20'>
            <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
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
            </div>
        </section>
    )
}
