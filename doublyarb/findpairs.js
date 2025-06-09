const { tokenCheckPancake } = require("./Exchanges/pancakeSwap");
const { tokenCheckSushiSwap } = require("./Exchanges/sushiswap");
const { tokenCheckUniswapv2 } = require("./Exchanges/uniswapV2");
const { tokenCheckUniswapV3 } = require("./Exchanges/uniswapV3");
const fs = require("fs");
const data = [
  {
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    chainId: 1,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg",
  },
  {
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    chainId: 1,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg",
  },
  {
    address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
    chainId: 1,
    name: "Pepe",
    symbol: "PEPE",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg",
  },
  {
    address: "0xa9e8acf069c58aec8825542845fd754e41a9489a",
    chainId: 1,
    name: "Pepe coin",
    symbol: "PEPECOIN",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg",
  },
  {
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    chainId: 1,
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    decimals: 8,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/btc.jpg",
  },
  {
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    chainId: 1,
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg",
  },
  {
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    chainId: 1,
    name: "Dai Stablecoin",
    symbol: "DAI",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg",
  },
  {
    address: "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
    chainId: 1,
    name: "TerraUSD",
    symbol: "UST",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/ust.jpg",
  },
  {
    address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    chainId: 1,
    name: "Frax",
    symbol: "FRAX",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png",
  },
  {
    address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    chainId: 1,
    name: "Maker",
    symbol: "MKR",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/mkr.jpg",
  },
  {
    chainId: 1,
    address: "0xBAac2B4491727D78D2b78815144570b9f2Fe8899",
    name: "The Doge NFT",
    symbol: "DOG",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xBAac2B4491727D78D2b78815144570b9f2Fe8899/logo.png",
  },
  {
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    chainId: 1,
    name: "Chain Link",
    symbol: "LINK",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/link.jpg",
  },
  {
    chainId: 1,
    address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    name: "Wrapped Liquid Staked Ether 2.0",
    symbol: "wstETH",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/wsteth.jpg",
  },
  {
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    chainId: 1,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/uni.jpg",
  },
  {
    address: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
    chainId: 1,
    name: "Lido DAO",
    symbol: "LDO",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32/logo.png",
  },
  {
    address: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
    chainId: 1,
    name: "tBTC",
    symbol: "tBTC",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/tbtc.jpg",
  },
  {
    address: "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
    chainId: 1,
    name: "Badger DAO",
    symbol: "BADGER",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/badger.jpg",
  },
  {
    address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    chainId: 1,
    name: "Curve DAO Token",
    symbol: "CRV",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/crv.jpg",
  },
  {
    address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    chainId: 1,
    name: "Polygon",
    symbol: "WMATIC",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg",
  },
  {
    chainId: 1,
    address: "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF",
    name: "Immutable X",
    symbol: "IMX",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF/logo.png",
  },
];

const blogFilePath = "./Data/target1.json";
const fetchPrice = async () => {
  try {
    for (let i = 0; i < data.length - 2; i++) {
      for (let j = i + 1; j < data.length - 1; j++) {
        for (let k = j + 1; k < data.length; k++) {
          let uniV2check1 = await tokenCheckUniswapv2(
            data[i].address,
            data[j].address
          );
          let uniV3check1 = await tokenCheckUniswapV3(
            data[i].address,
            data[j].address
          );
          let sushiCheck1 = await tokenCheckSushiSwap(
            data[i].address,
            data[j].address
          );
          let panCheck1 = await tokenCheckPancake(
            data[i].address,
            data[j].address
          );

          let uniV2check2 = await tokenCheckUniswapv2(
            data[j].address,
            data[k].address
          );
          let uniV3check2 = await tokenCheckUniswapV3(
            data[j].address,
            data[k].address
          );
          let sushiCheck2 = await tokenCheckSushiSwap(
            data[j].address,
            data[k].address
          );
          let panCheck2 = await tokenCheckPancake(
            data[j].address,
            data[k].address
          );

          let uniV2check3 = await tokenCheckUniswapv2(
            data[i].address,
            data[k].address
          );
          let uniV3check3 = await tokenCheckUniswapV3(
            data[i].address,
            data[k].address
          );
          let sushiCheck3 = await tokenCheckSushiSwap(
            data[i].address,
            data[k].address
          );
          let panCheck3 = await tokenCheckPancake(
            data[i].address,
            data[k].address
          );

          // let count = panCheck + uniV2check + uniV3check + sushiCheck;

          let obj = {
            token1: data[i].address,
            token2: data[j].address,
            token3: data[k].address,
            token1Decimal: data[i].decimals,
            token2Decimal: data[j].decimals,
            token3Decimal: data[k].decimals,
            results: [
              [
                uniV2check1 ? "uniswapV2" : "",
                uniV3check1 ? "uniswapV3" : "",
                sushiCheck1 ? "sushiswap" : "",
                panCheck1 ? "pancakeswap" : "",
              ],
              [
                uniV2check2 ? "uniswapV2" : "",
                uniV3check2 ? "uniswapV3" : "",
                sushiCheck2 ? "sushiswap" : "",
                panCheck2 ? "pancakeswap" : "",
              ],
              [
                uniV2check3 ? "uniswapV2" : "",
                uniV3check3 ? "uniswapV3" : "",
                sushiCheck3 ? "sushiswap" : "",
                panCheck3 ? "pancakeswap" : "",
              ],
            ],
            // dex1: [
            //   uniV2check1 ? 1 : 0,
            //   uniV3check1 ? 1 : 0,
            //   sushiCheck1 ? 1 : 0,
            //   panCheck1 ? 1 : 0,
            // ],
            // dex2: [
            //   uniV2check2 ? 1 : 0,
            //   uniV3check2 ? 1 : 0,
            //   sushiCheck2 ? 1 : 0,
            //   panCheck2 ? 1 : 0,
            // ],
            // dex3: [
            //   uniV2check3 ? 1 : 0,
            //   uniV3check3 ? 1 : 0,
            //   sushiCheck3 ? 1 : 0,
            //   panCheck3 ? 1 : 0,
            // ],
          };

          const blogPosts = JSON.parse(fs.readFileSync(blogFilePath));
          blogPosts.push(obj);
          fs.writeFileSync(blogFilePath, JSON.stringify(blogPosts, null, 2));
          obj = {};
        }
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

fetchPrice();
