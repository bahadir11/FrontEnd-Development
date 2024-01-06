// const increments = document.querySelectorAll(".increment")

// increments.forEach((increment) =>{
//     const number = increment.innerHTML
//     increment.innerHTML = "0";
//     for (let index = 0; index < number; index++) {
        
        
         
//         setTimeout(() => {
//             increment.innerHTML = index
//         }, 100);
        
//     }
    
//     console.log(number);
// })
const counters = document.querySelectorAll(".increment")

counters.forEach(counter => {
    counter.innerText = "0"

    const updateCounter = () =>{
        const target = +counter.getAttribute("data-target")
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment) }`
            setTimeout(updateCounter,1)
        }
    }
    updateCounter();
})