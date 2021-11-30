const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anonimo!\r') // saida padrao..\r quebra de linha
    process.exit()
}else { // caso a flag anonima nao esteja presente
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data =>{ //stdin (teclado)
        const nome = data.toString().replace('\r\n', ''); // '\r\n'  que é a quebra de linha no Windows. // salvando na const o nome que foi digitado... replace remover o enter que o usuario apertou

        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}