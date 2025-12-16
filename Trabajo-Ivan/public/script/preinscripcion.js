function validarFormulario(){
    let resultado = true;
    let errores = [];

    const nombre = document.querySelector("#nombre")
    const dni = document.querySelector("#dni")
    const telefono = document.querySelector("#telefono") 

    if (nombre.value === "" || dni.value === "" || telefono.value === ""){
        document.querySelector("#error").innerHTML = "Debe Completar Todos Los Campos";
        return;
    }
}