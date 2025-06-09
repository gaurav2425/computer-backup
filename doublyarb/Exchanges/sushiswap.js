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
// 0x6B175474E89094C44Da98b954EedeAC495271d0F
const token0 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // Aave
const token1 = "0x8f8221aFbB33998d8584A2B05749bA73c37a938a"; // DAI

const PATH0 = [token0, token1];
const PATH1 = [token1, token0];

const routerAbi = [
  "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
  "function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory amounts)",
];

const pairAbi = [
  "function getPair(address tokenA, address tokenB) external view returns (address pair)",
];

const reserveAbi = [
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
];

const uniRouter = new ethers.Contract(uniRouterAddress, routerAbi, provider);
const sushiRouter = new ethers.Contract(
  sushiRouterAddress,
  routerAbi,
  provider
);

const sushiFactory = new ethers.Contract(
  SUSHI_FACTORY,
  factoryArtifact.abi,
  provider
);
const uniFactory = new ethers.Contract(
  UNI_FACTORY,
  factoryArtifact.abi,
  provider
);

const decimalOut = async (tokenAddr) => {
  const Token1 = new ethers.Contract(tokenAddr, erc20ABI, provider);
  const decimals = await Token1.decimals();
  const decimalsString = await decimals.toString();
  return Number(decimalsString);
};
const main = async () => {
  const Decimals = 18;
  const amountIn = ethers.parseUnits("25", Decimals);

  const uniPair = await uniFactory.getPair(token0, token1);
  const sushiPair = await sushiFactory.getPair(token0, token1);

  if (
    uniPair != 0x0000000000000000000000000000000000000000 &&
    sushiPair != 0x0000000000000000000000000000000000000000
  ) {
    console.log("Unipair", uniPair);
    console.log("SUshipair", sushiPair);

    const sushiRes = await sushiRouter.getAmountsOut(amountIn, PATH0);
    console.log("sushiRes", sushiRes);
  } else {
    console.log("Unipair", uniPair);
    console.log("SUshipair", sushiPair);
    console.log("No pair found for given Tokens!");
  }
};
// main();
const tokenCheckSushiSwap = async (token0, token1) => {
  const sushiPair = await sushiFactory.getPair(token0, token1);
  if (sushiPair != 0x0000000000000000000000000000000000000000) {
    return true;
  } else {
    return false;
  }
};

const tokenSwapSushiSwap = async (
  token0,
  token1,
  amountIn,
  token1Decimal,
  token2Decimal
) => {
  let PATH = [token0, token1];
  const SUshiRes = await sushiRouter.getAmountsOut(amountIn, PATH);
  // const finalAmount = ethers.utils.formatUnits(
  //   SUshiRes[1].toString(),
  //   token2Decimal
  // );
  // console.log("finalAmount1", finalAmount);
  return SUshiRes[1].toString();
};

const tokenSwapInSushiSwap = async (token0, token1, amountIn) => {
  try {
    let PATH = [token0, token1];
    const SushiRes = await sushiRouter.getAmountsIn(amountIn, PATH);
    // const finalAmount = ethers.utils.formatUnits(
    //   SUshiRes[1].toString(),
    //   token2Decimal
    // );
    // console.log("finalAmount1", finalAmount);
    return SushiRes[0].toString();
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  tokenCheckSushiSwap,
  tokenSwapSushiSwap,
  tokenSwapInSushiSwap,
};

// 100000000000000000000n
// 7285368347020424433n
