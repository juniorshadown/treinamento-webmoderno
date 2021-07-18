class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }
    
    addLancamento(...Lancamento) {
        Lancamento.forEach(l => this.Lancamento.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.Lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000 )
const contaDeLUz = new Lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLUz)
console.log(contas.sumario())
console.log(contas.sumario())