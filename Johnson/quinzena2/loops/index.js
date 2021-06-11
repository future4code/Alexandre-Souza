//Exercícios de interpretação de código
//1. Esse laço roda 5 vezes! Mas ele só aumenta o valor de i no i++  da linha do for. Dentro dele, no código que faz valor += i  a gente adicionar o valor atual de i  na variável valor , sem mudar a variável i .
// Então a ideia é que valor vai ter 0 no começo.
// Na primeira iteração, i  é igual a 0, então valor  fica igual a 0 + 0, ou seja 0
// Na segunda iteração, i  é igual a 1, então valor  fica igual a 0 + 1, ou seja 1
// Na terceira iteração, i  é igual a 2. então valor  fica igual a 1 + 2, ou seja 3
// Na quarta iteração, i  é igual a 3, então valor  fica igual a 3 + 3, ou seja 6
// Na quinta iteração, i  é igual a 4, então valor  fica igual a 6 + 4, ou seja 10

//2. 
//a. Imprime todos os números maiores de 18

//b. O for... of... não é suficiente pois ele não é capaz de acessar cada índice como o for normal.

//3. 
//Ele irá acrescentar um asterisco em cada linha e adicionar mais um a cada linha.

//1. Exercícios de escrita de código

// let petsDoUsuario = Number(prompt("Quantos pets vc tem?"))

// let arrayDosPets = []
// let novosPets = ""

// if (petsDoUsuario === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     for (let i = 0; i < petsDoUsuario; i++)
//         novosPets = console.log(prompt("Qual o nome do seu pet?"))
//     arrayDosPets.push(novosPets)
// }
// console.log(arrayDosPets)

//2.

//a.
// let arrayOriginal = [1001, 2001, 3001, 4000, 5000, 6000, 7000]
// function imprimir (arrayNumeros) {
//     for (let i = 0; i < arrayNumeros.length; i++) {
//         console.log(arrayNumeros[i])

//     }
// }
// imprimir(arrayOriginal)

//b.
// function imprimir (arrayNumeros10) {
//     for (let i = 0; i < arrayNumeros10.length; i++) {
//         console.log(arrayNumeros10[i] / 10)

//     }
// }
// imprimir(arrayOriginal)

//c.
// const numeros = [11, 352, 111, 238, 12369]

// function pegaPares(arrayNumeros) {
//   let soPares = []

//   for (let i = 0; i < arrayNumeros.length; i++) {
//     if (arrayNumeros[i] % 2 === 0) {
//       soPares.push(arrayNumeros[i])
//     }
//   }

//   return soPares
// }

// console.log(pegaPares(numeros))

//d.
// const numeros = [11, 352, 111, 238, 12369]

// function pegaElemento(arrayNumeros) {

//   for (let i = 0; i < arrayNumeros.length; i++) {
//     console.log("O elemento do index " + i + " é " + arrayNumeros[i])
//   }
// }

// pegaElemento(numeros)

//e.
// const numeros = [11, 352, 111, 238, 12369]

// function pegaMaior(arrayNumeros) {
//     let maiorNumero = 0

//     for (let i = 0; i < arrayNumeros.length; i++) {
//         if (arrayNumeros[i] > maiorNumero) {
//             maiorNumero = arrayNumeros[i]
//         } else {
//             console.log("O maior número é " + maiorNumero + " e o menor é ")
//         }

//     }

//     return maiorNumero
// }

// console.log(pegaMaior(numeros))