import { Keypair, Connection, Commitment } from "@solana/web3.js";
import { createMint } from '@solana/spl-token';

/// CHALLENGE: Make sure this points to your wallet file
import wallet from "../wba-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

(async () => {
    try {
        // Mint config
        const mint = /// CHALLENGE: add code to create a mint here
        
        console.log(`You've created a new mint account:\n\n${mint.toBase58()}\n\nSave this address so you can use it to mint SPL tokens!`)
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
});