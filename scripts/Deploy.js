const { expect } = require('chai');
const { ethers } = require('hardhat');
const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
    const [deployer] = await ethers.getSigners(); 

    const RealEstate =await ethers.getContractFactory('RealEstate');
    const realEstate = await RealEstate.deploy();
    await realEstate.deployed();
    console.log('realEstate address: ' + realEstate.address);

    const Contract = await ethers.getContractFactory('Contract');
    const contract = await Contract.deploy(realEstate.address, deployer.address);
    await contract.deployed();
    console.log('Contract address: ' + contract.address);


    const newItemId = await realEstate.mint("metadata_uri_here");
    await contract.list1(
        newItemId,
        "Amenities",
        1000, 
        3,    
        "image_uri_here",
        "Description",
        tokens(10), 
        newItemId 
    );
    
    console.log("Mining starting"); 
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
