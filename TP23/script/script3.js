document.querySelector("form").addEventListener("submit", (e) => {
    console.log("formulario enviado");
    e.preventDefault();
    validarFormulario();
});

function validarFormulario(){
    let resultado = true;
    let errores = [];
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#dni");

    if(nombre.value === "" || apellido.value === "" || dni.value === ""){
        console.log("debe completar todos los campos");
    }
    resultado = false;
    errores.push("debe completar todos los campos");
};
