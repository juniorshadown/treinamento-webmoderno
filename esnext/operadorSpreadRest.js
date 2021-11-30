// Operador /rest > juntar // operador /spread > espalhar
// Usar rest com parametros de função

// Usar spread com Objetos
const funcionarios = {nome: 'Maria', Salario: 5000.99 }
const clone = { ativo: true, ...funcionarios }
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Marcelo']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal)