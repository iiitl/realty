const arrow_btn_bottom = document.querySelector("#arrow_btn_bottom");
const navbar = document.querySelector("#navbar");
const arrow = document.querySelector("#arrow_btn_bottom img");
const connect_btn_img = document.querySelector("#connect_btn img");
const connect_btn = document.querySelector("#connect_btn");
const heading = document.querySelector("#heading");
const spans = heading.querySelectorAll("#heading span");
console.log(ethers);
connect_btn.addEventListener("mouseover", () => {
  connect_btn_img.setAttribute("src", "./image/asset 10.svg");
  connect_btn.style.backgroundColor = "white";
});
connect_btn.addEventListener("mouseout", () => {
  connect_btn_img.setAttribute("src", "./image/asset 9.svg");
  connect_btn.style.backgroundColor = "#fed88e";
});

//navbar
window.addEventListener("scroll", () => {
  if (window.scrollY >= 60) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

gsap.to(navbar, { duration: 0.2, opacity: 1 });
gsap.to("#bitcoin", { duration: 0.5, opacity: 1 });
gsap.to("#correct", { duration: 0.5, opacity: 1 });

const tl = gsap.timeline();

tl.from(".line span", 1.8, {
  y: 100,
  ease: "power4.out",
  delay: 1,
  skewY: 7,
  stagger: {
    amount: 0.3,
  },
});

gsap.from("#sub-heading", { duration: 0.6, opacity: 0, delay: 1.9 });
gsap.to("#sub-heading", { duration: 0.6, opacity: 1, delay: 1.9 });

async function hello(){
  
  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  console.log(signer);
  return signer;
  
  }
  connect_btn.addEventListener("click", async ()=>{
    console.log(hello);
   const signer = await hello();
   console.log(signer);
   console.log(Object.keys(signer).length != 0);
   if(Object.keys(signer).length != 0){
    console.log("connected");
    const btn_div = document.createElement("div");
    btn_div.classList.add("btn_div");
    const buyer_btn = document.createElement("a");
    buyer_btn.classList.add("buyer_btn");
    buyer_btn.innerHTML = "Buyer";
    buyer_btn.href = "./buyer/index.html"
    btn_div.appendChild(buyer_btn);
    const seller_btn = document.createElement("a");
    seller_btn.classList.add("seller_btn");
    seller_btn.innerHTML = "Seller";
    seller_btn.href = "./seller/index.html"
    btn_div.appendChild(seller_btn);
    connect_btn.style.display="none";
    main_container.appendChild(btn_div);
    
  }
  })