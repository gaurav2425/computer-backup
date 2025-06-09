const { ethers } = require("ethers");
const {
  abi: QuoterABI,
} = require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json");
const {
  abi: FactoryAbi,
} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json");
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
);

const factoryAddress = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
const factoryContract = new ethers.Contract(
  factoryAddress,
  FactoryAbi,
  provider
);
const QUOTER_CONTRACT_ADDRESS = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";
const quoterContract = new ethers.Contract(
  QUOTER_CONTRACT_ADDRESS,
  QuoterABI,
  provider
);

const tokenCheckUniswapV3 = async (addressFrom, addressTo) => {
  const getPair = await factoryContract.getPool(addressFrom, addressTo, 3000);
  if (getPair != 0x0000000000000000000000000000000000000000) {
    return true;
  }
  return false;
};

const tokenSwapUniswapV3 = async (
  addressFrom,
  addressTo,
  amountIn,
  token1Decimal,
  token2Decimal
) => {
  const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
    addressFrom,
    addressTo,
    3000,
    amountIn.toString(),
    0
  );
  // console.log("quotedAmountOut", quotedAmountOut);
  // const finalAmount = ethers.utils.formatUnits(
  //   quotedAmountOut.toString(),
  //   token2Decimal
  // );
  return quotedAmountOut.toString();
};

module.exports = { tokenCheckUniswapV3, tokenSwapUniswapV3 };
