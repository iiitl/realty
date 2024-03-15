require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports ={
  solidity: "0.8.17",
  networks:{
    hardhat :{},
    arbitrum:{
      url:"https://arb-sepolia.g.alchemy.com/v2/q5H8ozuIHQGI8jCVWw1bLiWj2HM2Ftyu",
      accounts: [`15757a2dae66ec6da64ca0286fa8bda822183312b8ace298051796d048751ba2`]
    }
  },
  gasPrice:200000000000000,
};