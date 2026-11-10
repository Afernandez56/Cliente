class Cuenta {
    constructor (nombre, apellido1, apellido2){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.saldo = 0;
    }

    nombreTitular(){
        return `Titular de la cuenta: ${this.nombre} ${this.apellido1} ${this.apellido2}`;
    }

    ingresar(cantidad){
        if (cantidad>0){
            this.saldo+=cantidad;
            return true;
        }else{
            return false;
        }
    }

    retirar(cantidad){
        if (cantidad > 0 && cantidad<=this.saldo){
            this.saldo-=cantidad;
            return true;
        }else{
            return false;
        }
    }

    infoSaldo(){
        const miSaldo = this.saldo.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits : 2,
            maximumFractionDigits : 2
        })
        return `Su saldo actual es de : ${miSaldo}`
    }

}



class Alumno {
    constructor(nombre, edad, nota){
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }

    infoAlum(){
        return  `${this.nombre} : ${this.edad}<br>`;
    }

    esAprobado(){
        if (this.nota>=5){
            return true;
        }else{
            return false;
        }
    }

}


class Concesionario {
    let contador = 0;
    constructor(nombre, direccion, ciudad, telefono, responsable){
        this.codigo = contador;
        contador++;
        this.nombre = nombre;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.responsable = responsable;

    }
}

class Coche {

}

export {Cuenta, Alumno};