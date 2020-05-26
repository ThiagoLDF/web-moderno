function verificaNota(nota) {
    if (nota >= 0 && nota <= 100) {
        if (nota < 38) {
            console.log('Nota:', nota, 'Reprovado')
        } else {
            if (nota % 5 == 0) {
                console.log('Nota:', nota, 'Aprovado')
            } else if (nota % 5 > 2) {
                console.log('Nota:', (5 - nota % 5) + nota, 'Aprovado')
            }
        }
    }
    else {
        console.log('Nota inválida')
    }

}

verificaNota(101)