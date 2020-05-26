const numeros = [2, 3, 5, 80, 53, 6, 1000, 57, 8] 
function parImpar(num) {
    let par = 0
    let impar = 0
    for (i in num) {
        if (i % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    return 'Par: ' + par + ' Impar: ' + impar
}

console.log(parImpar(numeros))