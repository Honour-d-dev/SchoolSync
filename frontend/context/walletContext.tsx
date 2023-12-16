"use client";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  Address,
  PublicActions,
  WalletClient,
  EIP1193Provider,
  createWalletClient,
  custom,
  publicActions,
  toHex,
} from "viem";
import { sepolia } from "viem/chains";

declare global {
  interface Window {
    ethereum: EIP1193Provider;
  }
}

export const chain = sepolia;

type TWalletContext = {
  connectWallet: () => Promise<void>;
  wallet?: WalletClient & PublicActions;
  account?: Address;
};

const WalletContext = createContext<TWalletContext>({} as TWalletContext);

export default function WalletProvider({ children }: PropsWithChildren) {
  const [wallet, setWallet] = useState<WalletClient & PublicActions>();
  const [account, setAccount] = useState<Address>();

  const connectWallet = useCallback(async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const wallet = createWalletClient({
      account,
      transport: custom(window.ethereum),
    }).extend(publicActions);

    const chainId = await wallet.getChainId();
    if (chainId !== chain.id) {
      try {
        await wallet.switchChain({ id: chain.id });
      } catch {
        await wallet.addChain({ chain });
      }
    }

    setAccount(account);
    setWallet(wallet);
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, account, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  return context;
};
