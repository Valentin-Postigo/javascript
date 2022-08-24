const selected1 = document.getElementById("selected1")
const optionsContainer1 = document.getElementById("options-container1")

const optionsList = document.querySelectorAll(".option")

// for(let i = 0; i<selected.length; i++){
//         selected[i].addEventListener("click", () => {
//                 for(let i = 0; i<optionsContainer.length; i++){
//                         optionsContainer[i].classList.toggle("active")
//                 }
//         })
// }

selected1.addEventListener("click", () => {
                
                optionsContainer1.classList.toggle("active")
        
                
})

optionsList.forEach( o => {
        o.addEventListener("click", () => {
                selected1.innerHTML = o.querySelector("label").innerHTML
                optionsContainer1.classList.remove("active")
        })
})

const selected2 = document.getElementById("selected2")
const optionsContainer2 = document.getElementById("options-container2")
const optionsList2 = document.querySelectorAll("#option2")

console.log(optionsContainer2)
selected2.addEventListener("click", () => {

        optionsContainer2.classList.toggle("active")

})

optionsList2.forEach( o => {
        o.addEventListener("click", () => {
                selected2.innerHTML = o.querySelector("label").innerHTML
                optionsContainer2.classList.remove("active")
        })
})


const button = document.getElementsByClassName("button")



button.addEventListener("click", (e) => {
                
        swal({
                title: "Calculo realizado",
                text: "Su valor es: x",
                icon: "success",
              });

        
})

localStorage.setItem("dolar", 295,00)
localStorage.setItem("euro", 315,00)
localStorage.setItem("real", 26,47)

