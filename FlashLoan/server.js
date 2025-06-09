// const { Web3 } = require("web3");
// const { BigNumber } = require("bignumber.js");
// const OneSplitAbi = require("./abi/splitabi.json");
// const weiEthDecimal = 18;

// const provider = new Web3.providers.HttpProvider(
//   "https://mainnet.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
// );

// var web3 = new Web3(provider);

// var fromTokenAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
// var toTokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
// var amount = 1;

// var OneSplitContract = new web3.eth.Contract(
//   OneSplitAbi,
//   "0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E"
// );

// let splitExchanges = [
//   "Uniswap",
//   "Kyber",
//   "Bancor",
//   "Oasis",
//   "Curve Compound",
//   "Curve USDT",
//   "Curve Y",
//   "Curve Binance",
//   "Curve Synthetix",
//   "Uniswap Compound",
//   "Uniswap CHAI",
//   "Uniswap Aave",
//   "Mooniswap",
//   "Uniswap V2",
//   "Uniswap V2 ETH",
//   "Uniswap V2 DAI",
//   "Uniswap V2 USDC",
//   "Curve Pax",
//   "Curve renBTC",
//   "Curve tBTC",
//   "Dforce XSwap",
//   "Shell",
//   "mStable mUSD",
//   "Curve sBTC",
//   "Balancer 1",
//   "Balancer 2",
//   "Balancer 3",
//   "Kyber 1",
//   "Kyber 2",
//   "Kyber 3",
//   "Kyber 4",
// ];

// OneSplitContract.methods
//   .getExpectedReturn(
//     fromTokenAddress,
//     toTokenAddress,
//     uint(100),
//     uint(10),
//     uint(0)
//   )
//   .call()
//   .then((data) => {
//     // let res = new BigNumber(1).shiftedBy(-weiEthDecimal);
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const OneSplitAbi = require("./abi/splitabi.json");

let { Web3 } = require("web3");

let provider = new Web3.providers.HttpProvider(
  "https://mainnet.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
);
let web3 = new Web3(provider);

let CONTRACT_ADDRESS = "0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E";

let splitExchanges = [
  "Uniswap",
  "Kyber",
  "Bancor",
  "Oasis",
  "CurveCompound",
  "CurveUsdt",
  "CurveY",
  "CurveBinance",
  "CurveSynthetix",
  "UniswapCompound",
  "UniswapChai",
  "UniswapAave",
  "Mooniswap",
  "UniswapV2",
  "UniswapV2ETH",
  "UniswapV2DAI",
  "UniswapV2USDC",
  "CurvePax",
  "CurveRenBtc",
  "CurveTBtc",
  "DforceSwap",
  "Shellexchangers",
];

let parts = 10;

let contract = new web3.eth.Contract(OneSplitAbi, CONTRACT_ADDRESS);
contract.methods
  .getExpectedReturn(
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    1,
    parts,
    0
  )
  .call()
  .then((data) => {
    console.log(Number(data.returnAmount));
    data.distribution.forEach(function (value, index) {
      const percentage = (Number(value) * 100) / Number(parts); // Convert value and parts to regular numbers
      console.log(`${splitExchanges[index]}: ${percentage}%`);
    });
    // console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
