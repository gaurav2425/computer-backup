const { ethers, JsonRpcProvider } = require("ethers");
const {
  uniRouterAddress,
  sushiRouterAddress,
  UNI_FACTORY,
  SUSHI_FACTORY,
} = require("../../arbitrage/routers");

const {
  erc20ABI,
  factoryABI,
  pairABI,
  routerABI,
} = require("../../arbitrage/ABI/Abiinfo");
const factoryArtifact = require("@uniswap/v2-core/build/UniswapV2Factory.json");
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
);

const routerAbi = [
  "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
  "function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory amounts)",
];

const reserveAbi = [
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
];

const uniRouter = new ethers.Contract(uniRouterAddress, routerAbi, provider);
const uniFactory = new ethers.Contract(
  UNI_FACTORY,
  factoryArtifact.abi,
  provider
);

const tokenCheckUniswapv2 = async (token0, token1) => {
  const uniPair = await uniFactory.getPair(token0, token1);
  if (uniPair != 0x0000000000000000000000000000000000000000) {
    return true;
  } else {
    return false;
  }
};

const tokenSwapUniswapv2 = async (
  token0,
  token1,
  amountIn,
  token1Decimal,
  token2Decimal
) => {
  let PATH = [token0, token1];
  const uniRes1 = await uniRouter.getAmountsOut(amountIn, PATH);
  // const finalAmount = ethers.utils.formatUnits(
  //   uniRes1[1].toString(),
  //   token2Decimal
  // );
  // console.log("finalAmount1", finalAmount);
  return uniRes1[1].toString();
};

const tokenSwapInUniswapv2 = async (
  token0,
  token1,
  amountIn,
  token1Decimal,
  token2Decimal
) => {
  let PATH = [token0, token1];
  const uniRes1 = await uniRouter.getAmountsIn(amountIn, PATH);
  // const finalAmount = ethers.utils.formatUnits(
  //   uniRes1[1].toString(),
  //   token2Decimal
  // );
  // console.log("finalAmount1", finalAmount);
  return uniRes1[0].toString();
};

module.exports = {
  tokenCheckUniswapv2,
  tokenSwapUniswapv2,
  tokenSwapInUniswapv2,
};
