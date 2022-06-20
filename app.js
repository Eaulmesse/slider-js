const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");



let slider = document.getElementById("slider");
let img = ["./imgs/img1.jpg", "./imgs/img2.jpg", "./imgs/img3.jpg"]

var i = 0;
slider.style.background = `url('${img[i]}')`;


nextBtn.addEventListener("click", ()=> {
    

    if (i < img.length-1) {
        i++;
        slider.style.background = `url('${img[i]}')`;
    }

    console.log(i);
    console.log( slider.style.background);
})


previousBtn.addEventListener("click", ()=> {
    
   
    if (i > 0) {
        i--;
        slider.style.background = `url('${img[i]}')`;
    }


    console.log(i); 
    console.log( slider.style.background);
})