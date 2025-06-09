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

  const USDC_WHALE = "0xcffad3200574698b78f32232aa9d63eabd290703";
  const USDC = "0x155ff1A85F440EE0A382eA949f24CE4E0b751c65";
  const LINK = "0x1B8568FbB47708E9E9D31Ff303254f748805bF21";

  const usdcInstance = new ethers.Contract(USDC, abi, provider);

  beforeEach(async () => {
    // Ensure that the WHALE has a balance
    const whale_balance = await provider.getBalance(USDC_WHALE);
    expect(whale_balance).not.equal("0");

    // Deploy smart contract
    const FlashLoan = await ethers.getContractFactory("FlashLoan");
    FLASHLOAN = await FlashLoan.deploy();
    await FLASHLOAN.deployed();

    const borrowAmountHuman = "1000000";
    BORROW_AMOUNT = ethers.utils.parseUnits(borrowAmountHuman, DECIMALS);
    initialFundingHuman = "1000";
    // 9999716191601431014648;
    // 9999549963551039333448
    FUND_AMOUNT = ethers.utils.parseUnits(initialFundingHuman, DECIMALS);

    // Fund our Contract - FOR TESTING ONLY
    await fundContract(
      usdcInstance,
      USDC_WHALE,
      FLASHLOAN.address,
      initialFundingHuman,
      DECIMALS
    );
  });

  describe("Arbitrage Execution", () => {
    it("ensures the contract is funded", async () => {
      const flashLoanBalance = await FLASHLOAN.getBalanceOfToken(USDC);

      const flashSwapBalanceHuman = ethers.utils.formatUnits(
        flashLoanBalance,
        DECIMALS
      );
      expect(Number(flashSwapBalanceHuman)).equal(Number(initialFundingHuman));
    });

    it("executes the arbitrage", async () => {
      txArbitrage = await FLASHLOAN.initiateArbitrage(USDC, BORROW_AMOUNT);

      assert(txArbitrage);

      const contractBalanceUSDC = await FLASHLOAN.getBalanceOfToken(USDC);
      const formattedBalUSDC = Number(
        ethers.utils.formatUnits(contractBalanceUSDC, DECIMALS)
      );
      console.log("Balance of USDC: " + formattedBalUSDC);

      const contractBalanceLINK = await FLASHLOAN.getBalanceOfToken(LINK);
      const formattedBalLINK = Number(
        ethers.utils.formatUnits(contractBalanceLINK, DECIMALS)
      );
      console.log("Balance of LINK: " + formattedBalLINK);
    });
  });
});
