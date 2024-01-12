const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
    "mfuck you my nigga",
    "la liga a",
    "no laligaaa",
    "message 4",
    "message 5",
    "message 6",
    "message nigga",
    "message 7"
]
const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "orange",
    "purple",
    "brown"
]
function createToast(type) { 
    var div =document.createElement("div")
    div.classList.add("toast")
    div.style.color = `${colors[type]}`
    div.innerHTML = `${messages[type]}`
    document.getElementById("toasts").appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 3000);
 }

 button.addEventListener("click", () => {
    const randomNum = parseInt(Math.ceil(Math.random() * 8) - 1 )
    
    createToast(randomNum)
 })