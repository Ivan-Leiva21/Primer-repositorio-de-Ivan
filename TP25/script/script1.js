const curso = {
    nombre: "Programación Web",
    sede: "San Miguel",
    turno: "tarde",
    inscriptos: 26,
    saludar: () => {
        console.log("hola alumnos de " + curso.nombre);
    },
    estado: () => {
        if (curso.inscriptos > 25) {
            console.log("curso completo");
        } else {
            console.log("quedan vacantes");
        }
    },
}

console.log(curso);

console.log(curso.sede);

console.log(curso["turno"]);

// modificar una propiedad del objeto
curso.turno = "noche";
//

console.log(curso);

// añadir una propiedad
curso.ciclo = 2025;
//

console.log(curso);

// eliminar una propiedad
delete curso.sede;
console.log(curso);
//
console.clear();

// loop 
for (const dato in curso) {
    // console.log(dato);
    console.log(curso[dato]);
}
//
console.clear();

// metodo dentro de un objeto
curso.saludar();
curso.nombre = "Diseño Web";
curso.saludar();
curso.inscriptos = 10;
curso.estado();