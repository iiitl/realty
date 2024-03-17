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

      // Add sellers
    await addSellers(contract);

    // Retrieve and display seller names
    await displaySellerNames(contract);

    console.log("Mining starting");
    }

    async function addSellers(contract) {
  // addSeller function to add some sellers
    await contract.addSeller("Seller1");
    await contract.addSeller("Seller2");
    await contract.addSeller("Seller3");
    console.log('Sellers added successfully');
    }

    async function displaySellerNames(contract) {
    // Call getAllSellers function in displaySellerNames function
    const [sellerAddresses, sellerNames] = await contract.getAllSellers();
    console.log('Retrieved seller addresses:', sellerAddresses);
    console.log('Retrieved seller names:', sellerNames);

    console.log('Displaying seller names:');
    for (let i = 0; i < sellerNames.length; i++) {
        console.log(`Seller ${i + 1}: ${sellerNames[i]}`);
    }
   
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
