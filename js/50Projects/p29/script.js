const carDiv = document.querySelector(".loveMe")
const times = document.getElementById("times")


let index = 0;

carDiv.addEventListener("dblclick", () => {
    index += 1;
    var rect = carDiv.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top

    times.innerHTML = index
    createHeart(x,y)

})

const createHeart = (x,y) => {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")
    heart.style.top = `${y}px`
    heart.style.left = `${x}px`
    console.log("nigga");
    carDiv.appendChild(heart)
    setTimeout(() => {
        carDiv.removeChild(heart)
    }, 1000);

}