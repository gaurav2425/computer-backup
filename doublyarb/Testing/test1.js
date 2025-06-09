const { ethers } = require("ethers");
const { tokenSwapPancake } = require("../Exchanges/pancakeSwap");
const { tokenSwapSushiSwap } = require("../Exchanges/sushiswap");
const { tokenSwapUniswapv2 } = require("../Exchanges/uniswapV2");
const { tokenSwapUniswapV3 } = require("../Exchanges/uniswapV3");

let Data = {
  token1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  token2: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
  token3: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  token1Decimal: 18,
  token2Decimal: 18,
  token3Decimal: 6,
  results: [
    ["uniswapV2", "uniswapV3", "sushiswap"],
    ["uniswapV2", "uniswapV3", "pancakeswap"],
    ["uniswapV3", "uniswapV2", "sushiswap"],
    ["uniswapV3", "uniswapV2", "pancakeswap"],
  ],
};

const giveIndex = (dex) => {
  let Exchanges = ["uniswapV2", "uniswapV3", "sushiswap", "pancakeswap"];
  let index = Exchanges.indexOf(dex);
  return index;
};

const triangularArbitrage = async (
  token1,
  token2,
  token3,
  token1Decimal,
  token2Decimal,
  token3Decimal,
  data
) => {
  let Exchanges1 = [
    tokenSwapUniswapv2,
    tokenSwapUniswapV3,
    tokenSwapSushiSwap,
    tokenSwapPancake,
  ];

  let temp = {
    token1,
    token2,
    token3,
    token1Decimal,
    token2Decimal,
    token3Decimal,
    data,
  };

  //   console.log("amountIn", amountIn.toString());
  try {
    let amountIn = ethers.utils.parseUnits("1", temp.token1Decimal);

    let swap1 = await Exchanges1[giveIndex(data[0])](
      temp.token1,
      temp.token2,
      amountIn
    );

    let swap2 = await Exchanges1[giveIndex(data[1])](
      temp.token2,
      temp.token3,
      swap1
    );

    let swap3 = await Exchanges1[giveIndex(data[2])](
      temp.token3,
      temp.token1,
      swap2
    );

    if (Number(swap3) > Number(amountIn.toString())) {
      console.log("profitttt---------------", swap3, amountIn.toString());
    }

    console.log(swap1, "-->", swap2, "-->", swap3);
  } catch (error) {
    console.log("error");
  }

  //   let swap3 = await Exchanges1[giveIndex(data[2])](
  //     temp.token3,
  //     temp.token1,
  //     swap2
  //   );

  //   console.log("--->", swap1, "--->", swap2, "----->", swap3);

  //   let swap3 = await Exchanges1[j](data.token1, data.token2, amountIn);
  //   console.log(Exchanges[i], swap1);
  //   console.log(Exchanges[j], swap2);
  //   if (swap1 > swap2) {
  //     let res = await Exchanges1[j](data.token2, data.token1, swap1);

  //     if (res - amountIn > 0) {
  //       console.log("Profit", res - amountIn);
  //     }
  //   }
  //   if (swap2 > swap1) {
  //     let res = await Exchanges1[i](data.token2, data.token1, swap2);
  //     if (res - amountIn > 0) {
  //       console.log("Profit", res - amountIn);
  //     }
  //   }
};

const findArb = async (data, humanVal) => {
  for (let i = 0; i < data?.results?.length; i++) {
    // for (let j = 0; j < 3; j++) {
    //   //   console.log(">>>", data?.results[i][j]);
    //   if (j == 1) {
    //     console.log(data?.token1, "-->", data?.token2, data?.results[i][j]);
    //   } else if (j == 2) {
    //     console.log(data?.token2, "-->", data?.token3, data?.results[i][j]);
    //   } else {
    //     console.log(data?.token3, "-->", data?.token1, data?.results[i][j]);
    //   }
    // }

    triangularArbitrage(
      data?.token1,
      data?.token2,
      data?.token3,
      data?.token1Decimal,
      data?.token2Decimal,
      data?.token3Decimal,
      data?.results[i]
    );
    // console.log("___________________");
  }

  //   console.log("data", data);
};

findArb(Data, "100");
