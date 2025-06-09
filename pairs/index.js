// index.js
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { ethers, JsonRpcProvider } from "ethers";
// const { Data } = require("./data/tokens.json");
import Data from "./data/data.json" assert { type: "json" };
import {
  uniRouterAddress,
  sushiRouterAddress,
  UNI_FACTORY,
  SUSHI_FACTORY,
} from "./address.js";
// import factoryArtifact from "@uniswap/v2-core/build/UniswapV2Factory.json" assert { type: "json" };
import factoryArtifact from "@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json" assert { type: "json" };
const provider = new JsonRpcProvider(
  "https://mainnet.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
);

const app = express();
app.use(bodyParser.json());

const blogFilePath = "./data/blogPosts.json";
const Datatokens = "./data/tokens.json";

console.log(Data[0]);

// Get all blog posts
app.get("/blogPosts", (req, res) => {
  const blogPosts = JSON.parse(fs.readFileSync(blogFilePath));
  res.json(blogPosts);
});

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

const factoryAddress = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
const uniV3Factory = new ethers.Contract(
  factoryAddress,
  factoryArtifact.abi,
  provider
);

const PORT = process.env.PORT || 3000;

// app.listen(PORT, async () => {
//   let length = Data.length;

//   for (let i = 0; i < length - 1; i++) {
//     for (let j = 1; j < length; j++) {
//       const uniPair = await uniFactory.getPair(
//         Data[i].address,
//         Data[j].address
//       );
//       const sushiPair = await sushiFactory.getPair(
//         Data[i].address,
//         Data[j].address
//       );
//       if (
//         uniPair != 0x0000000000000000000000000000000000000000 &&
//         sushiPair != 0x0000000000000000000000000000000000000000
//       ) {
//         const blogPosts = JSON.parse(fs.readFileSync(blogFilePath));
//         const newPost = {
//           token0: Data[i].address,
//           token1: Data[j].address,
//         };

//         blogPosts.push(newPost);
//         fs.writeFileSync(blogFilePath, JSON.stringify(blogPosts, null, 2));
//       }
//     }
//   }

//   // res.status(201).json(newPost);
//   console.log(`Server running on port ${PORT}`);
// });

let length = Data.length;

for (let i = 0; i < length - 1; i++) {
  for (let j = 1; j < length; j++) {
    const uniPair = await uniV3Factory.getPool(
      Data[i].address,
      Data[j].address,
      3000
    );
    // const sushiPair = await sushiFactory.getPair(
    //   Data[i].address,
    //   Data[j].address
    // );
    if (
      // uniPair != 0x0000000000000000000000000000000000000000 &&
      uniPair != 0x0000000000000000000000000000000000000000
    ) {
      const blogPosts = JSON.parse(fs.readFileSync(blogFilePath));
      const tokenExists = blogPosts.some(
        (entry) =>
          (entry?.token0 === Data[i]?.address &&
            entry?.token1 === Data[j]?.address) ||
          (entry?.token1 === Data[j]?.address &&
            entry?.token1 === Data[i]?.address)
      );

      if (!tokenExists) {
        const newPost = {
          token0: Data[i].address,
          token1: Data[j].address,
          pairSymbol: Data[i].symbol + "/" + Data[j].symbol,
          pairname: Data[i].name + "/" + Data[j].name,
          token0Decimal: Data[i].decimals,
          token1Decimal: Data[j].decimals,
        };

        blogPosts.push(newPost);
        fs.writeFileSync(blogFilePath, JSON.stringify(blogPosts, null, 2));
      }
    }
  }
}

const uniPair = await uniV3Factory.getPool(
  // Data[i].address,
  // Data[j].address,
  "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  3000
);

console.log("uniPair", uniPair);
