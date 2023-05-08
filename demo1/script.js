const panels = document.querySelectorAll(".panel");
panels.forEach((items) => {
    items.addEventListener("mouseover", () => {
        panels.forEach((items) => {
            items.classList.remove("active")
        })
        items.classList.add("active")
    })
})