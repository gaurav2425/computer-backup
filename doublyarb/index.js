const {
  tokenCheckUniswapv2,
  tokenSwapUniswapv2,
  tokenSwapInUniswapv2,
} = require("./Exchanges/uniswapV2");
const {
  tokenCheckSushiSwap,
  tokenSwapSushiSwap,
  tokenSwapInSushiSwap,
} = require("./Exchanges/sushiswap");
const {
  tokenSwapUniswapV3,
  tokenCheckUniswapV3,
} = require("./Exchanges/uniswapV3");
const {
  tokenSwapPancake,
  tokenSwapPancake2,
} = require("./Exchanges/pancakeSwap");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

const { ethers, JsonRpcProvider } = require("ethers");
const myData = require("./Data/target1.json");

const checkSmall = (swap1, swap2, swap3, swap4) => {
  let arr = [swap1, swap2, swap3, swap4];
  let small = 0;
  let large = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[small] > arr[i]) {
      small = i;
    }
    if (arr[large] < arr[i]) {
      large = i;
    }
  }
  let res = arr[large] - arr[small];
  return res;
};

const findArb = async (data, humanVal) => {
  try {
    W;
    for (let i = 0; i < data.dex.length - 1; i++) {
      for (let j = i + 1; j < data.dex.length; j++) {
        try {
          let Exchanges = [
            "uniswapV2",
            "uniswapV3",
            "sushiswap",
            "pancakeswap",
          ];
          let Exchanges1 = [
            tokenSwapUniswapv2,
            tokenSwapUniswapV3,
            tokenSwapSushiSwap,
            tokenSwapPancake,
          ];

          // console.log("humanVal", humanVal);
          let amountIn = ethers.utils.parseUnits(humanVal, data.token1Decimal);
          console.log("amountIn", amountIn.toString());
          // const randomNumber = Math. floor(Math. random() * 100) + 1;

          let swap1 = await Exchanges1[i](data.token1, data.token2, amountIn);
          let swap2 = await Exchanges1[j](data.token1, data.token2, amountIn);

          console.log(Exchanges[i], swap1);
          console.log(Exchanges[j], swap2);
          if (swap1 > swap2) {
            let res = await Exchanges1[j](data.token2, data.token1, swap1);

            if (res - amountIn > 0) {
              console.log("Profit", res - amountIn);
            }
          }
          if (swap2 > swap1) {
            let res = await Exchanges1[i](data.token2, data.token1, swap2);
            if (res - amountIn > 0) {
              console.log("Profit", res - amountIn);
            }
          }
          console.log(">>>>>>>>>>>>>>>>>");
        } catch (error) {
          console.log("error", error);
        }
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

const swapTokens = async () => {
  try {
    // for (let i = 0; i < myData.length; i++) {
    //   try {
    //     let humanVal = "1.2";
    //     let swap1;
    //     let swap2;
    //     let swap3;
    //     let swap4;

    //     // console.log("Token1>>>", myData[i].token1, myData[i].token1Decimal);
    //     // console.log("Token2>>>", myData[i].token2, myData[i].token2Decimal);

    //     // let amountIn = ethers.utils.parseUnits(
    //     //   humanVal,
    //     //   myData[i].token1Decimal
    //     // );

    //     // if (myData[i].dex[0] != 0) {
    //     //   swap1 = await tokenSwapSushiSwap(
    //     //     myData[i].token1,
    //     //     myData[i].token2,
    //     //     amountIn
    //     //   );
    //     //   let swap6 = await tokenSwapInSushiSwap(
    //     //     myData[i].token2,
    //     //     myData[i].token1,
    //     //     amountIn
    //     //   );
    //     //   console.log("tokenSwapSushiSwap", swap1);
    //     //   console.log("tokenSwapInSushiSwap", swap6);
    //     // }

    //     // if (myData[i].dex[1] != 0) {
    //     //   swap2 = await tokenSwapUniswapv2(
    //     //     myData[i].token1,
    //     //     myData[i].token2,
    //     //     amountIn
    //     //   );
    //     //   console.log("tokenSwapUniswapv2", swap2);
    //     //   let swap2In = await tokenSwapInUniswapv2(
    //     //     myData[i].token2,
    //     //     myData[i].token1,

    //     //     amountIn
    //     //   );
    //     //   console.log("tokenSwapUniswapv2In", swap2In);
    //     // }

    //     // if (myData[i].dex[2] != 0) {
    //     //   swap3 = await tokenSwapUniswapV3(
    //     //     myData[i].token1,
    //     //     myData[i].token2,
    //     //     amountIn
    //     //   );
    //     //   console.log("tokenSwapUniswapV3", swap3);
    //     // }

    //     // if (myData[i].dex[3] != 0) {
    //     //   swap4 = await tokenSwapPancake(
    //     //     myData[i].token1,
    //     //     myData[i].token2,
    //     //     amountIn
    //     //   );
    //     //   let swap7 = await tokenSwapPancake2(
    //     //     amountIn,
    //     //     myData[i].token2,
    //     //     myData[i].token1
    //     //   );
    //     //   console.log("tokenSwapPancake", swap3);
    //     //   console.log("tokenInSwapPancake", swap7);
    //     // }

    //     await findArb(myData[i]);

    //     console.log("Index: ", i);
    //   } catch (error) {
    //     console.log("error");
    //   }
    // }

    // while (true) {

    // }

    for (let i = 6; i < 7; i++) {
      let humanVal = "1";
      await findArb(myData[i], humanVal);
    }
  } catch (error) {
    console.log("error");
  }
};

swapTokens();
