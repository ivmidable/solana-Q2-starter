import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

/// CHALLENGE: Make sure this points to your wallet file
import wallet from "../wba-wallet.json"


// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "max";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
/// CHALLENGE: Add mint address from spl_init.ts here
const mint = new PublicKey("");

// Recipient address
const to = new PublicKey("2sNvwMf15WPp94kywgvfn3KBNPNZhr5mWrDHmgjkjMhN");

(async () => {
    try {
        // Get the token account of the fromWallet address, and if it does not exist, create it
        const from_ata = /// CHALLENGE: add code to get/create a associtated token account here.

        // Get the token account of the toWallet address, and if it does not exist, create it
        const to_ata = /// CHALLENGE: add code to get/create a associtated token account here.

        // Transfer the new token to the "toTokenAccount" we just created
        const txhash = /// CHALLENGE: add code to transfer tokens here
    
        console.log(`Success! Check out your TX here:\nhttps://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();