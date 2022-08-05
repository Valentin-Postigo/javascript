const title = document.getElementById('title')

const divisas = ['DOLAR HOY: $290.81' , 'EURO HOY: $308.00' ,'PESO URUGUAYO: $3.26', 'PESO CHILENO: $14.69' ,'REAL BRASILEÑO: $4.02']

const header = document.querySelector('header')

let monedas = document.createElement('p')

header.append(monedas)

monedas.innerHTML = divisa[Math.floor(Math.random()*divisas.length)]

let divisa = prompt("Que tipo de cambio de divisa quiere realizar? (peso-dolar ; dolar-peso; peso-euro ; euro-peso ; dolar-euro ; euro-dolar ; )")

let monto

let resultado

if(divisa == "peso-dolar"){
        monto = prompt("Ingrese su monto en pesos")

        resultado = monto * 291.91

        alert(`Su monto es ${resultado} $`)

}else if (divisa == "dolar-peso") {
        monto = prompt("Ingrese su monto en dolares")

        resultado = monto * 132.64

        alert(`Su monto es ${resultado} $ARS`)
}else if (divisa == "peso-euro"){
        monto = prompt("Ingrese su monto en pesos")

        resultado = monto * 298.00

        alert(`Su monto es ${resultado}`)
} else if (divisa == "euro-peso"){
        monto = prompt("Ingrese su monto en euros")

        resultado = monto * 135.88 
}