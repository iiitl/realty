require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports ={
  solidity: "0.8.17",
  networks:{
    hardhat :{},
    mumbai_polygon:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/ZbhCQ83vaSchFpSTIsJOHbeqsA_sjPzk",
      accounts: [`15757a2dae66ec6da64ca0286fa8bda822183312b8ace298051796d048751ba2`],
      gasPrice:2000000
    },
    optimism:{
      url:"https://opt-sepolia.g.alchemy.com/v2/cgF1ofzIEn50ilq4ahnUu08CYGKnpUaC",
      accounts: [`15757a2dae66ec6da64ca0286fa8bda822183312b8ace298051796d048751ba2`],
      gasPrice:2000000
    },
    Arbitrum:{
      url:"https://arb-sepolia.g.alchemy.com/v2/q5H8ozuIHQGI8jCVWw1bLiWj2HM2Ftyu",
      accounts: [`15757a2dae66ec6da64ca0286fa8bda822183312b8ace298051796d048751ba2`],
      gasPrice:2000000
    }
  },
 
}