const panels = document.querySelectorAll(".panel");

panels.forEach(paneel => {
    paneel.addEventListener("click", () => {
        removeActiveClasses();
        paneel.classList.add("active");
    })
})

function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove("active");
    })
}