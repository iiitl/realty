const { expect } = require('chai');
const { ethers } = require('hardhat');
const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/e70d528f69c445518be60d35b3a2bfba');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {

    const RealEstate =await ethers.getContractFactory('RealEstate');
    const realEstate = await RealEstate.deploy();
    await realEstate.deployed();

    console.log('realEstate address' + realEstate.address);
    console.log("Mining starting");

    

   
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
