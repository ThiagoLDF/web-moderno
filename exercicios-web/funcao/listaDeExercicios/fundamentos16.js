const calcula = (num1, operador, num2) => {
    switch(operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Operador inválido'
    }
}

console.log(calcula(2,'+', 3))
console.log(calcula(2,'-', 3))
console.log(calcula(2,'*', 3))
console.log(calcula(2,'/', 3))
console.log(calcula(2,'%', 3))