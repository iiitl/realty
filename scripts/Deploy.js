const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();

    // Deploy RealEstate contract
    const RealEstate = await ethers.getContractFactory('RealEstate');
    const realEstate = await RealEstate.deploy();
    await realEstate.deployed();
    console.log('RealEstate contract deployed to:', realEstate.address);

    // Deploy Contract (renamed from your other contract)
    const Contract = await ethers.getContractFactory('Contract');
    const contract = await Contract.deploy(realEstate.address, deployer.address);
    await contract.deployed();
    console.log('Contract deployed to:', contract.address);

    console.log("Mining starting");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
