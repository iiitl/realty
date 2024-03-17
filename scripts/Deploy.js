const { expect } = require('chai');
const { ethers } = require('hardhat');
const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
    
    const Contract = await ethers.getContractFactory('Contract');
    

    
    const contract = await Contract.deploy();
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);

  
    const realEstate = await RealEstate.deploy();
    await realEstate.deployed();
    console.log('RealEstate deployed to:', realEstate.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
