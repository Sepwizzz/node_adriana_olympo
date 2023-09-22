

const express = require("express");

const app=express();
const mysql =require("mysql");

const cors =require("cors")


// 
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
  });
  
  app.get('/users', async (_req, res) => {
    const url = 'https://randomuser.me/api/';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return res.json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: 'An error occurred'});
    }
  });
  
  const port = 3000;
  
  app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`),
  );







// 


app.use(cors());


app.use(express.json());

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ad_hotel"
})

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'});
  });
  
  const PORT = 3000;
  
  app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
  });

app.post("/create",(req,res)=>{
    const id_usuario = req.body.id_usuario;
    const usuario = req.body.id_usuario;
    const nombre = req.body.id_usuario;
    const apellido = req.body.id_usuario;
    const correo  = req.body.id_usuario;
    const password = req.body.id_usuario;
    const id_tipo = req.body.id_usuario;
    res.json({mgs:" This is CORS-enabled for all origins!"});


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
