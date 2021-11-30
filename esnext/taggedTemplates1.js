// tagged templates - processa o  template dentro de una função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Roberto'
const situação = 'Aprovado'
console.log(tag `${aluno} está ${situação}.`) // retirando a tag -- roberto está aprovado.