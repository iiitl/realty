const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": '7112f3b271msh36e3c9c905f726dp1e7e11jsnc2ea975060d8'
    ,
    "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
  },
};


const continue_btn = document.querySelector("#continue_btn");
const personal_info = document.querySelector("#personal_info");
const property_info = document.querySelector("#property_info");
const back_btn = document.querySelector("#back_btn");
const submit_btn = document.querySelector("#submit_btn");
let tokens;
console.log(ethers);var r =0 ; let obj={}; let arr_list1=[]; let arr_list2 =[];let arr_list3 = []; let f = [];let arrp =[];
continue_btn.addEventListener("click", () => {
  personal_info.style.display = "none";
  property_info.style.display = "block";
});

back_btn.addEventListener("click", () => {
  personal_info.style.display = "block";
  property_info.style.display = "none";
});



const conadd = "0x6b8bf66290cC88e594FBF8e8cb7E75D5e26F3673";

const cabi = [

  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_nftaddress",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_seller",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_tokenID",
        "type": "uint256"
      }
    ],
    "name": "bought",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "buyer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "cancelSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_buyer",
        "type": "address"
      }
    ],
    "name": "declareBuyer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "index",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "isListed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_amenities",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_sqfoot",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_bedno",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_img",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_descp",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_purchasePrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_tokenID",
        "type": "uint256"
      }
    ],
    "name": "list1",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_city",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_country",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_addline",
        "type": "string"
      }
    ],
    "name": "list2",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_proptype",
        "type": "string"
      }
    ],
    "name": "list3",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "listed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "meta1",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "meta2",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "meta3",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "metadata",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "phoneno",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "city",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "country",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "addline",
            "type": "string"
          }
        ],
        "internalType": "struct Contract.adds",
        "name": "adds",
        "type": "tuple"
      },
      {
        "internalType": "string",
        "name": "proptype",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "amenities",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "sqfoot",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "bedno",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "img",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "descp",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nftaddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "pr",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "purchasePrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "retprice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "seller",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "store",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];
const rabi =[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "tokenURI",
        "type": "string"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const reladd = "0x25AAC613049F56779064905749F18A0423447115";
    
  let seller;
let provider,signer,con,realEstate;
   async function sure(){
     provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    seller = signer;
    con = new ethers.Contract(conadd,cabi,signer);
    realEstate = new ethers.Contract(reladd, rabi, seller);
    console.log(signer);
    
    console.log(con);
   
   
    //fetching data
    let index = await con.store();
    console.log(index);
    for(var i=0;i<index;i++){
    let mail = await con.meta1(i+1);
    arr_list1.push(mail);
    mail = await con.meta2(i+1);
    arr_list2.push(mail);
    mail = await con.meta3(i+1);
    f.push(mail);
    arr_list3.push(f);
    }
    console.log(arr_list1);
    console.log(arr_list2);
    console.log(arr_list3);
    
    for(var i=0;i<index;i++){
    let price = await con.pr(i);
    arrp.push(price);
    }
    console.log(arrp);
    tokens = (n) => {
      return ethers.parseUnits(n.toString())
    }
  }
  // sure();
//using buy 
async function hello (r) {
    let transaction = await con.declareBuyer(r,signer);
    await signer.sendTransaction({to: conadd,value: tokens(0.03),gasLimit: 200});
    let b = await con.getBalance();
    console.log(b);
    let result = await con.connect(signer).bought(r,await realEstate.totalSupply(),{value: tokens(0.01)});
    console.log(result);
     b = await con.getBalance();
    console.log(b);
    for(var i=0;i<index;i++){
      let mail = await con.listed(i+1);
      arr1.push(mail);
      }
      console.log(arr1);
}
//using cancel sale

// let bubutton=document.querySelector("#sale-btn");
// bubutton.addEventListener("click",async()=>{
//   let transaction = await con.cancelSale(1); 
// })

const arr_image = ["./images/img1.jpeg", "./images/img2.jpeg", "./images/img3.jpeg", "./images/img4.jpeg", "./images/img5.jpeg", "./images/img6.jpeg", "./images/img7.jpg", "./images/img8.jpeg", "./images/img9.jpeg", "./images/img10.jpeg", "./images/img11.jpeg", "./images/img12.jpeg"];
    console.log(arr_image);
    let a = 0;
const container2 = document.querySelector("#container2");
submit_btn.addEventListener("click", async (e) => {
  e.preventDefault();
  container2.innerHTML = "";
  let check = 0;
 
  await sure();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const ph_number = document.querySelector("#ph_number").value;
  const city = document.querySelector("#city").value;
  const min_price = Number(document.querySelector("#min_price").value);
  const max_price = Number(document.querySelector("#max_price").value);
  const room_count = Number(document.querySelector("#bedroom_count").value);
  
  
  console.log(name);
  console.log(email);
  console.log(ph_number);
  console.log(city);
  console.log(min_price);
  console.log(max_price);
  console.log(room_count);
  console.log(arrp.length);
  console.log(arrp);
console.log(arrp[0] == '0');

 for(let i=0; i<arrp.length; i++){
  //start
  if(arrp[i]<= max_price && arrp[i]>= min_price && room_count == arr_list1[i][2] && city == arr_list2[i][0]){
    check = 1;
    a++;
    //here we are creating a div that will show the info of a single house
  const house = document.createElement("div");
  house.classList.add("house");
  //code for initial visible part
  const visible =  document.createElement("div");
  visible.classList.add("visible");
 const image_div = document.createElement("div");
 image_div.classList.add("image_div");
 const image = document.createElement("img");
 image.classList.add("image");
 image.setAttribute("src", arr_image[a]);
image_div.appendChild(image);
 visible.appendChild(image_div);
  //here is the code for swiper
  /*
  const swiper = document.createElement("div");
  swiper.classList.add("swiper");
  swiper.classList.add("mySwiper");
  const swiper_wrapper = document.createElement("div");
  swiper_wrapper.classList.add("swiper-wrapper");
  for (let j = a; j < a+2; j++) {
    console.log(arr_image[j]);
    let img = document.createElement("img");
    img.classList.add("swiper-slide");
    img.setAttribute("src", arr_image[j]);
    swiper_wrapper.appendChild(img);
  }
  swiper.appendChild(swiper_wrapper);
  const swiper_next_btn = document.createElement("div");
  swiper_next_btn.classList.add("swiper-button-next");
  const swiper_prev_btn = document.createElement("div");
  swiper_prev_btn.classList.add("swiper-button-prev");
  swiper.appendChild(swiper_next_btn);
  swiper.appendChild(swiper_prev_btn);
  var swip = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  visible.appendChild(swiper);*/
  //visible content(heading) 
  const visible_content = document.createElement("div");
  visible_content.classList.add("visible_content");
  const visible_content_heading = document.createElement("h1");
  visible_content_heading.classList.add("visible_content_heading");
  visible_content_heading.innerHTML = ` ${arr_list1[i][2]}-BHK apartment is available in ${arr_list2[i][0]}`;
  visible_content.appendChild(visible_content_heading);
  //div for all the other details
  const div_info = document.createElement("div");
  div_info.classList.add("div_info");
  //pricing
  const div_info_price = document.createElement("div");
  div_info_price.classList.add("div_info_price");
  const div_info_price_p = document.createElement("p");
  div_info_price_p.innerHTML = "price";
  const div_info_price_h3 = document.createElement("h3");
  div_info_price_h3.innerHTML ="$" + arrp[i];
  div_info_price.appendChild(div_info_price_p);
  div_info_price.appendChild(div_info_price_h3);
  div_info.appendChild(div_info_price);
    //bedroom count
    const div_info_bedroom = document.createElement("div");
    div_info_bedroom.classList.add("div_info_bedroom");
    const div_info_bedroom_p = document.createElement("p");
    div_info_bedroom_p.innerHTML = "bedroom count";
    const div_info_bedroom_h3 = document.createElement("h3");
    div_info_bedroom_h3.innerHTML = arr_list1[i][2] + " BHK";
    div_info_bedroom.appendChild(div_info_bedroom_p);
    div_info_bedroom.appendChild(div_info_bedroom_h3);
    div_info.appendChild(div_info_bedroom);
    //amenities
    const div_info_amenities = document.createElement("div");
    div_info_amenities.classList.add("div_info_amenities");
    const div_info_amenities_p = document.createElement("p");
    div_info_amenities_p.innerHTML = "amenities";
    const div_info_amenities_h3 = document.createElement("h3");
    div_info_amenities_h3.innerHTML = arr_list1[0][0];
    div_info_amenities.appendChild(div_info_amenities_p);
    div_info_amenities.appendChild(div_info_amenities_h3);
    div_info.appendChild(div_info_amenities);
    //location
    const div_info_city = document.createElement("div");
    div_info_city.classList.add("div_info_city");
    const div_info_city_p = document.createElement("p");
    div_info_city_p.innerHTML = "city";
    const div_info_city_h3 = document.createElement("h3");
    div_info_city_h3.innerHTML = arr_list2[i][0];
    div_info_city.appendChild(div_info_city_p);
    div_info_city.appendChild(div_info_city_h3);
    div_info.appendChild(div_info_city);
    visible_content.appendChild(div_info);
    const show_more_btn = document.createElement("button");
    show_more_btn.classList.add("show_more_btn");
    show_more_btn.innerHTML = "Show More";
    visible_content.appendChild(show_more_btn);
 visible.appendChild(visible_content);
  house.appendChild(visible);
  //here the initially hidden portion starts
  const hidden = document.createElement("div");
    hidden.classList.add("hidden");
    const hidden_content = document.createElement("div");
    hidden_content.classList.add("hidden_content");
    hidden_content.innerHTML = `"` + arr_list1[i][4] + `"`;
    hidden.appendChild(hidden_content);
    const map_add = document.createElement("div");
    map_add.classList.add("map_add");
    //HERE COMES THE MAP
    async function initMap(latitude, longitude) {
      // The location of Uluru
      const position = { lat: latitude, lng: longitude };
      // Request needed libraries.
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

      // The map, centered at Uluru
      let map = new Map(map_add, {
        zoom: 15,
        center: position,
        mapId: "9585128d1e56df8e",
      });

      // The marker, positioned at Uluru
      const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Uluru",
        animation: google.maps.Animation.BOUNCE,
      });
      marker.addListener("click", toggleBounce);
    }
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
    const address = arr_list2[i][2];
    const address_arr = address.split(" ");
    console.log(address_arr);
    const address_str = address_arr.join("%20");
    console.log(address_str);
    fetch(
      `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${address_str}&language=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response.results[0].location.lat);
        console.log(response.results[0].location.lng);
        initMap(
          response.results[0].location.lat,
          response.results[0].location.lng
        );
      })
      .catch((err) => console.error(err));
    //HERE MAP ENDS
    hidden.appendChild(map_add);
    //adding a div that will be wrapping 3 btn 
    const div_buttons = document.createElement("div");
    div_buttons.classList.add("div_buttons");
    //here is show more btn
    const show_less_btn = document.createElement("button");
    show_less_btn.classList.add("show_less_btn");
    show_less_btn.innerHTML = "Show Less";
    div_buttons.appendChild(show_less_btn);
    //buy button
    const buy_btn = document.createElement("button");
    buy_btn.classList.add("buy_btn");
    buy_btn.innerHTML = "Buy Now";
    buy_btn.setAttribute("data-niftbuy", i);
    console.log(buy_btn);
    console.log(buy_btn.dataset.niftbuy);
    div_buttons.appendChild(buy_btn);
    //cancel btn
    const cancel_btn = document.createElement("button");
    cancel_btn.classList.add("cancel_btn");
    cancel_btn.innerHTML = "Cancel Deal";
    //setting the data property
    cancel_btn.setAttribute("data-nift", i);
    console.log(cancel_btn);
    console.log(cancel_btn.dataset.nift);
    div_buttons.appendChild(cancel_btn);

    hidden.appendChild(div_buttons);
    house.appendChild(hidden);
  container2.appendChild(house);
//end 
    } 
}
 if(check == 0){
  alert("Sorry for delay, but currently we could not find any relevant options for you, TRY altering the price range")
 }
 
});
container2.addEventListener("click", (e)=>{
  if (e.target.className == "buy_btn") {
    let niftbuy = e.target.dataset.niftbuy;
    e.target.style.backgroundColor = "green";
    console.log(niftbuy);
    hello(Number(niftbuy));
  }
})

container2.addEventListener("click", async (e)=>{
  if (e.target.className == "cancel_btn") {
    let nift = e.target.dataset.nift;
    e.target.style.backgroundColor = "red";
    let transaction = await con.cancelSale(nift); 
    
}
})

const show_more = document.querySelector(".show_more_btn");
container2.addEventListener("click", (e) => {
  if (e.target.className == "show_more_btn") {
    const hidden = e.target.parentElement.parentElement.nextSibling;
    console.log(e.target.parentElement.parentElement.nextSibling);
    console.log(hidden);
    hidden.style.display = "flex";
    e.target.style.display = "none";
  }
});
container2.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.parentElement);
  console.log(e.target.parentElement.parentElement);
  console.log(e.target.parentElement.parentElement.previousSibling);
 

  
  if (e.target.className == "show_less_btn") {
    const show_more =
    e.target.parentElement.parentElement.previousSibling.querySelector(".show_more_btn");
  console.log(
   show_more
  );
    const hidden = e.target.parentElement.parentElement;
    hidden.style.display = "none";
    show_more.style.display = "block";
  }
});


