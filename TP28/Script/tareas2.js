let tareas = [];

document.querySelector("#btnAgregarTarea").addEventListener("click", () => {
    let tarea = document.querySelector("#tarea");
    if (tarea.value === "") { return };
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
        // console.log(tarea);
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
    // console.log(tareasEnLS);
    tareasEnLS = JSON.parse(tareasEnLS) || [];
    console.log(tareasEnLS);
};

tareas.forEach((tarea) => {
    // console.log(tarea);
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

buscarDatosPrevios();