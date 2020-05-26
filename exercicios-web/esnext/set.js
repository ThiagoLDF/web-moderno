// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Sport').add('Palmeiras')
times.add('Sport')

console.log(times)
console.log(times.size)
console.log(times.has('sport'))
console.log(times.has('Sport'))
times.delete('São Paulo')
console.log(times.has('São Paulo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)