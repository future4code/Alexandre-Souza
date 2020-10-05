//Exercícios de interpretação de código

//Exercicio 1

//a. ele irá imprimir o valor da multiplicação: 10 e 50
//b. não iria imprimir nada pois não estaria com console.log

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 2

//a. ele irá imprimir apenas o que for menor que 2, ou seja, "Darvas" e "Caio"
//b. iria imprimir os 2 novos nomes, pois são menores que 2 do mesmo jeito.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 3

// const resultado = metodo([2,4,6]) => {
// let metodoFinal = [];

// for (let x of metodo) {
//     if (x % 2 === 0) {
//         metodoFinal.push(x * x)
//     }
// }
// return metodoFinal;
// }

// metodo([2,4,6])
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercícios de escrita de código
//Exercicio 4

//a.

// function dadosAle() {
//     console.log("Me chamo Alexandre, não revelarei minha misteriosa idade, sou do Paraná e sou LabeAluno")
// }

// dadosAle()

//b.

// let dadosPessoais = (nome, idade, cidade, estudante) => {

//     if (estudante === "true") {
//         estudante = "sim, sou estudante."
//     } else {
//         estudante = "não sou estudante"
// }

// console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`)

// }

// const nome = "Alexandre"
// const idade = "34"
// const cidade = "Castro"
// const estudante = "true"

// const resultado = dadosPessoais(nome, idade, cidade, estudante)
// console.log(resultado)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 5
//a.

// const somaDosParametros = function(x, y) {
//     const soma = x + y
//     return soma
// }

// const resultado = somaDosParametros (999, 1)

// console.log(resultado)

//b.

// let parametros = (one, two) => {
        
//     if (one > two) {
//         one = "sim, sou um booleano bem lindão"
//     } else { 
//         one = "não, mas mesmo assim sou um booleano"
//     }

//     console.log(`RESPOSTA: ${one}`)

// }
    
//     const one = 30
//     const two = 20
    
// const resultado = parametros(one, two)
// console.log(resultado)

//c.

function impressora(a) {
    for (let i = 0; i <= 10; i++) {
        console.log(i+"As invenções são, sobretudo, o resultado de um trabalho teimoso.",a)        
    }
}
impressora("SANTOS DUMONT")
    
