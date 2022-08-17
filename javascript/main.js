const selected = document.querySelectorAll(".selected")
const optionsContainer = document.querySelectorAll(".options-container")

const optionsList = document.querySelectorAll(".option")

selected.forEach(selected => {
        selected.addEventListener("click", () => {
                optionsContainer.forEach(optionsContainer => {
                        optionsContainer.classList.toggle("active")
                })
        })
})

optionsList.forEach( o => {
        o.addEventListener("click", () => {
                selected.innerHTML = o.querySelector("label").innerHTML
                optionsContainer.classList.remove("active")
        })
})

localStorage.setItem("dolar", "$295,00")
localStorage.setItem("euro", "$315,00")
localStorage.setItem("real","$26,47")

