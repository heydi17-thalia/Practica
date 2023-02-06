class NodoArbol{
    constructor(nodo){
        this.nodo = nodo;
        this.descendientes = [];

    }
}


const a = new NodoArbol("Abuelo Pablito");
const b = new NodoArbol("Hijo Pepe");
const c = new NodoArbol("Nieto de Pablito e hijo de Pepe");
const d = new NodoArbol("Nieto de Pablito e hijo de Pepe");
const e = new NodoArbol("Nieto de pablito e hijo de Pepe");

a.descendientes.push(b);
b.descendientes.push(c,d,e);

console.log(a);
console.log(b);
