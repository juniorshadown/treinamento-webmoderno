// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joão', 7999,5)
const f2 = criarFuncionario('jjunior', 10099,5)
console.log(f1.getSalario(), f2.getSalario())

// Object.Create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// um função famosa que retorna Objeto...
const FromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(FromJSON.info)