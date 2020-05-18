Array.prototype.forEach2 = function(callback) {
    for(let i =0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})



// const aprovados = {
//     nomes: ['Agatha', 'Aldo', 'Daniel', 'Raquel'],
//     forEach2: function () {
//         for (let i = 0; i < this.nomes.length; i++) {
//             console.log(`${i + 1}) ${this.nomes[i]}`)
//         }
//     }
// }
// aprovados.forEach2()


