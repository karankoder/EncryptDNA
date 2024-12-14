import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Features from '../components/Features';

export default function Home() {
    return (
        <div className='container mx-auto'>

            <Navbar />
            <HeroSection />
            <Features />

            {/* How It Works Section */}
            <section className='py-20 bg-[#FFE8A1]'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-3xl font-bold text-center mb-8'>How It Works</h2>
                    <div className='space-y-8'>
                        <div className='flex items-center hover:scale-105 transition-transform'>
                            <div className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4'>
                                1
                            </div>
                            <div className='flex items-center'>
                                <div className='text-4xl mr-4'>☁️</div>
                                <p>Upload your raw DNA file.</p>
                            </div>
                        </div>
                        <div className='flex items-center hover:scale-105 transition-transform'>
                            <div className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4'>
                                2
                            </div>
                            <div className='flex items-center'>
                                <div className='text-4xl mr-4'>🔍</div>
                                <p>Receive your encrypted DNA Passport.</p>
                            </div>
                        </div>
                        <div className='flex items-center hover:scale-105 transition-transform'>
                            <div className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4'>
                                3
                            </div>
                            <div className='flex items-center'>
                                <div className='text-4xl mr-4'>✔️</div>
                                <p>
                                    Use tools like SnipperBot and mtDog to analyze traits
                                    privately.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Privacy Challenge Section */}
            <section className='py-20 bg-[#F1FAEE]'>
                <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    <div className='text-center md:text-left'>
                        <div className='text-6xl mb-4'>🔒</div>
                        <h2 className='text-3xl font-bold mb-4'>
                            The Current Privacy Challenge
                        </h2>
                        <p className='text-lg'>
                            Understanding the risks associated with genomic data privacy is
                            crucial. Current systems often leave your sensitive information
                            vulnerable to breaches and misuse.
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <img
                            src='path/to/dna-broken-chain-animation.gif'
                            alt='DNA Privacy Risk'
                            className='w-full h-auto'
                        />
                    </div>
                </div>
            </section>

            {/* Our Privacy-Protecting Alternative Section */}
            <section className='py-20 bg-[#A8DADC]'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl font-bold mb-8'>
                        Our Privacy-Protecting Alternative
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105'>
                            <div className='text-6xl mb-4'>🔒</div>
                            <h3 className='text-xl font-bold mb-2'>Secure Data Handling</h3>
                            <p>
                                Your data is encrypted and handled with the utmost security.
                            </p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105'>
                            <div className='text-6xl mb-4'>🔍</div>
                            <h3 className='text-xl font-bold mb-2'>Anonymous Insights</h3>
                            <p>Gain insights without revealing your identity.</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105'>
                            <div className='text-6xl mb-4'>🏅</div>
                            <h3 className='text-xl font-bold mb-2'>Verified Results</h3>
                            <p>Trustworthy and accurate results you can rely on.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
}
