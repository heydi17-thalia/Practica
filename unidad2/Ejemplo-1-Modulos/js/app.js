import {limpiarHtml,crearHTML} from './funciones.js';


 
const botonInfo = document.querySelector("#btnInfo");



botonInfo.addEventListener("click",()=>{
    limpiarHtml();
    crearHTML(); 
})


