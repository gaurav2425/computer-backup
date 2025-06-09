// deploy.js
const { ethers } = require("hardhat");
const fs = require("fs");

async function deployContractAndFund() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://sepolia.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
  );
  const privateKey =
    "fd6caefcec7db09ecdaa044487d46ea072fa26ae814456685a48921bde7cc5fe"; // Replace 'YOUR_PRIVATE_KEY' with your actual private key
  const wallet = new ethers.Wallet(privateKey, provider);

  try {
    // Get the correct nonce by using 'pending' instead of 'latest'

    // Deploy the contract
    const SimpleStorage = await ethers.getContractFactory("FlashLoan");
    const simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.deployed();
    // console.log("Contract deployed to:", simpleStorage.address);

    // Get the contract address
    const contractAddress = simpleStorage.address;
    console.log(contractAddress);
    // const nonce = await provider.getTransactionCount(wallet.address);
    // console.log("Nonce", nonce);

    // Fund the contract with some testnet Ether
    const amountToSend = ethers.utils.parseEther("0.001", "ether");
    const tx = await wallet.sendTransaction({
      to: contractAddress,
      value: amountToSend,
    });
    await tx.wait();
    console.log(
      "Contract funded with",
      ethers.utils.formatEther(amountToSend),
      "Ether"
    );

    // // Save the deployed contract address and private key to a JSON file for later use
    // const contractData = {
    //   address: contractAddress,
    //   privateKey: privateKey,
    // };
    // fs.writeFileSync("contract-data.json", JSON.stringify(contractData));
  } catch (error) {
    console.error("Error deploying contract:", error);
  }
}

deployContractAndFund();
