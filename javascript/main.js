let calculo = prompt("¿Que tipo de calculo quieres hacer?")

if (calculo=="suma") {

let comienzo

let primerNumero

let segundoNumero

let suma

        while (comienzo != "EXIT") {
                
                 comienzo = prompt("Escriba un numero en la proxima casilla, si quiere salir escriba EXIT")

                primerNumero = parseInt(prompt("Ingrese un numero"))

                segundoNumero = parseInt(prompt("Ingrese otro numero"))

                suma = primerNumero + segundoNumero

                resultado = alert(`Su resultado es ${suma}`)
                                
        }
}else if(calculo=="resta"){

let comienzo

let primerNumero

let segundoNumero

        while(comienzo != "EXIT"){
                comienzo = prompt("Escriba un numero en la proxima casilla, si quiere salir escriba EXIT")
                primerNumero = parseInt(prompt("Ingrese un numero"))

                segundoNumero = parseInt(prompt("Ingrese otro numero"))

                resta = primerNumero - segundoNumero

                resultado = alert(`Su resultado es ${resta}`)
        }
}else if(calculo=="multiplicacion"){
let comienzo

let primerNumero

let segundoNumero

        while(comienzo != "EXIT"){
                comienzo = prompt("Escriba un numero en la proxima casilla, si quiere salir escriba EXIT")
                primerNumero = parseInt(prompt("Ingrese un numero"))

                segundoNumero = parseInt(prompt("Ingrese otro numero"))

                multiplicacion = primerNumero * segundoNumero

                resultado = alert(`Su resultado es ${multiplicacion}`)
        }
}else if(calculo=="division"){
let comienzo

let primerNumero

let segundoNumero

        while(comienzo != "EXIT"){
                comienzo = prompt("Escriba un numero en la proxima casilla, si quiere salir escriba EXIT")
                primerNumero = parseInt(prompt("Ingrese un numero"))

                segundoNumero = parseInt(prompt("Ingrese otro numero"))

                division = primerNumero / segundoNumero

                resultado = alert(`Su resultado es ${division}`)
        }
}else{
        alert("Porfavor ingrese solo (suma, resta, multiplicacion o division)")
        calculo = prompt("¿Que tipo de calculo quieres hacer?")
}