export const validarFormulario = async (req, res, next)=>{
    console.log("=> validacion de formulario...");
    const nombre = req.body.nombre.trim().toLowerCase().split("");
    const telefono = Number(req.body.telefono.trim());
    if(nombre.length === 0 || dni.length === 0 || isNaN(dni)  || isNaN(telefono) || telefono.length === 0){
        console.log("Validacion Incompleta");
        res.redirect("/preinscripcion.html?error=Error al validar el formulario");
        return;
    }
    console.log("validacion completada");
    next();
} 