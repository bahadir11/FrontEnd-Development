const openBtn = document.getElementById("open-btn")
const nav = document.querySelector(".nav")
const navbar = document.querySelector(".navbar")
const navBtn = document.querySelector(".nav-btn")
const blue = document.querySelector(".blue")
const black = document.querySelector(".black")
const red = document.querySelector(".red")

openBtn.addEventListener("click", () => {
    removeActive()

})
navBtn.addEventListener("click", () => {
    addActive()
})

function removeActive() {
   nav.classList.remove("active")
   blue.classList.remove("active")
   const redTimeout = setTimeout(removeRed(), 5000); 
   clearT(redTimeout)  
}
function removeRed(){

    red.classList.remove("active")
    const blackTimeout = setTimeout(removeBlack(), 5000); 
    clearT(blackTimeout)  

}
function removeBlack(){

    black.classList.remove("active")
    const navbarTimeout = setTimeout(removeNavbar(), 5000); 
    clearT(navbarTimeout)  

}
function removeNavbar(){

    navbar.classList.remove("active")
     

}
function addActive() {
    nav.classList.add("active")
    navbar.classList.add("active")
    red.classList.add("active")
    blue.classList.add("active")
    black.classList.add("active")
    
    
    
}
function clearT(timeout) { 
    clearTimeout(timeout)
 }
