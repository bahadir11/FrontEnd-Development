const items = document.querySelectorAll(".items")
const contents = document.querySelectorAll(".content")
const btn1 = document.querySelector(".item1")
const btn2 = document.querySelector(".item2")
const btn3 = document.querySelector(".item3")
const btn4 = document.querySelector(".item4")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")


function clearItems() { 
    items.forEach((item) => {
        
        item.classList.remove("active")
        
    })
 }
 function clearImages() { 
    contents.forEach((content) => {
        
        content.classList.remove("show")
        
    })
 }

btn1.addEventListener("click", () => {
    if (btn1.classList.contains("active")) {
        console.log("n");
    }else{

        clearItems()
        clearImages()
        btn1.classList.add("active")
        img1.classList.add("show")


        

    }
})
btn2.addEventListener("click", () => {
    if (btn2.classList.contains("active")) {
        console.log("n");
    }else{

        clearItems()
        clearImages()
        btn2.classList.add("active")
        img2.classList.add("show")

    }
})
btn3.addEventListener("click", () => {
    if (btn3.classList.contains("active")) {
        console.log("n");
    }else{

        clearItems()
        clearImages()
        btn3.classList.add("active")
        img3.classList.add("show")

    }
})
btn4.addEventListener("click", () => {
    if (btn4.classList.contains("active")) {
        console.log("n");
    }else{
        clearItems()
        clearImages()
        btn4.classList.add("active")
        img4.classList.add("show")

    }
})