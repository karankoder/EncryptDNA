import safeModule from '@web3-onboard/gnosis';
import trustModule from '@web3-onboard/trust';
import ledgerModule from '@web3-onboard/ledger';
import trezorModule from '@web3-onboard/trezor';
import coinbaseModule from '@web3-onboard/coinbase';
import walletConnectModule from '@web3-onboard/walletconnect';
import injectedModule from '@web3-onboard/injected-wallets';


import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, polygon } from 'wagmi/chains';

const injected = injectedModule();
export const onboardConfig = {
    wallets: [
        injected,
        walletConnectModule({
            projectId: import.meta.env.VITE_APP_WALLET_CONNECT_PROJECT_ID,
            dappUrl: import.meta.env.VITE_APP_APP_URL,
        }),
        coinbaseModule(),
        ledgerModule({
            walletConnectVersion: 2,
            projectId: import.meta.env.VITE_APP_WALLET_CONNECT_PROJECT_ID,
        }),
        trezorModule({
            email: import.meta.env.VITE_APP_SUPPORT_EMAIL,
            appUrl: import.meta.env.VITE_APP_APP_URL,
        }),
        safeModule(),
        trustModule(),
    ],
    chains: [
        {
            id: '0x1',
            token: 'ETH',
            rpcUrl:
                import.meta.env.VITE_APP_RPC_URL_ETHEREUM || 'https://eth.llamarpc.com',
        },
        {
            id: '0xaa36a7',
            token: 'ETH',
            rpcUrl:
                import.meta.env.VITE_APP_RPC_URL_SEPOLIA || 'https://sepolia.drpc.org',
        },
        {
            id: '0x89',
            token: 'MATIC',
            rpcUrl:
                import.meta.env.VITE_APP_RPC_URL_POLYGON || 'https://1rpc.io/matic',
        },
    ],
    appMetadata: {
        name: 'EncryptDNA',
        icon: '../assets/dna.png',
        description: 'Encrypt your DNA data',
    },
};

export const wagmiConfig = createConfig({
    chains: [polygon, mainnet, sepolia],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [polygon.id]: http(),
    },
});
