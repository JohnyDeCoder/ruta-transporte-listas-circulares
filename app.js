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

    imprimir() {
        if (this.primero) {
            if (this.primero.sig === this.primero) {
                return "1) Nombre de la base: " + this.primero.nombre + " | Minutos: " + this.primero.minutos;
            }
            else {
                let lista = "", temp = this.primero, i = 1;

                while (temp) {
                    lista += i + ") Nombre de la base: " + temp.nombre + " | Minutos: " + temp.minutos + "\n";
                    i += 1;
                    temp = temp.sig;

                    if (temp === this.primero) {
                        return lista;
                    }
                }
            }
        }
        return "ERROR No existen bases en la ruta...";
    }

    recorrido(baseInicio, horaInicio, minutoInicio, horaFin, minutoFin) {
        let base = this.buscar(baseInicio);

        if (base) {
            let minutosInicio = ((horaInicio * 60) + minutoInicio), minutosFin = ((horaFin * 60) + minutoFin), minutosRecorridoRestante = 0, temp = base.sig, recorridoLista = "", i = 2;

            recorridoLista += "1) El cami??n parte desde las " + horaInicio + ":" + minutoInicio + " hrs hasta las " + horaFin + ":" + minutoFin + " hrs desde la base " + base.nombre + " e iniciar?? su recorrido durante " + (minutosFin - minutosInicio) + " minutos.\n";
            while (minutosInicio <= minutosFin) {
                minutosInicio += temp.minutos;
                if (minutosInicio >= minutosFin) {
                    break;
                }
                else {
                    recorridoLista += i + ") El cami??n lleg?? a la base " + temp.nombre + " con " + temp.minutos + " minutos de recorrido, van " + (minutosRecorridoRestante += temp.minutos) + " minutos de recorrido.\n";
                    i += 1;
                    temp = temp.sig;
                }
            }
            recorridoLista += i + ") El cami??n finaliz?? su recorrido en la base " + temp.nombre + " con " + temp.minutos + " minutos de recorrido y se realiz?? " + (minutosRecorridoRestante += temp.minutos) + " minutos recorridos desde las " + horaInicio + ":" + minutoInicio + " hrs hasta las " + horaFin + ":" + minutoFin + " hrs.\n";
            return recorridoLista;
        }
        else {
            return "ERROR La base " + baseInicio + " no existe en la ruta..."
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