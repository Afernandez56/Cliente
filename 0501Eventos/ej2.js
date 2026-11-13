const texto = document.getElementById("contador");

const botonC = document.getElementById("clicka");
const botonR = document.getElementById("reinicia");

let contador = 0;
function clicka () {
    contador++;
    texto.textContent = `${contador} click`
}

function reinicia(){
    contador = 0;
    texto.textContent = `Reiniciado`
}

botonC.addEventListener("click", clicka);
botonR.addEventListener("click", reinicia);