function Aula(nome, VideiID) {
    this.nome = nome
    this.VideiID = VideiID
}

const Aula1 = new Aula('Bem vindo', 123)
const Aula2 = new Aula('até Breve', 456)
console.log(Aula1, Aula2)

// simulando o new
function  novo(f, ...params) {
    const Obj = {}
    Obj.__proto__ = f.prototype
    f.apply(Obj, params)
    return Obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 1555)
console.log(aula3, aula4)