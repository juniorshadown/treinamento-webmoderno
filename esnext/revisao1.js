{
    var a = 1
    let b = 5
    console.log(a,b)
}
console.log(a) // var pode ser acessado independente --- let so pode ser acessado dentro do bloco.

// template string
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring --- Retira ou desmonta palavras e numeros ou oq quiser dentro do bloco. ou tirar atributos da variavel.
const [l, e, ...tras] = "Cod3r"
console.log(l, e, ...tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 19}
console.log(i, nome)