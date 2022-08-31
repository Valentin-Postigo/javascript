let select = document.getElementById("selected")
let input1 =document.getElementById("input1")


let value = select.options[select.selectedIndex].value;
console.log(value)

if(value=="dolar"){
        
}

var myHeaders = new Headers();
myHeaders.append("apikey", "UFvJuY5OlvXMZu02xTtmKeaABVHj72cH");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

localStorage.setItem("dolar", 295,00)
localStorage.setItem("euro", 315,00)
localStorage.setItem("real", 26,47)

