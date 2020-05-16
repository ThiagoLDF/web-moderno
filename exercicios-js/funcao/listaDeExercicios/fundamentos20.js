let nota1 = 0
let nota5 = 0
let nota10 = 0
let nota50 = 0
let nota100 = 0
function cedulas(valor) {
    if (valor >= 50) {
        console.log('1', valor)
    } else if (valor >= 10) {
        for (let i = valor; i >= valor; i - 10) {
            nota10 = nota10 + 1
        }
    }
    return nota10
}

console.log(cedulas(18))
console.log(1.462397997898956 * 10)
