document.querySelector("#saludar").addEventListener("click", () => {
    //console.log("saludo");
    const nombre = document.querySelector("#nombre");
    const mensaje = document.querySelector("#saludar #resultado");
    //console.log(nombre.value);
    if(nombre.value === ""){
        //console.log("input vacio")
        mensaje.textContent = "Error! escriba su nombre en el input";
    }else{
        //console.log("input con info: " + nombre.value);
        mensaje.textContent = "Hola " + nombre.value
    }
});

document.querySelector("#calcular").addEventListener("click", () => {
    //console.log("saludo");
    const cantidad = document.querySelector("#cantidad");
    const mensaje = document.querySelector("#ingredientes #resultado");
    const papas = 500;
    const leche = 100;
    const manteca = 30;
    const huevo = 1;
    //console.log(nombre.value);
    if(cantidad.value === " "){
        //console.log("input vacio")
        mensaje.textContent = "Error! escriba una cantidad en el input";
    }else{
        //console.log("input con info: " + nombre.value);
        mensaje.innerHTML = `<span class="lista">
        <span>Cantidad de ingredientes</span>
        <span>$(papas * cantidad.value) grms de papas</span>
        <span>$(leche * cantidad.value) grms de papas</span>
        <span>$(manteca * cantidad.value) grms de papas</span>
        <span>$(huevo * cantidad.value) grms de papas</span>
        </span>`;
    }
});
