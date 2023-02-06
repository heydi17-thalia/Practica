class Cola{
    constructor(){
        this.cola = [];
    }

    //METODO PARA AGREGAR ELEMENTO A LA COLA

    encolar(elemento){
        this.cola.push(elemento);
        return this.cola;
    }

    //METODO PARA QUITAR UN ELEMENTO DE LA COLA

    desencolar(){
        this.cola.shift();
        return this.cola;
    }

    //METODO PARA VER EL PRIMER ELEMENTO EN LA COLA

    peek(){
        return this.cola[0];
    }

    //METODO PARA VER LA CANTIDAD DE ELEMENTOS EN LA COLA

    size(){
        return this.cola.length;
    }

    //SABER SI LA COLA ESTA VACIA

    isEmpty(){
        return this.cola.length === 0;
    }

    //VER ELEMENTOS EN LA COLA

    print(){
        console.log(this.cola);
    }
}

//INSTANCIAR OBJETO 

let colaBCP = new Cola();

//PROBANDO METODO ENCOLAR
colaBCP.encolar("Pepito");
colaBCP.encolar("Marcos");
colaBCP.print();

//PROBANDO METODO DESENCOLAR
colaBCP.desencolar();
colaBCP.print();

//VER EL PRIMER ELEMENTO DE LA COLA
colaBCP.encolar("Jaimito");
colaBCP.encolar("Julieta");
colaBCP.encolar("Romeo");

console.log(colaBCP.peek());

//VER CANTIDAD DE ELEMENTOS EN LA COLA
console.log(colaBCP.size());

//¿ESTA VACIO?
console.log(colaBCP.isEmpty());

//Imprimir todos los elementos de la cola
colaBCP.print();
