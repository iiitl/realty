const { expect } = require('chai');
const { ethers } = require('hardhat');
const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {

    const RealEstate =await ethers.getContractFactory('RealEstate');
    const realEstate = await RealEstate.deploy();
    await realEstate.deployed();

    console.log('realEstate address' + realEstate.address);
    console.log("Mining starting");

    
    const Contract = await ethers.getContractFactory('Contract');
    const contract = await Contract.deploy(realEstate.address, IERC721); 
    await contract.deployed();

    console.log('Contract address: ' + contract.address);


    

   
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
