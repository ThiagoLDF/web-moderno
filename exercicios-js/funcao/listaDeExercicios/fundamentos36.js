function vetor1(vetor, num) {
    let novoVetor = []
    for (let i = 0; i < vetor.length; i++) {
        novoVetor.push(vetor[i] * num)
    }
    return novoVetor
}
function vetor2(vetor, num) {
    let novoVetor2 = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            novoVetor2.push(vetor[i] * num)
        }
    }
    return novoVetor2
}
let vetor = [1, 2, 4, 5, 6, 7, 8, 9]
console.log(vetor1(vetor, 2))
console.log(vetor2(vetor, 2))