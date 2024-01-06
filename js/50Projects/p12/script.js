const cards = document.querySelectorAll(".card")
const openBtns = document.querySelectorAll(".chevron")
const closeBtns = document.querySelectorAll(".xmark")

openBtns.forEach(openBtn => {
    openBtn.addEventListener("click", () =>{
        console.log("ml")
        openBtn.parentElement.classList.toggle("active")
    })
})

closeBtns.forEach(closeBtn => {
    
    closeBtn.addEventListener("click", () =>{
        closeBtn.parentElement.parentElement.classList.toggle("active")
    })
})
