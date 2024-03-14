require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports ={
  solidity: "0.8.17",
  networks:{
    hardhat :{},
    polygon_mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/Gc_VlMr5WTe57ynQps7sKYAEFoqIqxfY",
      accounts: [`0x${"e2b2fc0a72f1489e47c5dc05c2c46e77adbfeed2e0b5d11f64445d36d0ba9ebd"}`]
    }
  },
  gasPrice:200,
}