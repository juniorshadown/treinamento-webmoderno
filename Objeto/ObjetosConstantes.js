// PESSOA => 1223 => {...}
const pessoa = { nome: 'joão' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 => {,,,}
// pessoa = {nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.End = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'joão' })
console.log(pessoaConstante)