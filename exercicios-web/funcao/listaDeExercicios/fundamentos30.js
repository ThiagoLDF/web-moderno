function maiorNumero(vetor) {
    let maior = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
    }
    let menor = maior
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    return `Maior número ${maior}, menor número: ${menor}`
}

console.log(maiorNumero([50, 40, 23, 100, 200, 8, 60, 1, 500]))