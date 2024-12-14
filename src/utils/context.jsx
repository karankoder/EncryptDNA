import React, {
    createContext,
    useContext,
    useState,
    useEffect,
} from 'react';
import { useConnectWallet } from '@web3-onboard/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Context = createContext(undefined);
const queryClient = new QueryClient();

export const Provider = ({ children }) => {
    const [{ wallet }] = useConnectWallet();


    return (
        <Context.Provider
            value={{
                wallet,
            }}
        >
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </Context.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useAppContext must be used within a Context Provider');
    }
    return context;
};
