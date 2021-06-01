//Exercícios de interpretação de código

//1.
//função irá retornar a multiplicação da variável 5 por 2 e por 10.

//a. Será impresso 10 e 50 no console

//b. Dá erro se tirar o console.log

//2.

//a. É uma função que pede ao usuário um texto, tem outra função que guarda esse texto e retorna o texto com minúsculas, verifica com includes se tem uma certa palavra mostrando em booleanos.

//b.As saídas serão: true, true e true.


//Exercícios de escrita de código
//1.

//a.
// function imprimirApresentação() {
//     console.log("Eu sou o Alê, tenho 35 anos, moro no Paraná e sou estudante da Labenu");
// }

// imprimirApresentação();

//b.
// function apresentaPessoa(nome, idade, cidade, profissão) {
//    const pessoa = "Meu nome é " + nome + " tenho " + idade + " anos e moro em " + cidade + " e sou " + profissão
//    console.log(pessoa)

// }
// console.log(apresentaPessoa("Beyonce", 39, "Houston", "Cantora"))

//2.

//a.
// const verificarNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }

// console.log(verificarNumeros(200, 300));

//b.
// const verificarMaior = (numero1, numero2) => {
//     const medidor = numero1 <= numero2
//     return medidor
// }

// console.log(verificarMaior(200, 300));

//c.
const verificarParidade = (numeroX) => {
    const medidor = numeroX % 2 == 0
    return medidor
}

console.log(verificarParidade(201));