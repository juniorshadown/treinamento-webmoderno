const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'sLocal'
    minhaFuncao()
}

exec()