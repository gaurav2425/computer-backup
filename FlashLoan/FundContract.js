const { Web3 } = require("web3");
const { ethers } = require("ethers");
const {
  abi,
} = require("./artifacts/contracts/interfaces/IERC20.sol/IERC20.json");

// Initialize Web3 with your Ethereum network provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
); // Replace 'YOUR_PROVIDER_URL' with your provider URL
const web3 = new Web3(provider);

// ABI and address of your contract
const contractABI = [
  // Your contract ABI here
];
// const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace 'YOUR_CONTRACT_ADDRESS' with your contract address

// Private key of your Ethereum account
const privateKey =
  "fd6caefcec7db09ecdaa044487d46ea072fa26ae814456685a48921bde7cc5fe"; // Replace 'YOUR_PRIVATE_KEY' with your private key

// Function to fund the contract
async function fundContract(contractAddress) {
  console.log("Contract Add", contractAddress);
  try {
    // Create a new wallet from the private key
    const wallet = new ethers.Wallet(privateKey, provider);

    // Create contract instance
    const contract = new web3.eth.Contract(abi, contractAddress);
    // Get the account's address
    const from = await wallet.getAddress();
    // Send transaction to fund the contract
    const tx = await wallet.sendTransaction({
      to: contractAddress,
      value: 0.001, // adjust gas limit as needed
      gasLimit: 20000,
    });
    console.log("Transaction hash:", tx.transactionHash);
    console.log("Contract funded successfully!");
  } catch (error) {
    console.error("Error funding contract:", error);
  }
}

// Call the function to fund the contract
const amountToSend = web3.utils.toWei("1", "ether");

// Amount to send in Wei (1 Ether in this case)

module.exports = { fundContract: fundContract };
