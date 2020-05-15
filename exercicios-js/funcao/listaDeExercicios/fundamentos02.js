function triangulo(a, b, c) {
    if (a === b && a === c) {
        console.log('Triângulo Equilátero')
    } else if (a === b || a === c || b === c) {
        console.log('Triâgulo Isósceles')
    } else {
        console.log('Triângulo Escaleno')
    }
}

triangulo(3, 3, 4)