//Exercícios de Interpretação de códigos
//Exercício 1

//Fará a multiplicação com o valor da cotação que o usuário inserir no prompt. Irá mostrar o valor da multiplicação.

//Exercício 2

//O programa irá calcular o investimento que recebe parâmetros de tipo de investimento e de valor de investimento.
//A tratativa será rodada em Switch case.
//Irá rodar o parâmetro que se for diferente das opções marcadas, irá emitir um alert.
//Se for igual ele irá gerar um montante que é o valor do parâmetro multilicado pelo valor de cada opção do switch case.
//Irá guardar o valor do montante em uma variável e retornar como resultado processado pela função.
//Irá imprimir o retorn de toda função no console navegador.

//Exercício 3

//Ele vai percorrer desde o i=0 até o último e verificar a paridade de todos, se for par
//vai acrescentar esses números dentro do array1, se não for, vai para o array2.
//depois irá imprimir a quantidade de cada instrução de console.log respectivamente: 14, pares e não pares.

//Exercício 4

//Programa vai verificar a quantidade máxima e mínima de elementos dentro de números.
//Se trata de um loop para verificação desses números.
//Na primeira armazenará números menores que o anterior (1)
//Na segunda armazenará números maiores (25)

//__________________________________________________________________________________________________________________________________________


//Exercícios de lógica de Programação
//Exercício 1

//1 - for
//2 - for of
//3 - while

// function bananinha(listaArray) {
//     for(let i = 0; i < listaArray.lenght; i++) {
//         console.log(listaArray[i])
//     }
// }



//Exercício 2

// Boolean1 = true
// Boolean2 = false
// Boolean3 = true
// Boolean4 = false

// a) true && false && true = false
// b) true && false || true = true
// c) false || true && false || true = true
// d) true && true || false && true = true
// e) false && true || true && true && true = true



//Exercicio 3

//O código está errado pois o colega colocou sinal de multiplicação
//Também será inviável filtrar os números pares com esse código iniciado

// function imprimirNumerosPares(numerosPares) {

// let i = 0
// while(i < numerosPares) {
//     if(i % 2 === 0) {
//         console.log(i)
//     } else {
//         numerosPares += 1
//     }

// i++

// }
// }



// Exercicio 4

// const triangle = (a, b, c) => {
    
//     if(a === b && b === c && c === a) {
//         console.log('É um triangulo Equilátero')
//     } else if (a !== b && b !== c && c !== a) {
//         console.log('É um triangulo Escaleno')
//     } else if (a === b && a !== c) {
//         console.log ("É um triangulo Isóceles")
//     }

// }

// const triangleEqui = triangle(5, 5, 5)
// const triangleIso = triangle(5, 5, 4)
// const triangleEsc = triangle(3, 4, 5)



//Exercício 5

// const numero1 = Number(prompt('Digite um número: '))
// const numero2 = Number(prompt('Digite outro número: '))


// const verificaMaiorNumero = (a, b) => { 
//     if ( a > b ) {
//          console.log(`O maior é ${a}`)
//     } else {
//          console.log(`O menor é ${a}`)
//     }

//     if( a % b === 0) {
//         console.log(`${a} é divisível por ${b}`)
//     } else {
//         console.log(`${a} não é divisível por ${b}`)
//     }

//     if( b % a === 0) {
//         console.log(`${b} é divisível por ${a}`)
//     } else {
//         console.log(`${b} não é divisível por ${a}`)
//     }

//     if ( a > b) {
//         console.log ("A diferença entre eles é", a - b)
//     }else {
//         console.log ("A diferença entre eles é", b - a)
//     }

// }

// verificaMaiorNumero(numero1, numero2)


//__________________________________________________________________________________________________________________________________________


//Exercícios de Funções
//Exercício 1

// function maiorMenor(array) {
//     let maiorNumero = 0
//     let segundoMaior = 0
//     let menorNumero = 0
//     let segundoMenor = 0
    
//     for(let i = 0; i < array.length; i++) {
//         if(maiorNumero < array[i]) {
//             maiorNumero = array[i]  
//         }
//     }
    
//     for(let i = 0; i < array.length; i++) {     
//         if(maiorNumero !== array[i] && segundoMaior < array[i]) {
//             segundoMaior = array[i]
//         }
//     }
    
//     menorNumero = maiorNumero
//     segundoMenor = segundoMaior
//     for(let i = 0; i < array.length; i++) {
//         if (menorNumero > array[i]) {
//             menorNumero = array[i]
//         }
//     }
    
//     for(let i = 0; i < array.length; i++) { 
//         if(menorNumero !== array[i] && segundoMenor > array[i]) {
//             segundoMenor = array[i]
//         }
//     }
    
//     console.log(segundoMaior)
//     console.log(segundoMenor)
// }
// maiorMenor([10000, 2, 571, 9999, 1, 92, 31 , 1475]) 
// maiorMenor([10000, 2, 571, 9999, 1, 92, 31 , 1475])



//Exercício 2

// function fazAlerta() {
//     alert("Hello Future4")
// }

// fazAlerta()


//__________________________________________________________________________________________________________________________________________

//Exercícios de Objetos

//Exercício 1

//Objetos são estruturas de sintaxe que nos ajuda a deixar tudo mais organizado.
//Ele tem como caracteristica deixar tudo de forma mais intuitiva, como no mundo real
//Como se variaveis de valores tipo string, number e boolean fossem gavetas.
//Os objetos seriam como uma gavetona com etiquetas de onde colocar cada coisa, separando detalhadamente e organizadamente.
//Podemos usar para guardar informações específicas como por exemplo dados cadastrais de uma pessoa no site (nome, idade, sexo, etc..)
//Já o array deixa a forma de organizar diferente, como por exemplo os índices, neste caso poderíamos utilizr funções para trabalhar nelas.
//Array lembra listas.


//Exercício 2

// function criaRetangulo (lado1, lado2) {
//     let gaveta = {
//     largura: 'lado1',
//     altura: 'lado2',
//     perímetro: '(2 * (lado1 + lado2))',
//     área: '(lado1 * lado2)'
// }

// return gaveta

// } 


//Exercício 3

    // let filmeFavorito = {
    //     título: "Jurassic Park",
    //     ano: "1993",
    //     diretor: "Steven Spielberg",
    //     elenco: ["Jeff Goldblum", "Samuel L Jackson"]
    //     }

    // console.log(`Venha assistir ao filme ${filmeFavorito.título}, de ano ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.elenco[0]} e ${filmeFavorito.elenco[1]}`)


//Exercício 4

// const cadastroPessoal = {
//     nome: "Alberto Santos Dumont",
//     idade: "59",
//     email: "dumont@labenu.com.br",
//     endereço: "Palmira - MG"
// }

// let anonimizarPessoa = {
//     ... cadastroPessoal,
//     nome: "ANÔNIMO"
// }

// console.log(anonimizarPessoa.nome)


//__________________________________________________________________________________________________________________________________________


//Exercícios de Funções de array

//Exercício 1
//a

// const pessoas = [
//     {nome: "Pedro", idade: 20},
//     {nome: "João", idade: 20},
//     {nome: "Paula", idade: 12},
//     {nome: "Arthur", idade: 89}
// ]

// const soPessoasAcimaVinte = pessoas.filter((pessoas) => {
//     if(pessoas.idade >= 20) {
//         return pessoas
//     }
// })

//b

// constsoPessoasAbaixoVinte = pessoas.filter((pessoas) => {
//     if(pessoas.idade < 20) {
//         return pessoas
//     }

// })


//Exercício 2


// const array = [1, 2, 3, 4, 5, 6]

//a

// const multiplicadosPorDois = (array) => {
//     let novoArray = []
//     array.forEach((numero) => {
//         novoArray.push(numero*2)
//     })
//     return novoArray
// }

// const novoArray = multiplicadosPorDois(array)
// console.log(novoArray)

//b

// const numerosMultiplicadosPorTresEmStrings = (array) => {
//     let novoArray = []
//     array.forEach((numero) => {
//     let numeroString = numero * 3
//     novoArray.push(numeroString.toString())
//     })
//     return novoArray
// }

//c

// const arrayStringParEimpar = (array) => {
//     let novoArray = []
//     array.forEach((numero) => {
        
//         if(numero % 2 === 0) {
//             novoArray.push(`${numero} é par`)
//         } else {
//             novoArray.push(`${numero} é ímpar`)
//         }
//         return novoArray
//     })
// }

// const novoArray = arrayStringParEimpar(array)
// console.log(novoArray)
