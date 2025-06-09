const ethers = require("ethers");
const {
  factoryAddress,
  routerAddress,
  fromAddress,
  toAddress,
} = require("../Address/AddressList");
const { erc20ABI, factoryABI, pairABI, routerABI } = require("../ABI/AbiInfo");

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/305a3fb3fd1d4347ab987bb0bb16cc59"
);

const factoryInstance = new ethers.Contract(
  factoryAddress,
  factoryABI,
  provider
);
const routerInstance = new ethers.Contract(routerAddress, routerABI, provider);

const tokenCheckPanCakeSwap = () => {};

const tokenSwapPancake = async (address1, address2, amount) => {
  try {
    const token1 = new ethers.Contract(address1, erc20ABI, provider);
    const token2 = new ethers.Contract(address2, erc20ABI, provider);

    const decimal1 = await token1.decimals();
    const decimal2 = await token2.decimals();
    // console.log("decimal1", decimal1);
    // console.log("decimal2", decimal2);
    // const amountIn = ethers.utils.parseUnits(amount, decimal1).toString();
    const amountsOut = await routerInstance.getAmountsOut(amount, [
      address1,
      address2,
    ]);
    // const humanOutput = ethers.utils.formatUnits(
    //   amountsOut[1].toString(),
    //   decimal2
    // );
    // console.log("This the number of WBNB: ", humanOutput);
    return amountsOut[1].toString();
  } catch (error) {
    console.log("error");
  }
};
humanFormat = "100";
// tokenSwapPancake(humanFormat);

const tokenSwapPancake2 = async (amount, address1, address2) => {
  try {
    const token1 = new ethers.Contract(address1, erc20ABI, provider);
    const token2 = new ethers.Contract(address2, erc20ABI, provider);

    const decimal1 = await token1.decimals();
    const decimal2 = await token2.decimals();
    // console.log("decimal1", decimal1);
    // console.log("decimal2", decimal2);
    // const amountIn = ethers.utils.parseUnits(amount, decimal1).toString();
    const amountsIn = await routerInstance.getAmountsIn(amount, [
      address1,
      address2,
    ]);

    // const humanOutput = ethers.utils.formatUnits(
    //   amountsOut[1].toString(),
    //   decimal2
    // );
    // console.log("This the number of WBNB: ", humanOutput);
    return amountsIn[0].toString();
  } catch (error) {
    console.log("error???", error);
  }
};

const tokenCheckPancake = async (addressFrom, addressTo) => {
  const getPair = await factoryInstance.getPair(addressFrom, addressTo);
  if (getPair != 0x0000000000000000000000000000000000000000) {
    return true;
  }
  return false;
};

module.exports = { tokenSwapPancake, tokenSwapPancake2, tokenCheckPancake };
