const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { JsonRpcProvider } = require("ethers");
// const { fundContract } = require("../utils/utilities");
const { fundContract } = require("../FundContract");
const {
  abi,
} = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");

// const provider = waffle.provider;
const provider = new ethers.providers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
);

describe("FlashLoan Contract", () => {
  let FLASHLOAN, BORROW_AMOUNT, FUND_AMOUNT, initialFundingHuman, txArbitrage;

  const DECIMALS = 18;

  const USDC = "0x514910771AF9Ca656af840dff83E8264EcF986CA"; // USDC contract address
  const LINK = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // LINK contract address

  const walletPrivateKey =
    "fd6caefcec7db09ecdaa044487d46ea072fa26ae814456685a48921bde7cc5fe";

  const usdcInstance = new ethers.Contract(USDC, abi, provider);

  // beforeEach(async () => {
  //   // Deploy smart contract
  //   const FlashLoan = await ethers.getContractFactory("FlashLoan");
  //   FLASHLOAN = await FlashLoan.deploy();
  //   await FLASHLOAN.deployed();

  //   // console.log("Deploy", FLASHLOAN);

  //   const borrowAmountHuman = "1";
  //   BORROW_AMOUNT = ethers.utils.parseUnits(borrowAmountHuman, DECIMALS);
  //   initialFundingHuman = "0.0001";
  //   FUND_AMOUNT = ethers.utils.parseUnits(initialFundingHuman, DECIMALS);

  //   // Fund our Contract using the private key
  //   const wallet = new ethers.Wallet(walletPrivateKey, provider);
  //   // console.log("Wallet", wallet);
  //   console.log(
  //     ">>>>",
  //     // usdcInstance,
  //     wallet.address,
  //     FLASHLOAN.address,
  //     initialFundingHuman,
  //     DECIMALS,
  //     ">>>>>>>>>"
  //   );
  //   await fundContract(FLASHLOAN.address);
  //   // await fundContract(
  //   //   usdcInstance,
  //   //   wallet.address,
  //   //   FLASHLOAN.address,
  //   //   initialFundingHuman,
  //   //   DECIMALS
  //   // );
  // });

  beforeEach(async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://goerli.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
    );
    const privateKey =
      "fd6caefcec7db09ecdaa044487d46ea072fa26ae814456685a48921bde7cc5fe"; // Replace 'YOUR_PRIVATE_KEY' with your actual private key
    const wallet = new ethers.Wallet(privateKey, provider);

    // Deploy the contract
    const FlashLoan = await ethers.getContractFactory("FlashLoan");
    const FLASHLOAN = await SimpleStorage.deploy();
    await FLASHLOAN.deployed();
    console.log("Contract deployed to:", FLASHLOAN.address);

    // Get the contract address
    const contractAddress = FLASHLOAN.address;

    // Approve USDC transfer
    const usdcContractAddress = "0x9FD21bE27A2B059a288229361E2fA632D8D2d074"; // Replace 'USDC_CONTRACT_ADDRESS' with the actual USDC contract address
    const usdcContract = new ethers.Contract(
      usdcContractAddress,
      [
        "function approve(address spender, uint256 amount) external returns (bool)",
      ],
      wallet
    );

    // Specify the amount of USDC to send
    const amountToSend = ethers.utils.parseUnits("100", 6); // 100 USDC, assuming USDC has 6 decimal places

    // Approve transfer from your account to the contract
    const approvalTx = await usdcContract.approve(
      contractAddress,
      amountToSend
    );
    await approvalTx.wait();

    console.log(
      "Approved transfer of",
      ethers.utils.formatUnits(amountToSend, 6),
      "USDC to contract"
    );

    // Save the deployed contract address and private key to a JSON file for later use
    const contractData = {
      address: contractAddress,
      privateKey: privateKey,
    };
    fs.writeFileSync("contract-data.json", JSON.stringify(contractData));
  });

  describe("Arbitrage Execution", () => {
    it("ensures the contract is funded", async () => {
      const flashLoanBalance = await FLASHLOAN.getBalanceOfToken(USDC);
      expect(
        Number(ethers.utils.formatUnits(flashLoanBalance, DECIMALS))
      ).equal(Number(initialFundingHuman));
    });

    it("executes the arbitrage", async () => {
      txArbitrage = await FLASHLOAN.initiateArbitrage(USDC, BORROW_AMOUNT);
      assert(txArbitrage);

      const contractBalanceUSDC = await FLASHLOAN.getBalanceOfToken(USDC);
      console.log(
        "Balance of USDC: " +
          ethers.utils.formatUnits(contractBalanceUSDC, DECIMALS)
      );

      const contractBalanceLINK = await FLASHLOAN.getBalanceOfToken(LINK);
      console.log(
        "Balance of LINK: " +
          ethers.utils.formatUnits(contractBalanceLINK, DECIMALS)
      );
    });
  });
});
