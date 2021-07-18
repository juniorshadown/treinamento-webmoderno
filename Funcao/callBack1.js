const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))

// Minha BMW vai sabir krlllllllllllllll
const Junior = ["Vou", "Ser", "RICO"]

function boss(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

Junior.forEach(boss)