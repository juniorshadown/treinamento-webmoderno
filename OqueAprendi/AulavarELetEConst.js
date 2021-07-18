{

var a = 3
console.log(a)

}

// sempre usar Let, invez de var.
{ let b = 5
console.log(b)
}

let d = 4
var e = 9
// somente assim no let, var sempre da certo.
d = 40
var e = 90

console.log(d, e)

d = 500
e = 900

console.log(d, e)

// funciona

// const nunca muda.
const G = 7
// G = 70 não funcionar. Const sempre e valor fixo.
console.log(G)