const pessoa = {
    nome: 'Junior',
    idade: 20,
    peso: 82
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',  {
    enumerable: true,
    writable: false,
    value: '01/01/2012'
})

pessoa.dataNascimento = '01/01/2013'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const desk = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(desk, o1, o2)

Object.freeze(obj)
obj.c = 1245
console.log(obj)