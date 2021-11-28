const porta = 3003

const express = require('express')
const app = express()
const bancodedados = require('./bancodedados')

app.get('/produtos', (req, res, next)=> {
    res.send(bancodedados.getProduto(req.params.id)) // converte automaticamente para JSON
})

app.get('/produtos/id', (req, res, next)=> {
    res.send(bancodedados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=> {
    const produto = bancodedados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // json pra web
})

app.listen(porta, () =>{
    console.log(`Servidor está executando na porta ${porta}.`)
})
