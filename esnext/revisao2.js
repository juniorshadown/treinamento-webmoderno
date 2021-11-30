// arrow function deixar funçoes reduzidas,  tornando o codigo mais compacto ou minimizado. ou funçoes so de uma linha só.
const soma = (a, b) => a + b
console.log(soma(3,8))

// arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'node') {
    console.log(texto)
}

log()
log('Sou + predominante')

// operador rest agrupa tudo!
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))