const revenda = veiculo => {
    switch (veiculo) {
        case 'hatch':
            console.log('Compra efutada com sucesso')
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
            break

    }
}
revenda('hatch')
revenda('sedan')
revenda('motocicleta')
revenda('caminhonete')
revenda('barco')