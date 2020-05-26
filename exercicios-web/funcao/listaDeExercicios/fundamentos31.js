const negativos = vetor => {
    let contador = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            contador++
        }
    }
    return `Quantidade de negativos ${contador}`
}

console.log(negativos([0, 1, -6, 8, -100, 12, -9, -300]))