function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.5
    }
}

console.log(criarProduto('Notebool', 2199.55))
console.log(criarProduto('Ipad', 1299.55))