function impares(num1 = 0, num2 = 100) {
    let vetor = []
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            if (i % 2 != 0) {
                vetor.push(i)
            }
        }
    } else {
        for (let i = num1; i <= num2; i++) {
            if (i % 2 != 0) {
                vetor.push(i)
            }
        }
    }
    return vetor
}

console.log(impares(101, 51))