const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const genero = sexo => sexo.genero === 'F'
    const pais = origem => origem.pais === 'China' 
    const menorSalario = (func, funcAtual)=> {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    console.log(funcionarios.filter(genero).filter(pais).reduce(menorSalario))
    const func = funcionarios
        .filter(genero)
        .filter(pais)
        .reduce(menorSalario)
        
    console.log(func)
   
})

