const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anonimo!\n')
}