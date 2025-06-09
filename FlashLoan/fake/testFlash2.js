const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { fundContract } = require("../utils/utilities");

const {
  abi,
} = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");

const provider = waffle.provider;

describe("FlashLoan Contract", () => {
  let FLASHLOAN, BORROW_AMOUNT, FUND_AMOUNT, initialFundingHuman, txArbitrage;

  const DECIMALS = 18;

  const USDC_WHALE = "0x00000000219ab540356cBB839Cbe05303d7705Fa";
  const USDC = "0xd38E5c25935291fFD51C9d66C3B7384494bb099A";
  const LINK = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

  const walletAddress = "0xF250b1d39600B00994F55d48bD7b6a94CA60965e";

  const usdcInstance = new ethers.Contract(USDC, abi, provider);

  // beforeEach(async () => {
  //   // Ensure that the WHALE has a balance
  //   const whale_balance = await provider.getBalance(USDC_WHALE);
  //   expect(whale_balance).not.equal("0");

  //   // Deploy smart contract
  //   const FlashLoan = await ethers.getContractFactory("FlashLoan");
  //   FLASHLOAN = await FlashLoan.deploy();
  //   await FLASHLOAN.deployed();

  //   console.log("Before", await FLASHLOAN.getBalanceOfToken(USDC));

  //   const borrowAmountHuman = "1.5";
  //   BORROW_AMOUNT = ethers.utils.parseUnits(borrowAmountHuman, DECIMALS);
  //   initialFundingHuman = "1.69";
  //   FUND_AMOUNT = ethers.utils.parseUnits(initialFundingHuman, DECIMALS);

  //   // Fund our Contract - FOR TESTING ONLY
  //   await fundContract(
  //     usdcInstance,
  //     USDC_WHALE,
  //     FLASHLOAN.address,
  //     initialFundingHuman,
  //     DECIMALS
  //   );
  //   console.log("Address of contract", FLASHLOAN.address);
  // });

  beforeEach(async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://sepolia.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
    );
    const privateKey =
      "fd6caefcec7db09ecdaa044487d46ea072fa26ae814456685a48921bde7cc5fe"; // Replace 'YOUR_PRIVATE_KEY' with your actual private key
    const wallet = new ethers.Wallet(privateKey, provider);

    const FlashLoan = await ethers.getContractFactory("FlashLoan");
    const FLASHLOAN = await FlashLoan.deploy();
    await FLASHLOAN.deployed();
    // console.log("Contract deployed to:", simpleStorage.address);

    // Get the contract address
    const contractAddress = FLASHLOAN.address;
    console.log("Contract Address", contractAddress);
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
  });

  describe("Arbitrage Execution", () => {
    it("ensures the contract is funded", async () => {
      console.log("Runnn");
      const flashLoanBalance = await FLASHLOAN.getBalanceOfToken(
        "0xd38E5c25935291fFD51C9d66C3B7384494bb099A"
      );
      console.log("Balance Before:", flashLoanBalance);

      // const flashSwapBalanceHuman = ethers.utils.formatUnits(
      //   flashLoanBalance,
      //   DECIMALS
      // );
      // console.log(
      //   flashLoanBalance,
      //   ">>",
      //   flashSwapBalanceHuman,
      //   "<<<",
      //   initialFundingHuman
      // );
      // expect(Number(flashSwapBalanceHuman)).equal(Number(initialFundingHuman));
    });

    // it("executes the arbitrage", async () => {
    //   txArbitrage = await FLASHLOAN.initiateArbitrage(USDC, BORROW_AMOUNT);

    //   assert(txArbitrage);

    //   const contractBalanceUSDC = await FLASHLOAN.getBalanceOfToken(USDC);
    //   const formattedBalUSDC = Number(
    //     ethers.utils.formatUnits(contractBalanceUSDC, DECIMALS)
    //   );
    //   console.log(
    //     "Balance of USDC: " + formattedBalUSDC,
    //     "Smartcontract Balance",
    //     FLASHLOAN.address
    //   );

    //   const contractBalanceLINK = await FLASHLOAN.getBalanceOfToken(LINK);
    //   const formattedBalLINK = Number(
    //     ethers.utils.formatUnits(contractBalanceLINK, DECIMALS)
    //   );
    //   console.log("Balance of LINK: " + formattedBalLINK);
    // });
  });
});
