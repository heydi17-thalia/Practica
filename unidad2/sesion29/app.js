import{ restar } from"./funciones.js";

const numero1 = document.getElementById("num1")
const numero2 =document.querySelector("#num2")

const btnSumar = document.querySelector("#sumary")
const btnRestar = document.querySelector("#restar")


btnSumar.addEventListener("click",()=>{
    //   sumar(numero1,numero2);
    console.log(numero1.value);
    
})

btnRestar.addEventListener("click",()=>{
    restar(numero1,numero2);
})