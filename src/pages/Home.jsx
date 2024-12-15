import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CurrentChallenges from '../components/CurrentChallenges';
import OurAlternatives from '../components/OurAlternatives';

export default function Home() {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <HeroSection />
            <Features />
            <HowItWorks />
            <CurrentChallenges />
            <OurAlternatives />
            <Footer />
        </div>
    );
}
