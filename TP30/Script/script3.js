document.querySelector("#btnChiste").addEventListener("click", () => {
    fetch("http://official-joke-api.appspot.com/jokes/random")
    .then((res) => res.json())
    .then((res) => {
        mostrarChiste(res);
    })
})

function mostrarChiste(chiste) {
    // console.log(chiste)
    let vista = `<span>${chiste.setup}</span><span>${chiste.punchline}</span>`;
    document.querySelector("#chiste").innerHTML = vista;
}

document.querySelector("#btnGato").addEventListener("click", () => {
    //console.log("hechos sobre gatos");
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((res) =>{
        mostrarHecho(res);
    })
})

function mostrarHecho(hecho){
    let vistaHecho = `<span>${hecho.fact}</span>`;
    document.querySelector("#gatoFact").innerHTML = vistaHecho;
}

document.querySelector("#btnDog").addEventListener("click", () => {
    //console.log("dog api");
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) =>{
        mostrarDog(res);
    })
})

function mostrarDog(dog){
    let  dogVista= `<img src="${dog.message}">`;
    document.querySelector("#dogRes").innerHTML = dogVista;
}

// Evento automatico
let click = new Event("click");

document.querySelector("#btnChiste").dispatchEvent(click);
document.querySelector("#btnGato").dispatchEvent(click);
document.querySelector("#btnDog").dispatchEvent(click);

document.querySelector("#btnNombre").addEventListener("click", () => {
    let nombre = document.querySelector("#inputNombre").value; 
    if(nombre === ""){
        alert("No ingreso un nombre para calcular la edad!!")
    }else {
    console.log(nombre);
    const url = `https://api.agify.io/?name=${nombre}`
    fetch(url)
    .then((res) => res.json())
    .then((res) => {mostrarEdad(res)})
    };
    
})

function mostrarEdad(edad){
    let vista = `<span>Edad calculada para ${edad.name}: ${edad.age}</span>`
    document.querySelector("#nombreRes").innerHTML = vista;
}