const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Contract', async () => {
    let buyer,seller,realEstate,contract,result;

    beforeEach(async () => {
        //Setup Account
        [buyer,seller] = await ethers.getSigners();
        console.log(buyer);
        
        //Deploy
        const RealEstate =await ethers.getContractFactory('RealEstate');
        realEstate = await RealEstate.deploy();

        //mint 
        let transaction = await realEstate.connect(seller).mint("https://ipfs.io/ipfs/QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A/1.json");
        await transaction.wait();
        console.log(await realEstate.totalSupply());
        //Deploy contract
        const Contract = await ethers.getContractFactory('Contract');
        contract = await Contract.deploy(await realEstate.address,realEstate.ownerOf(await realEstate.totalSupply()));

        //Approve
        transaction = await realEstate.connect(seller).approve(contract.address,await realEstate.totalSupply());
        //list property
        transaction = await contract.connect(seller).list(await realEstate.totalSupply(),tokens(10),"hello",'no',67);
        await transaction.wait();
        //buyer
        transaction = await contract.declareBuyer(await realEstate.totalSupply(),buyer.address);
        await transaction.wait();
    })
     
    describe("Deployment", () => {

        it("returns seller address", async() => {
            result = await contract.seller();
            expect(result).to.be.equal(seller.address);
        })
        
        it("returns nft address", async() => {
            result = await contract.nftaddress();
            expect(result).to.be.equal(realEstate.address);
        })

        it("get Balance",async() => {
            result = await contract.connect(buyer).bought(realEstate.totalSupply(),{value: tokens(10)});
            result = await contract.getBalance();
            expect(result).to.be.equal(0);
        })
        it("Ownership change",async() => {
            result = await contract.connect(buyer).bought(realEstate.totalSupply(),{value: tokens(10)});
            expect(await realEstate.ownerOf(realEstate.totalSupply())).to.be.equal(buyer.address);
        })
    })

    
    
})