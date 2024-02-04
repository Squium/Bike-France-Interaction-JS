const menuDeroulant = document.querySelector(".Menu-deroulant")
const navLinks = document.querySelector(".nav_links")

menuDeroulant.addEventListener('click',()=>{
    navLinks.classList.toggle('menu-mobile')
})

