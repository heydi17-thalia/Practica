

   
    const mensajeSecreto = document.querySelector("#inputMensaje");
    const claveSecreta = document.querySelector("#inputClave");
 
    const btnCifrar = document.querySelector("#cifrar");
    const btnDescifrar = document.querySelector("#descifrar");
 
 
    btnCifrar.addEventListener("click",()=>{
         
         
         let abecedarioMay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         let abecedarioMin = "abcdefghijklmnopqrstuvwxyz";
 
         let texto = mensajeSecreto.value;
         let desplazamiento = claveSecreta.value;
 
         let resultado = "";
 
         desplazamiento = (desplazamiento%26+26)%26;
 
         for(let i=0; i<texto.length;i++){
             
             if(abecedarioMay.indexOf(texto[i])!==-1){
                 let posicion = (abecedarioMay.indexOf(texto[i])+desplazamiento)%26;
                 resultado += abecedarioMay[posicion];
             }
             else if(abecedarioMin.indexOf(texto[i])!==-1){
                 let posicion = (abecedarioMin.indexOf(texto[i])+desplazamiento)%26;
                 resultado += abecedarioMin[posicion];
             }
             else{
                  resultado += texto[i];
             }   
 
         }
          
         alert(resultado);
 
    });
 
    btnDescifrar.addEventListener("click",()=>{
 
        
     let abecedarioMay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let abecedarioMin = "abcdefghijklmnopqrstuvwxyz";
 
     let texto = mensajeSecreto.value;
     let desplazamiento = claveSecreta.value;
 
     let resultado = "";
 
     desplazamiento = (desplazamiento%26-26)%26;
 
     for(let i=0; i<texto.length;i++){
         
         if(abecedarioMay.indexOf(texto[i])!==-1){
             let posicion = (abecedarioMay.indexOf(texto[i])-desplazamiento)%26;
             resultado += abecedarioMay[posicion];
         }
         else if(abecedarioMin.indexOf(texto[i])!==-1){
             let posicion = (abecedarioMin.indexOf(texto[i])-desplazamiento)%26;
             resultado += abecedarioMin[posicion];
         }
         else{
              resultado += texto[i];
         }   
 
     }
      
     alert(resultado);
    })
 