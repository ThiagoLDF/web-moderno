function plano(idade) {
    if (idade >=0 && idade <= 10) {
        return 'R$' + 180
    } else if (idade > 10 && idade <= 30) {
        return 'R$' + 150
    } else if (idade > 30 && idade <= 60) {
        return 'R$' + 195
    } else if (idade > 60) {
        return 'R$' + 230
    } else {
        return 'idade inválida' 
    }
}

console.log(plano(2))
console.log(plano(15))
console.log(plano(43))
console.log(plano(65))
console.log(plano(102))
console.log(plano('asdas'))