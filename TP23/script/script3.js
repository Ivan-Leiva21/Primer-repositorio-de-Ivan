document.querySelector("form").addEventListener("submit", (e) => {
    console.log("formulario enviado");
    e.preventDefault();
    const resultado = validarFormulario();
    // if(resultado){
    //     console.log("formulario validado con exito");
    // }else{
    //     console.log("no se pudo validar la informacion");
    // }
});
function validarFormulario() {
    let resultado = true;
    let errores = [];
    const nombre = document.querySelector("#nombre");

    // console.log(nombre.value);

    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#dni");

    if (nombre.value === "" || apellido.value === "" || dni.value === "") {
        resultado = false;
        console.log("debe completar todos los campos");

        resultado = false;
        errores.push("debe completar todos los campos");

        if (isNaN(dni.value)) {
            resultado = false;
            errores.push("el campo DNI solo acepta numeros");
        };
    }
    if (dni.value.length !== 8) {
        resultado = false;
        errores.push("el DNI debe tener 8 digitos");
    };


    
    mostrarErrores(resultado, errores);
};
// console.log(errores);
const letrasAprobadas = "abcdefghijklmnopqrstuvwxyzáéíóúäëïöü' ".split("");
    console.log(letrasAprobadas);

    const arrayNombre = nombre.value.split("");
    arrayNombre.forEach((letra) => {
        let query = letrasAprobadas.indexOf(letra.toLowerCase());
        if (query === -1) {
            resultado = false;
            errores.push("el campo nombre solo acepta letras");
        };
    });


function mostrarErrores(resultado, errores) {
    if (resultado) {
        //mostrar mensaje de exito
        document.querySelector("#respuestas > div").innerHTML = "el formulario fue validado con exito";
        document.querySelector("body").style.backgroundColor = "#666";

    } else {
        //mostrar mensaje de error y detalle de errores
        document.querySelector("#respuestas > div").innerHTML = "el formulario no se pudo validar con exito";
        document.querySelector("#respuestas > div").innerHTML += `<br> ${errores.join(" <br> ")}`;
        document.querySelector("body").style.backgroundColor = "darkred";
    }


};
