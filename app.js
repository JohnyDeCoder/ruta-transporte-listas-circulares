class Base {
    constructor(nombre, minutos) {
        this.nombre = nombre;
        this.minutos = minutos;
        this.sig = null;
        this.ant = null;
    }
}

class Ruta {
    constructor() {
        this.primero = null;
    }

    agregar(nuevo) {
        if (this.primero == null) {
            this.primero = nuevo;
            nuevo.sig = nuevo;
            nuevo.ant = nuevo;
        }
        else {
            nuevo.sig = this.primero;
            nuevo.ant = this.primero.ant;
            this.primero.ant.sig = nuevo;
            this.primero.ant = nuevo;
        }
    }
}

let miRuta = new Ruta();

miRuta.agregar(new Base("Base 1", 10));
miRuta.agregar(new Base("Base 2", 20));
miRuta.agregar(new Base("Base 3", 30));
miRuta.agregar(new Base("Base 4", 40));
miRuta.agregar(new Base("Base 5", 50));
miRuta.agregar(new Base("Base 6", 60));

console.log(miRuta.imprimir());

console.log(miRuta.recorrido("Base 1", 1, 30, 2, 30));

console.log(miRuta.buscar("Base 1"));
miRuta.eliminar("Base 1");

console.log(miRuta.imprimir());

miRuta.eliminar("Base 2");

console.log(miRuta.buscar("Base 1"));
console.log(miRuta.buscar("Base 2"));

miRuta.eliminar("Base 3");
miRuta.eliminar("Base 4");

console.log(miRuta.imprimir());

miRuta.eliminar("Base 5");

console.log(miRuta.imprimir());

miRuta.eliminar("Base 6");

console.log(miRuta.imprimir());

console.log(miRuta.recorrido("Base 6", 2, 30, 3, 00));