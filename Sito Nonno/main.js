const menu = document.querySelector(".menu");

const toggleMenu = document.querySelector(".mobileLinksCont");
const btnScrollTop = document.querySelector(".btnScrollTop");

// Bottone menu
menu.addEventListener("click",() => {
    toggleMenu.classList.toggle("showed");
});


btnScrollTop.addEventListener("click",(e)=>{
    e.preventDefault()
    scrollToTop();
})

// scroll top
window.addEventListener("scroll", ()=>{
    
    if(window.scrollY > 400){
        btnScrollTop.classList.add("active");
    }
    else{
        btnScrollTop.classList.remove("active");
    }
})

const scrollToTop = () => {
    
    const c = window.scrollY;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 20);// x, y
    }
};

