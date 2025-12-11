import { insertDatosFormulario } from "../services/formularios.services.js";
import { selectUsuarios, selectContactos} from "../services/formularios.services.js"

export const formularioContacto = async (req, res)=>{
    console.log("--> Formulario contacto iniciado")
    const resp = await insertDatosFormulario(req.body);
    if(resp.error){
        // res.send(`<h2>Error al grabar los datos: ${resp.msg}</h2>`);
        res.redirect("/contacto.html?error=Error al grabar los datos en BD");
        return;
    }else{
        res.send("<h2>datos grabados exitosamente</h2>");
        return;
    };
};

export const postLogin = async (req, res) => {
    console.log("--> postLogin");
    // proceso de login....
    //1 leer tabla de usuarios
    const tablaUsuarios = await selectUsuarios();
    //2 buscar user del req en tabla
    const busquedaUsuario = tablaUsuarios.data.findIndex((reg) => reg.usuario === req.body.usuario);
    if(busquedaUsuario === -1){
        res.redirect("login.html?error=Error en login");
        return;
    }
    //3 si existe verificar si las contraseñas coinciden 
    if(req.body.password !== tablaUsuarios.data[busquedaUsuario].password);
    console.log("login exitoso");
    res.redirect("/login.html?msg=Login exitoso");
}

export const leerContactos = async(req, res) => {
    const query = await selectContactos();
    if(query.error){
        console.log("Error al leer contactos");
        return res.send({error: true});
    }else{
        return res.send({error: false, data: query.data});
    }
} 
