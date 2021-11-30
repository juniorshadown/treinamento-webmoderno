// ESB: object.values/object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias de anotações literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gatinha'
    }
}

console.log(pessoa.nome, pessoa.ola())


// class
class Animal {}
class cachorro extends Animal {
    falar() {
        return 'Au, au au!'
    }
}
console.log(new cachorro().falar())