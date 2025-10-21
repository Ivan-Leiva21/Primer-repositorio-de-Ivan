// document.querySelector("#timeOut").addEventListener("click", () => {
//     console.log(1);
//     console.log(2);
//     setTimeout(() => { console.log(3) }, 2000);
//     console.log(4);
//     setTimeout(() => { console.log(5) }, 1000)
//     console.log(6);
// });

// // Promesas

// const promesa1 = new Promise(() => { });

// console.log(promesa1);

// const promesa2 = new Promise((resolve, reject) => {
//     resolve("Promesa resuelta");
// });

// console.log(promesa2);

// const promesa3 = new Promise((resolve, reject) => {
//     reject("Promesa rechazada");
// });

// console.log(promesa3);

// const promesa4 = new Promise((res, rej) => {
//     setTimeout(() => { rej("Error!!") }, 10000);
// });

// promesa4
//     .then((resp) => { console.log(resp) })
//     .catch((error) => { console.log(error) })
//     .finally(() => { console.log("Proceso de promesa 4 finalizado") });

// let num = 4;

// console.log("​👩‍💻​ inicio de proceso");

// const promesa5 = new Promise((res, rej) => {
//     setTimeout(() => {
//         num += 10;
//         console.log("➕​ suma terminada");
//         res(num);
//     }, 5000);
// });


// console.log("🔍​​ Estado de num: ", num);

// promesa5
//     .then((resp) => { console.log("✅​ respuesta resuelta: ", resp) });

// const promesa6 = () => {
//     return new Promise((res, rej) => {
//         console.log("​👩‍💻​ inicio de proceso")
//         setTimeout(() => {
//             let numAleatorio = Math.random();
//             console.log("🔢​ numero generado: ", numAleatorio)
//             let exito = numAleatorio > 0.5;
//             if (exito) {
//                 res("✅​ la tarea se completo con exito");
//             } else {
//                 rej("​❌​ la tarea se ha rechazado");
//             }
//         }, 1000);
//     });
// };

// promesa6()
//     .then((resp) => { console.log(resp) })
//     .catch((error) => { console.log(error) })
//     .finally(() => { console.log("el proceso ha finalizado") });

// Async Await

console.log("mark 1");

const promesa7 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("✅ proceso resuelto");
        rej("❌​ fallo el proceso");
    }, 2000);

});

async function leerPromesa7(){
    try {
    console.log(await promesa7);
    } catch (error) {
        console.log("error: ", error);
    } finally {
        console.log("​⏱️​ proceso terminado");
    }
};

leerPromesa7();

console.log("mark 2");