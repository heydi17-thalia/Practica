const btnMostrarModal = document.querySelector("#btnMostrar");
const btnCerrarModal = document.querySelector("#btnCerrar");


btnMostrarModal.addEventListener("click",()=>{
      document.querySelector(".modal").classList.add("mostrar-modal")
});

btnCerrarModal.addEventListener("click",()=>{
       document.querySelector(".modal").classList.remove("mostrar-modal");
});





