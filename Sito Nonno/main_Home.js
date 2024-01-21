const imgCont = document.querySelectorAll(".imgCont__img");
const rightBtn = document.querySelector(".img_Cont__btn--right");
const leftBtn = document.querySelector(".img_Cont__btn--left");

// Immagini
let activeImg = 0;

rightBtn.addEventListener("click",() =>{
    
    activeImg++;

    if(activeImg > imgCont.length - 1){
        activeImg = 0;
    }
    SetActiveImg();

})
leftBtn.addEventListener("click",()=>{
    activeImg--;

    if(activeImg < 0 ){
        activeImg = imgCont.length -1;
    }
    SetActiveImg();
})


function SetActiveImg(){
    imgCont.forEach((img) => img.classList.remove("active"));

    imgCont[activeImg].classList.add("active");
}


  
   

