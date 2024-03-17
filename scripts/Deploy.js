

const { expect } = require('chai');
const { ethers } = require('hardhat');
const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
    // getting signers
    let [seller] = await ethers.getSigners();

    const RealEstate = await ethers.getContractFactory('RealEstate');
    const realEstate = await RealEstate.deploy();
    await realEstate.deployed();
    // in console printing
    console.log('realEstate address' + realEstate.address);

    const Contract = await ethers.getContractFactory('Contract');
    const contract = await Contract.deploy(realEstate.address, seller.address);
    await contract.deployed();
     
  
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


  
