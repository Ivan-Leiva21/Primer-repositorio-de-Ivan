document.querySelector("#btnChiste").addEventListener("click", () => {
    fetch("http://official-joke-api.appspot.com/jokes/random")
    .then((res) => res.json())
    .then((res) => {
        mostrarChiste(res);
    })
})

function mostrarChiste(chiste) {
    console.log(chiste)
    let vista = `<span>${chiste.setup} </span><span>${chiste.punchline}</span>`;
    document.querySelector("#chiste").innerHTML = vista;
}