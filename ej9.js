import { Cuenta } from "./objetos.js";

const miCuenta = new Cuenta ("Álvaro", "Fernández", "Fernández");
document.getElementById("nombre").textContent = miCuenta.nombreTitular();


function ingresar(){
    const ingreso = Number(prompt("Cuál es la cantidad que quieres ingresar"));
    if(miCuenta.ingresar(ingreso)){
        document.getElementById("saldo").textContent = miCuenta.infoSaldo();
       document.getElementById("resultado").textContent = "El ingreso se ha realizado con éxito";
    }else{
       document.getElementById("resultado").textContent = "No se ha podido realizar el ingreso por alguna razón";
    };
}

function retirar(){
     const retirada = Number(prompt("Cuál es la cantidad que quieres retirar"));
    if(miCuenta.retirar(retirada)){
        document.getElementById("saldo").textContent = miCuenta.infoSaldo();
        document.getElementById("resultado").textContent ="Se ha retirado la cantidad con éxito";
    }else{
        document.getElementById("resultado").textContent ="No se ha podido retirar la cantidad por alguna razón";
    };
}

    window.ingresar = ingresar;
    window.retirar = retirar;

