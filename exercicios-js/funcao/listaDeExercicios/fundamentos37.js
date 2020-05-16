function pA(n, a1, r) {
    let soma = a1
    let progA = [a1]
    for (let i = 1; i < n; i++) {
        progA.push(progA[i - 1] + r)
        soma += progA[i]
    }
    return `PA: ${progA} Soma: ${soma}`
}
function pG(n, a1, r) {
    let soma = a1
    let progG = [a1]
    for (let i = 1; i < n; i++) {
        progG.push(progG[i - 1] * r)
        soma += progG[i]
    }
    return `PG: ${progG} Soma: ${soma}`
}

console.log(pA(10, 1, 3))
console.log(pG(10, 1, 3))