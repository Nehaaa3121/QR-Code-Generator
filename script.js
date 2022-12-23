
// Fetching all the elemnts
const contain = document.querySelector(".container"),
qrInput = contain.querySelector(".box input"),
generatebtn = contain.querySelector(" .box button");
img1=contain.querySelector(".code img");


// qr code genertor
generatebtn.addEventListener("click", ()=>{
    let qrValue = qrInput.value;
    if(!qrValue)return;
    // generating qr code 
    generatebtn.innerText= "Generating QR Code....."

    // fetching qr code api
    
img1.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

// for loading image or qr code
img1.addEventListener("load", () =>{
    contain.classList.add("active");
    
    generatebtn.innerText ="Generate  QR Code";
})
});

// for removing box or qr code generator
qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        contain.classList.remove("active");
    }
})