// módulos internos, core modules e módulos externo

const { application } = require("express")
const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.")
})

//localhost:3000/