const texto = document.getElementById("eventos");


function clicka(e) {
    const boton = e.button == 0 ? "principal" : e.button == 1 ? "central" : "derecho";
    texto.innerHTML += `${e.type} : ${boton} X: ${e.clientX} Y: ${e.clientY} <br>`;
}

function dobleclicka(e) {
    texto.innerHTML += `${e.type} X: ${e.clientX} Y: ${e.clientY} <br>`;
}

function mouseAbajo(e){
    const boton = e.button == 0 ? "principal" : e.button == 1 ? "central" : "derecho";
    texto.innerHTML += `${e.type} : ${boton} <br>`;
}
function mouseArriba(e){
    const boton = e.button == 0 ? "principal" : e.button == 1 ? "central" : "derecho";
    texto.innerHTML += `${e.type} : ${boton} <br>`;
}

function contextea(e) {
    texto.innerHTML += `${e.type} : menú contextual <br>`;
}

function wheelea(e) {
    texto.innerHTML += `${e.type} X: ${e.clientX} Y: ${e.clientY} <br>`;
}


document.addEventListener("click", clicka);
document.addEventListener("dblclick", dobleclicka);
document.addEventListener("mousedown", mouseAbajo);
document.addEventListener("mouseup", mouseArriba);
document.addEventListener("contextmenu", contextea);
document.addEventListener("wheel", wheelea);
