const {ethers: ethershardhat } = require('hardhat');
const { ethers } = require('ethers');
const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
    const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Fk0yMyij-22i7dHpRn2LqeIVgSELSkPQ");
    
    const [deployer] = await ethershardhat.getSigners(); 

    const RealEstate =await ethershardhat.getContractFactory('RealEstate');
    const realEstate = await RealEstate.deploy({ gasPrice: 4000000000 });
    await realEstate.deployed();
    console.log('realEstate address: ' + realEstate.address);

    const Contract = await ethershardhat.getContractFactory('Contract');
    const contract = await Contract.deploy(realEstate.address, deployer.address,{ gasPrice: 4000000000 });
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
  
