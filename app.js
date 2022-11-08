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

    buscar(nombreBase) {
        if (this.primero) {
            if (this.primero.nombre === nombreBase) {
                return this.primero;
            }
            else {
                let temp = this.primero.sig;

                while (temp != this.primero) {
                    if (temp.nombre === nombreBase) {
                        return temp;
                    }
                    temp = temp.sig;
                }
            }
        }
        return null;
    }

    eliminar(nombreBase) {
        let base = this.buscar(nombreBase);

        if (base === this.primero) {
            if (this.primero.sig === this.primero) {
                this.primero = null;
            }
            else {
                this.primero.ant.sig = this.primero.sig;
                this.primero.sig.ant = this.primero.ant;
                this.primero = this.primero.sig;
            }
            return true;
        }
        else if (base) {
            base.ant.sig = base.sig;
            base.sig.ant = base.ant;
            return true;
        }
        else {
            return false;
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