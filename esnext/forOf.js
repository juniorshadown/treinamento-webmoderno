for (let letra of "Cod3r") {
    console.log(letra); // percorre as letras
}

const assuntoEcma = ['Map', 'Set', 'Promise' ]
for (let i in assuntoEcma) { // percorre em cima de indice
    console.log(i);
}

for (let assunto of assuntoEcma) {
    console.log(assunto); // percorre valores
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto); // imprimir chave e valores e array
}

for (let chave of assuntosMap.keys()) {
    console.log(chave); // imprimir chaves
}

for (let valor of assuntosMap.values()) {
    console.log(valor); // valores
}

for (let [ch, vl] of assuntosMap) {
    console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra);

}
