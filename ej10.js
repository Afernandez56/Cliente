import { Alumno } from "./objetos.js";

const alumnos = [
  { nombre: "Ana", edad: 20, nota: 8.5 },
  { nombre: "Luis", edad: 21, nota: 4 },
  { nombre: "Marta", edad: 19, nota: 7 },
  { nombre: "Pedro", edad: 22, nota: 3.5 },
  { nombre: "Lucía", edad: 20, nota: 9 }
];

const listarAlumnos = (lista) =>{
    lista.forEach(alumno => {
        document.getElementById("listaAlumnos").innerHTML += alumno.infoAlum();
    });
    }

    
const aprobados = (lista) => {
    lista.forEach(alumno =>{
        if (alumnos.esAprobado()){
            document.getElementById("alumnosAprobados").innerHTML += `${alumno.nombre}  `;
        }
    });
    }



const  notaMedia  = (lista) =>{

    let notas = 0;
    
    lista.forEach(alumno => {
        notas+= alumno.nota;
    });

    const notaMedia = notas/lista.length;
         document.getElementById("notaMedia").textContent = `La nota media de los alumnos es: ${notaMedia}`
    }

    listarAlumnos(alumnos);
    aprobados(alumnos);
    notaMedia(alumnos);
