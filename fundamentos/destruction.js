const pessoa = {
    nome: 'Keyla',
    amo: 'Amo muito',
    endereco: {
        Logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, amo} = pessoa
console.log(nome, amo)

const {nome: n, amo: a} = pessoa
console.log(n, a)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {Logradouro, numero, cep}} = pessoa
console.log(Logradouro, numero, cep)

// const { conta: { ag, num}} = pessoa
// console.log(ag, num ) vai da erro
