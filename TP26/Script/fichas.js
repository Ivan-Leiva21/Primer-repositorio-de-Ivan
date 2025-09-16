document.querySelector("#registrar").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const telefono = document.querySelector("#telefono");
    // console.log(nombre.value, apellido.value, telefono.value);
    if (nombre.value === "" || apellido.value === "" || telefono.value === "") {
       // console.log("completar todos los datos");
       mostrarError("debe completar los 3 campos de input para registrar la ficha");
        return;
    } else {
        let datos = {
            nombre: nombre.value,
            apellido: apellido.value, 
            telefono: telefono.value
        }
        // console.log("finaliza la funcion");
        // console.log(datos);
        
        fichas.push(datos);
        nombre.value = "";
        apellido.value = "";
        telefono.value = "";
        console.log(fichas);

        document.querySelector("#vista h2 span").innerHTML = `<span>${fichas.length}</span>`

    };
});

let fichas = [];

function mostrarError(txt){
    const divErrores = document.querySelector("#errores");
    divErrores.textContent = txt;
    divErrores.style.display = "flex";
    setTimeout(() => {
        divErrores.style.display = "none";
    }, 1000 * 10);
};

document.querySelector("#vista #mostrarReg").addEventListener("click", () => {
    // console.log("click a boton mostrar");
    if(fichas.lengt === 0){
        mostrarError("no hay registros para mostrar");
        return;
    }
    fichas.forEach((objeto) => {
        document.querySelector("#salida").innerHTML += `<div class="ficha">
                <span>Nombre: ${objeto.nombre}</span>
                <span>Apellido: ${objeto.apellido}</span>
                <span>Telefono: ${objeto.telefono}</span>
            </div>`
    });
});

document.querySelector("#vista #vaciarReg").addEventListener("click", () => {
    console.log("click a boton vaciar");
});

