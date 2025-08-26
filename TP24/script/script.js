document.querySelector("#btnVertical").addEventListener("click", (e) => {
    console.log("boton vertical clickeado");
    document.querySelector("#distribucion").style.flexDirection = "column";
});

document.querySelector("#btnHorizontal").addEventListener("click", (e) => {
    console.log("boton Horizontal clickeado");
    document.querySelector("#distribucion").style.flexDirection = "row";
});

document.querySelector("#btnRojo").addEventListener("click", (e) => {
    console.log("boton Rojo clickeado");
    document.querySelector("#caja1").style.backgroundColor = "red";
});

document.querySelector("#btnVerde").addEventListener("click", (e) => {
    console.log("boton verde clickeado");
    document.querySelector("#caja1").style.backgroundColor = "green";
});

let fontsize = 1;

document.querySelector("#btnGrande").addEventListener("click", (e) => {
    // if(fontSize > 2){
    //     (return);
    // };
        
    fontsize += 0.1; 
    console.log("boton grande clickeado");
    document.querySelector("#caja2 > span:first-child").style.fontSize = '$(fontsize)em';
});

document.querySelector("#btnPequeño").addEventListener("click", (e) => {
    fontsize -= 0.1;
    console.log("boton pequeño clickeado");
    document.querySelector("#caja2 > span:first-child").style.fontSize = $(fontsize)em';
});

document.querySelector("#btnOcultar").addEventListener("click", (e) => {
    console.log("boton ocultar clickeado");

});

document.querySelector("#btnMostrar").addEventListener("click", (e) => {
    console.log("boton mostrar clickeado");

});

document.querySelector("#colorTexto").addEventListener("click", (e) => {
    console.log("change");
    console.log(e.target.value);
    document.querySelector("#caja2")
});


