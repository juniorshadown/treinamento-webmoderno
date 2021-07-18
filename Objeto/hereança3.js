const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const Filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true }
})

console.log(Filha2.nome)
Filha2.nome = 'Carla'
console.log(`${Filha2.nome} tem cabelo ${Filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(Filha2))

for(let key in Filha2) {
    Filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por herança: ${key}`)
}

