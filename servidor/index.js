

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
    database:"ad_hotel"
})


app.post("/creat",(req,res)=>{
    const id_usuario = req.body.id_usuario;
    const usuario = req.body.id_usuario;
    const nombre = req.body.id_usuario;
    const apellido = req.body.id_usuario;
    const correo  = req.body.id_usuario;
    const password = req.body.id_usuario;
    const id_tipo = req.body.id_usuario;


    db.query( "insert into  datos_usuario(id_usuario,usuario,nombre,apellido,correo,pasword,id_tipo) values (?,?,?,?,?,?,?)",[id_usuario,usuario,nombre,apellido,correo,password,
        id_tipo],(error,result)=>{
            if(error){
                console.log(error);
            }else{res.send("registro exitoso")}
        });
    
});



app.listen(3000,()=>{
    console.log("puerto activado")
})
