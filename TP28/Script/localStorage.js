localStorage.setItem("curso", "programacion Web");

const curso = localStorage.getItem("curso");
console.log(curso);

document.querySelector("#grabar").addEventListener("click", () => {
    console.log("toco el boton grabar");
    // leer campos
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    //invalidar campos vacios
    if(nombre.value == "" || apellido.value == ""){
        console.log("inputs vacios");
        return;
    };
    //crear propiedad nombre y apellido
    const datos = {
        nombre: nombre.value,
        apellido: apellido.value
    };
    //mostrar objeto por consola
    console.log(datos);
    //guardar en local storage
    localStorage.setItem("datos", JSON.stringify(datos));
});

document.querySelector("#leer").addEventListener("click", () => {
    let datosLS = localStorage.getItem("datos");
    console.log(localStorage);
    datosLS = JSON.parse(datosLS);
    console.log(datosLS);
});