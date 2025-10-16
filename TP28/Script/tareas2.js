let tareas = [];

document.querySelector("#btnAgregarTarea").addEventListener("click", () => {
    let tarea = document.querySelector("#tarea");
    if (tarea.value === "") {return};
    let objTarea = {
        tarea: tarea.value,
        estado: "pendiente",
        id: tareas.length,
    };
    tareas.push(objTarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    tarea.value = "";
    document.querySelector("tbody").innerHTML = "";
    tareas.forEach((tarea) => {
        document.querySelector("tbody").innerHTML += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td><div class="btn">${tarea.estado}</div></td>
                    <td>
                        <div class="btn" id="btnEditar">Editar</div>
                        <div class="btn" id="btnBorrar">Borrar</div>
                    </td>
                </tr>`
    });
});

function buscarDatosPrevios() {
    let tareasEnLS = localStorage.getItem("tareas");
    tareasEnLS = JSON.parse(tareasEnLS) || [];
    tareas = tareasEnLS;
    crearVista();
};

function crearVista(){
    tareas.forEach((tarea) => {
        document.querySelector("tbody").innerHTML += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td><div class="btn btnEstado" data-id=${tarea.id}>${tarea.estado}</div></td>
                    <td>
                        <div class="btn btnEditar">Editar</div>
                        <div class="btn btnBorrar">Borrar</div>
                    </td>
                </tr>`
    });
    document.querySelectorAll(".btnEstado").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if(tareas[e.target.dataset.id].estado == "completa"){tareas[e.target.dataset.id].estado = "Pendiente"}else{tareas[e.target.dataset.id].estado = "completa"}
            console.log(tareas[e.target.dataset.id]);
            localStorage.setItem("tareas", JSON.stringify(tareas));
            
            crearVista();
        });
    });
    
};



buscarDatosPrevios();

