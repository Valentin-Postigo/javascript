let select = document.getElementById("selected")
let input1 =document.getElementById("input1")
console.log(input1)
console.log(select.options)
console.log(select)
for(let i = 0; i<select.options.lenght; i++){
        select.addEventListener("change", ()=>{
                if(value=="dolar"){
                        alert("si")
                }
        })
}
let value = select.options[select.selectedIndex].value;
console.log(typeof(value))

console.log(value)

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

