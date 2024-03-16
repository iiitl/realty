require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports ={
  solidity: "0.8.17",
  networks:{
    hardhat :{},
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/EgjZcp5BNaLqQdxSub6IBTVV5uJTxv5q",
      accounts: [`af62d76cc36a60e1444cc839eb645a3684d40f9f4241b3033eea26c282067fdb`]
    }
  },
  gasPrice:200,
}