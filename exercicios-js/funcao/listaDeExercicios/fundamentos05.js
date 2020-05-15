function formataNumero(num) {
    return `R$ ${num.toFixed(2).toString().replace('.', ',')}`
}

console.log(formataNumero(0.1 + 0.2))