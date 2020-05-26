function recorde(pontos) {
    let x = 0
    let y = 0
    let ponto = pontos.split(' ')
    for (let i = 1; i < ponto.length; i++) {
        if (Number(ponto[i]) > Number(ponto[i - 1])) {
            x++
            y = i

        }
    }
    return [x, y]
}

console.log(recorde('10 20 20 8 25 3 0 30 1'))
console.log(recorde('90 10 30 8 25 31 40 30 1'))