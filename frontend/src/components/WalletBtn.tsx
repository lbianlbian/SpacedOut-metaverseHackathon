import React from "react";
import { useEffect, useState } from "react";
import { PublicKey, Transaction } from "@solana/web3.js";

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}


const WalletBtn = (props) => {
    const [provider, setProvider] = useState<PhantomProvider | undefined>(
        undefined
      );
      const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
        undefined
      );
    
      /**
       * @description gets Phantom provider, if it exists
       */
      const getProvider = (): PhantomProvider | undefined => {
        if ("solana" in window) {
          // @ts-ignore
          const provider = window.solana as any;
          if (provider.isPhantom) return provider as PhantomProvider;
        }
      };
    
      /**
       * @description prompts user to connect wallet if it exists
       */
      const connectWallet = async () => {
        // @ts-ignore
        const { solana } = window;
    
        if (solana) {
          try {
            const response = await solana.connect();
            console.log("wallet account ", response.publicKey.toString());
            let walletId = response.publicKey.toString();
            props.getWalletId(walletId);
            props.walletMarket(walletId);
            setWalletKey(response.publicKey.toString());
          } catch (err) {
            // { code: 4001, message: 'User rejected the request.' }
          }
        }
        
      };
    
      /**
       * @description disconnect Phantom wallet
       */
      const disconnectWallet = async () => {
        // @ts-ignore
        const { solana } = window;
    
        if (walletKey && solana) {
          await (solana as PhantomProvider).disconnect();
          setWalletKey(undefined);
        }
      };
    
      // detect phantom provider exists
      useEffect(() => {
        const provider = getProvider();
    
        if (provider) setProvider(provider);
        else setProvider(undefined);
      }, []);
    
  
  if (provider) {
    if (walletKey) {
      return (
        <div
          onClick={disconnectWallet}
          className="wallet-btn"
        >
          Disconnect from Phantom
        </div>
      );
    }

    return (
      <div
        onClick={connectWallet}
        className="wallet-btn"
      >
        Connect to Phantom
      </div>
    );
  }
  else return (
    <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="wallet-link">Get Phantom!</a>
  );
};

export default WalletBtn;
