//npm init -y: instala as configurações (package.json)
//npm i express: instala os pacotes do Express

import express from "express";

const app = express();
//serviço = API
//CTRL+C finaliza o processo

//indica para o serviço interpretar em JSON
app.use(express.json())


//para criar um array de frutas
let frutas = ["uva","carambola","melancia","maracujá","morango"]


////Rota a ser solicitada. ex: app.get("/produtos"). GET com "/"" é a rota padrão
app.get("/", (req, res) => {
    //.send encerra requisição (EXPRESS) *RECOMENDADO*: Aceita valores diferentes além de strings
    res.send("res.send")
    
    //.end encerra requisição (NODE): Aceita somente tipo string ou buffer(binário)
})


//rota usuario/1
//  /:id = indica um parâmetro
app.get("/usuario/:id", (req,res) => {
    let id = req.params.id;
    res.send(`Acessando uma rota específica. ID do usuário: ${id}`)
    
})



//uma rota que receba 2 parametros e exiba em formato de objeto
app.get("/usuario/:id/:nome", (req,res) => {
    let objeto = {
        nome: req.params.nome,
        id: req.params.id
    }

    // para inserir textos com objetos, é preciso converter em string na interpolação
    res.send(`teste retornando um objeto: ${JSON.stringify(objeto)}`)
})


//rota que adiciona nova fruta no array com POST
app.post("/fruta", (req,res) => {
    const novaFruta = req.body.nome
    frutas.push(novaFruta)
    res.send("Fruta cadastrada com sucesso.")
})

//rota para consultar array de frutas com GET
app.get("/fruta", (req,res) => {
    res.send(frutas)
})

//rota para alterar o nome da fruta com PUT
app.put("/fruta/:posicao", (req,res) => {

    // acessamos a posição da fruta desejada e atribuimos um novo valor pelo body da requisição.
    frutas[req.params.posicao] = req.body.nome
    res.send("Fruta alterada com sucesso para" + req.body.nome)
})

//rota para remover uma fruta com DELETE
app.delete("/fruta/:posicao", (req, res) => {
    let posicao = req.params.posicao
    
    frutas.splice(posicao, 1) // remove do array: array.splice(indice, quantidade de itens)
    res.send("Fruta removida da lista.") 
})



//o app.listen precisa estar como última instrução, pois ele é quem vai inicializar o serviço
// pra testar no Postman: GET com URL: localhost:3000/
app.listen(3000, () =>{
    console.log("iniciando minha API com Express");
    
})

