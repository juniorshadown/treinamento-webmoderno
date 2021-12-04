let p = new Promise(function(cumprirPromesa){
    cumprirPromesa(3)
})

p.then(function(valor){
    console.log(valor)
})