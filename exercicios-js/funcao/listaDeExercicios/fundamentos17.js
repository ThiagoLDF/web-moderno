const aumento = (salario, plano) => {
    switch (plano) {
        case 'A':
            return salario + (salario * 0.1)
        case 'B':
            return salario + (salario * 0.15)
        case 'C':
            return salario + (salario * 0.2)
        default:
            return 'Plano inexistente'
    }
}

console.log(aumento(1500, 'A'))
console.log(aumento(1500, 'B'))
console.log(aumento(1500, 'C'))
console.log(aumento(1500, 'D'))