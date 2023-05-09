import { Keypair, Connection, PublicKey, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';

/// CHALLENGE: Make sure this points to your wallet file
import wallet from "../wba-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Create a Solana devnet connection
const commitment: Commitment = "max";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const token_decimals = 1_000_000n;

/// CHALLENGE: Add  mint address from spl_init.ts here
const mint = new PublicKey("");

(async () => {
    try {
        const tokenAccount = /// CHALLENGE: add code to get/create a associtated token account here.

        console.log(`You've successfully created or found an existing ATA account:\n${tokenAccount.address.toBase58()}\n`)

        const txhash = /// CHALLENGE: add code to mint tokens here

        console.log(`Success! Check out your mint TX here:\nhttps://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(error: any) {
        if (error.name === "TokenAccountNotFoundError") {
            console.log("Failed to find Token Account. This is probably because we are trying to use it before a block has been found confirming it. Wait a few seconds and try again.")
        } else {
            console.log(`Oops, something went wrong: ${error}`)
        }
    }
})()