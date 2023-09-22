// nota iniciar prmero el servidor en la consola ( cd servidor  despues  node index.js)
// despues  iniciar el front con (cb cliente  despues npm start)
const express = require("express");

const app=express();
const mysql =require("mysql");

const cors =require("cors")
// 

// 

app.use(cors());


app.use(express.json());

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_hotel"
})
// 

// 
app.post("/create",(req,res)=>{
    const id_usuario = req.body.id_usuario;
    const usuario = req.body.usuario;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo  = req.body.correo;
    const password = req.body.password;
    const id_tipo = req.body.id_tipo;


    db.query( "insert into  datos_usuario (id_usuario,usuario,nombre,apellido,correo,pasword,id_tipo) values (?,?,?,?,?,?,?)",[id_usuario,usuario,nombre,apellido,correo,password,
        id_tipo],(error,result)=>{
            if(error){
                console.log(error);
            }else{res.send("registro exitoso")}
        });
    
});
// db.query( "insert into  datos_usuario (id_usuario,usuario,nombre,apellido,correo,pasword,id_tipo) values (?,?,?,?,?,?,?)",[1,"2","s","s","s","S",
//     3],(error,result)=>{
//         if(error){
//             console.log(error);
//         }else{res.send("registro exitoso")}
//     });



app.listen(3000,()=>{
    console.log("puerto activado")
})
