//npm init -y: instala as configurações (package.json)
//npm i express: instala os pacotes do Express

import express from "express";

const app = express();
//serviço = API

//rota a ser soilcitada. ex: app.get("/produtos")
app.get("/", (req, res) => {
    res.send("primeiro dia com node");
})

// pra testar no Postman: GET com URL: localhost:3000/
app.listen(3000, () =>{
    console.log("iniciando minha API com Express");
    
})