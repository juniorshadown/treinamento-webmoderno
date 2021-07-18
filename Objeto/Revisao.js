const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 45,
        endereco: {
            Logradouro: 'Rua abc',
            numero: 454
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 20
    }, {
        nome: 'Ana',
        idade: 45
    }],
    calcularValorSeguro: function() {
        //** */
    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['Logradouro'] = 'Av gigante'
console.log(carro)

delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)