const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }

}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

var obj = {
    _v: 0,
    get v() { return this._v },
    set v(n) {
        this._v = n
    }
    
}
obj.v = 6
console.log(obj.v)
