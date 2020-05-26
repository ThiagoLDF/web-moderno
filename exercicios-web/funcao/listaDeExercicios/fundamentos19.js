const conta = (codigo, quantidade) => {
    switch (codigo) {
        case 100:
            return `Valor R$${(quantidade * 3).toFixed(2)}`
        case 200:
            return `Valor R$${(quantidade * 4).toFixed(2)}`
        case 300:
            return `Valor R$${(quantidade * 5.5).toFixed(2)}`
        case 400:
            return `Valor R$${(quantidade * 7.5).toFixed(2)}`
        case 500:
            return `Valor R$${(quantidade * 3.5).toFixed(2)}`
        case 600:
            return `Valor R$${(quantidade * 2.8).toFixed(2)}`
        default:
            return 'Produto inexistente'
    }
}

console.log(conta(100, 3))
console.log(conta(200, 3))
console.log(conta(300, 3))
console.log(conta(400, 3))
console.log(conta(500, 3))
console.log(conta(600, 3))
console.log(conta(700, 3))