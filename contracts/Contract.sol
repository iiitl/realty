//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    );
}
contract Contract {
    address public nftaddress;
    address payable public seller;
    mapping(uint256 => address) public buyer;
    mapping(uint256 => uint256) public purchasePrice;
    mapping (uint256 => bool) public isListed;
    uint256 public index = 0;
    constructor(address _nftaddress, address payable _seller) {
        nftaddress = _nftaddress;
        seller = _seller;
    }
    struct adds{
        string memory city;
        string memory country;
        string memory addline;
    }
    struct Property {
       string memory name;
       string memory email;
       string memory phoneno;
       adds adds;
       string memory proptype;
       string memory amenities;
       uint256 sqfoot;
       uint256 bedno;
       string memory img;
       string memory descp;
    }

    
    mapping(uint256 => Property) public  metadata;
    modifier OnlySeller(){
        require(msg.sender == seller,"Only seller can use this method");
        _;
    }

    modifier onlyBuyer(uint256 _nftID){
        require(msg.sender == buyer[_nftID],"Only buyer can use this method");
        _;
    }
    
    function list1(
        uint256 _nftID, 
       string  _amenities,
       uint256 _sqfoot,
       uint256 _bedno,
       string  _img,
       string _descp,
       uint256 _purchasePrice,
       uint256 _tokenID)public {
        IERC721(nftaddress).transferFrom(seller, address(this), _tokenID);
        purchasePrice[_nftID] = _purchasePrice;
        isListed[_nftID] = true;
        metadata[_nftID].amenities = _amenities;
        metadata[_nftID].sqfoot = _sqfoot;
        metadata[_nftID].bedno = _bedno; 
        metadata[_nftID].img = _img;
        metadata[_nftID].descp = _descp;          
        index+=1;   
    }
    
    function list2(
        uint256 _nftID, 
        string memory _city,
        string memory _country,
        string memory _addline
       
       )public {
      
        
        metadata[_nftID].adds.city = _city;
        metadata[_nftID].adds.country = _country;  
        metadata[_nftID].adds.addline = _addline;
       }
    function list3(
        uint256 _nftID, 
        string  memory _name,
        string memory _email,
       string memory _proptype
       )public {
         
        metadata[_nftID].name = _name;
        metadata[_nftID].email = _email;
        
        metadata[_nftID].proptype = _proptype;
           
    }
    function declareBuyer(uint256 _nftID, address _buyer) public {
        buyer[_nftID] = _buyer;
    }
    receive() external payable {}
    

    function bought(uint256 _nftID,uint256 _tokenID) public onlyBuyer(_nftID) {
      require(msg.value == purchasePrice[_nftID]);
     (bool success, ) = (seller).call{value: address(this).balance}("");
     isListed[_nftID] = false;
     IERC721(nftaddress).transferFrom(address(this), buyer[_nftID], _tokenID);
    }


    function getBalance() public view returns(uint256) {
        return address(this).balance;
    }
    
    function meta1(uint256 _nftID) private view returns(string memory,uint256,uint256,string memory,string memory) {
        return (
        metadata[_nftID].amenities,
        metadata[_nftID].sqfoot,
        metadata[_nftID].bedno, 
        metadata[_nftID].img,
        metadata[_nftID].descp);
    }
    function meta2(uint256 _nftID) private view returns(string memory,string memory,string memory) {
        return (metadata[_nftID].adds.city,metadata[_nftID].adds.country,metadata[_nftID].adds.addline);
    }
    function meta3(uint256 _nftID) private view returns(string memory,string memory,string memory) {
        return (metadata[_nftID].name,
        metadata[_nftID].email,
        metadata[_nftID].proptype
        );
    }
    function pr(uint256 _nftID) public view returns(uint256){
        return purchasePrice[_nftID];
    }
    function store() public view returns(uint256){
        return index;
    }
    function listed(uint256 _nftID) public view returns(bool){
        return isListed[_nftID];
    }
    function cancelSale(uint256 _nftID) public {
        require(msg.sender == seller || msg.sender == buyer[_nftID],"Only seller or buyer can use this method");
        require(isListed[_nftID],"Property is not listed for sale");
       bool transferSuccess = IERC721(nftaddress).transferFrom(address(this), seller, _nftID);
    require(transferSuccess, "NFT transfer failed");
    
    isListed[_nftID] = false;

    }

    function retprice (uint256 _nftID) public view returns (uint256) {
        return purchasePrice[_nftID];
    }
}
