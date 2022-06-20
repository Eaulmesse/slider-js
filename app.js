const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

let slider = document.getElementById("slider");
let img = ["./imgs/img1.jpg", "./imgs/img2.jpg", "./imgs/img3.jpg"]

previousBtn.addEventListener("click", ()=> {
    slider.style.background = `url('${img.value = }')`;
    
})