const { ethers } = require("hardhat");

async function main() {
  // Get the contract address and ABI
  const contractAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
  const contractABI = [
    // Include ABI methods required to interact with your contract
    "function balanceOf(address account) external view returns (uint256)",
  ];

  // Connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
  );

  // Connect to the contract
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Get the contract balance
  const balance = await contract.balanceOf("ADDRESS_TO_CHECK_BALANCE");
  console.log("Contract balance:", ethers.utils.formatEther(balance), "ETH");
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
