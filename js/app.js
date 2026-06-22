console.log('JS EXECUTED')
document.addEventListener("DOMContentLoaded",()=> {
    const toggleButton=document.querySelector(".navbar__toogle-btn");
    const mobileMenu=document.querySelector(".navbar__mobile-menu");

    console.log(toggleButton);
    console.log(mobileMenu);

    const toggleMenu = () =>{
        mobileMenu.style.display =
        mobileMenu.style.display === "none" || mobileMenu.style.display ===""
        ? "flex"
        : "none";
    }
    const hideMenuResize = () => {
        mobileMenu.style.display = "none"
    }
    toggleButton.addEventListener("click",toggleMenu);
    window.addEventListener("resize",hideMenuResize);
    window.addEventListener("load",hideMenuResize);
});
const isMobile = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;

if (isMobile) {
    console.log("User is likely on a mobile device or tablet.");
}