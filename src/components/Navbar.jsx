import React, { useEffect, useState } from 'react'
import dna from '../assets/dna.png';
import { useConnectWallet } from '@web3-onboard/react';
import { ethers } from 'ethers';

export default function Navbar() {

    const [{ wallet }, connect] = useConnectWallet();
    const [ethersProvider, setEthersProvider] = useState(null);
    const [walletAddress, setWalletAddress] = useState(null);

    useEffect(() => {
        if (wallet) {
            setEthersProvider(
                new ethers.BrowserProvider(wallet.provider, 'any')
            );
            setWalletAddress(`${wallet.accounts[0].address.slice(0, 4)}...${wallet.accounts[0].address.slice(-4)}`);
        } else {
            setEthersProvider(null);
            setWalletAddress(null);
        }
    }, [wallet]);

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
                {/* <button className='bg-[#FF9F43] text-white py-2 px-4 rounded transition-transform transform  active:scale-95'>
                    Get Started
                </button> */}

                <button onClick={() => connect()} className='bg-[#FF9F43] text-white py-2 px-4 rounded transition-transform transform  active:scale-95'>
                    {walletAddress ? walletAddress : 'Connect Wallet'}
                </button>

            </nav>
        </header>
    )
}
