const anuidade = (mes, valor) => {
    switch (mes) {
        case 1:
            return `Mês: Janeiro  Valor: ${valor}`
        case 2:
            return `Mês: Favereiro  Valor: ${valor * (1 + 0.05)}`
        case 3:
            return `Mês: Março  Valor: ${valor * (1 + 0.05)**2}`
        case 4:
            return `Mês: Abril  Valor: ${valor * (1 + 0.05)**3}`
        case 5:
            return `Mês: Maio  Valor: ${valor * (1 + 0.05)**4}`
        case 6:
            return `Mês: Junho  Valor: ${valor * (1 + 0.05)**5}`
        case 7:
            return `Mês: Julho  Valor: ${valor * (1 + 0.05)**6}`
        case 8:
            return `Mês: Agosto  Valor: ${valor * (1 + 0.05)**7}`
        case 9:
            return `Mês: Setembro  Valor: ${valor * (1 + 0.05)**8}`
        case 10:
            return `Mês: Outubro  Valor: ${valor * (1 + 0.05)**9}`
        case 11:
            return `Mês: Novembro  Valor: ${valor * (1 + 0.05)**10}`
        case 12:
            return `Mês: Dezembro  Valor: ${valor * (1 + 0.05)**11}`
        default:
            return 'Mês inválido'
    }
}

console.log(anuidade(1, 100))
console.log(anuidade(2, 100))
console.log(anuidade(3, 100))
console.log(anuidade(4, 100))
console.log(anuidade(5, 100))
console.log(anuidade(6, 100))
console.log(anuidade(7, 100))
console.log(anuidade(8, 100))
console.log(anuidade(9, 100))
console.log(anuidade(10, 100))
console.log(anuidade(11, 100))
console.log(anuidade(12, 100))
console.log(anuidade(0, 100))