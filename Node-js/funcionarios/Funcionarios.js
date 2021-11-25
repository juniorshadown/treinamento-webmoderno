const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'f'
const menorSalario = (Func, FuncAtual) => {
    return Func.salario < FuncAtual.salario ? Func : FuncAtual
}

axios.get(url).then(Response => {
    const Funcionarios = Response.data 
    console.log(Funcionarios)
})
const Func = Funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
console.log(Func)