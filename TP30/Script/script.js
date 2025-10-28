// console.log("archivo script.js vinculado");

fetch("./data/data.JSON")
    .then((res) => {
        console.log(res);
        if (!res.ok) { throw new Error(`error en el fetch: ${res.status} - ${res.statusText}`) }
        return res.json();             // res.json() tambien es una promesa
    })
    .then((res) => {
        console.log(res);
        crearVista(res);
    })
    .catch((error) => {
        console.log("::Error Detectado::" + error)
    })

function crearVista(datos) {
    let vista = `<table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Mail</th>
                <th>Telefono</th>
            </tr>
        </thead>
        <tbody>
            
        `;
    datos.forEach((dato) => {
        vista += `<tr>
                <td>${dato.nombre}</td>
                <td>${dato.apellido}</td>
                <td>${dato.direccion}</td>
                <td>${dato.mail}</td>
                <td>${dato.telefono}</td>
            </tr>`;
    })

    vista += `</tbody>
    </table>`;
    document.querySelector("#salida").innerHTML = vista;
}