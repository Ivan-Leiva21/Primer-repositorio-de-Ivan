export const validarFormulario = async (req, res, next)=>{
    console.log("--> validar formulario iniciado");
    // validar body
    //console.log(req.body);
    const nombre = req.body.nombre.trim().toLowerCase().split("");
    const telefono = Number(req.body.telefono.trim());
    //console.log(nombre, telefono);
    if(nombre.length === 0 || isNaN(telefono) || telefono.length === 0){
        console.log("Error en la validacion");
        res.send("<h2>Error en la validacion</h2>");
        return;
    };
    console.log("Validacion exitosa");
    next();
};

export const validarLogin = async(req, res, next)=>{
    console.log("--> validacion login iniciada");
    const usuario = req.body.usuario.trim();
    const password = req.body.password.trim();

    if(usuario.length === 0 || password.length === 0){
        console.log("Error en la validacion de Login");
        res.redirect("/login.html?error=Error al validar el login");
        return;
    }
    console.log("validacion exitosa");
    next();
}