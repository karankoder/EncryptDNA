import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { init, Web3OnboardProvider } from '@web3-onboard/react';
import { onboardConfig, wagmiConfig } from './utils/connectWallet';
import { WagmiProvider } from 'wagmi';
import { Provider } from './utils/context';

const web3Onboard = init({
  connect: {
    autoConnectAllPreviousWallet: true,
  },
  ...onboardConfig,
});

const App = () => {
  return (
    <div className="App w-[100vw] h-[100vh] overflow-x-hidden overflow-y-scroll no-scrollbar">
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <WagmiProvider config={wagmiConfig}>
          <Provider>
            <RouterProvider router={router}></RouterProvider>
          </Provider>
        </WagmiProvider>
      </Web3OnboardProvider>
    </div>
  );
};

export default App;
