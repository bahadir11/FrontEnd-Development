const hourEl = document.querySelector(".hour")
const secondEl = document.querySelector(".second")
const minuteEl = document.querySelector(".minute")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggle = document.querySelector(".toggle")


const days = ["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

toggle.addEventListener("click", (e) => {
    const html = document.querySelector("html")
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHtml = "Dark mode"
    }else{
        html.classList.add("dark")
        e.target.innerHtml = "Light mode"
    }
})
setInterval(() => {
    setTime()
}, 1000);


function setTime() { 
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? "PM" : "AM"
    hourEl.style.transform = `
        translate(-50%,-100%) rotate(${30*hoursForClock}deg)
    `
    minuteEl.style.transform = `
        translate(-50%,-100%) rotate(${minutes*6}deg)
    `
    secondEl.style.transform = `
        translate(-50%,-100%) rotate(${seconds*6}deg)
    `
    timeEl.innerHTML = `
    ${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}
    `
    dateEl.innerHTML = `
    ${days[day]}, ${months[month]} <span class="circle">${day}</span>
    `
 }