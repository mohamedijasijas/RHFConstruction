// const headerTop = document.querySelector(".header__top");
// const headerAction = () => {
//     this.scrollY >= 10 ? headerTop.classList.add("active")
//                        : headerTop.classList.remove("active")
// };
// window.addEventListener("scroll", headerAction);


const header = document.querySelector("header");
let lastScrollTop = 10;
const headerAction = () =>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        header.classList.add("active");
        dropdownMenu.classList.remove("active");
        dropdownIcon.classList.remove("active");
    }
    else{
        header.classList.remove("active");
    }
    lastScrollTop = scrollTop;
};

window.addEventListener("scroll", headerAction);



// START DROPDOWN
const dropdownBtn = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown__menu");
const dropdownIcon = document.querySelector(".dropdown .bx");

const dropdownMenuAction = () =>{
    dropdownMenu.classList.toggle("active");
    dropdownIcon.classList.toggle("active");
}
dropdownBtn.addEventListener("click", dropdownMenuAction);

// END DROPDOWN


const galleryImgBox = document.querySelector(".img__box");
const galleryImage = document.querySelectorAll(".img__box img");
const imageViewerBox = document.querySelector(".img__viewer");
const imageViewerImg = document.querySelector(".img__viewer .img__box img");
const imgViewerCloseBtn = document.getElementById("img-closeBtn")

console.log(imageViewerImg);

const showImage = (v)=>{
    imageViewerImg.src = v;
    imageViewerBox.classList.add("active");
} 
const imgViewerClose = ()=>{
    imageViewerBox.classList.remove("active");
}
// galleryImgBox.addEventListener("click", showImage);
imgViewerCloseBtn.addEventListener('click', imgViewerClose);






// Break Point 991PX
const navToggle = document.getElementById("nav-btn");
const navMenu = document.querySelector(".nav__menu");
const navCloseBtn = document.getElementById("close-btn");
const overlay = document.querySelector(".overlay");

navToggle.onclick = () =>{
    navMenu.classList.add("active");
    overlay.classList.add("active");
}

const scrollAction = () =>{
    if(window.scrollY){
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
    }
}
window.addEventListener("scroll", scrollAction);


const navCloseAction = () =>{
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    
}

navCloseBtn.addEventListener("click", navCloseAction);

const overlayAction = () =>{
    navMenu.classList.remove("active");
}
overlay.addEventListener("click", overlayAction)




// LOader
const loader = document.querySelector(".loader__container");

window.addEventListener("load", ()=>{
    loader.style.display = "none";
  })
  