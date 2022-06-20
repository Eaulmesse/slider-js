const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");



let slider = document.getElementById("slider");
let img = ["./imgs/img1.jpg", "./imgs/img2.jpg", "./imgs/img3.jpg"]

var i = 0;
slider.style.background = `url('${img[i]}')`;


nextBtn.addEventListener("click", ()=> {
    i++;
    slider.style.background = `url('${img[i]}')`;

    if (i > img.length-1) {
        i = 0;
        slider.style.background = `url('${img[i]}')`;
    }
})


previousBtn.addEventListener("click", ()=> {
    i--;
    slider.style.background = `url('${img[i]}')`;
   
    if (i < 0) {
        i = img.length - 1
        slider.style.background = `url('${img[i]}')`;
    }
})