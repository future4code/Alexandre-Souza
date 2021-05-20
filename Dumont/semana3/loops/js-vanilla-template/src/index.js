// ------------------------------------------- EXEMPLOS -------------------------------------

// EXEMPLO 1 - WHILE

// let i = 0

// while (i < 10) {
//     console.log(i)


//     i = i + 1// isso é igual a i++ ou i += 1
// }


// EXEMPLO 2 - FOR



// for (let i = 0; i < 14; i = i + 1) {
//     console.log(i)
// }


// EXEMPLO 3 - FOR PERCORRENDO UM ARRAY

// const numeros = [4, 12, 17, 23, 25, 0, 10]


// for (let i = 2; i < numeros.length; i = i + 1) {
//     let elemento = numeros[i]
//     console.log(elemento)
// }


// EXEMPLO 4 - FOR OF

// const profs = ["Lais", "Caiotas", "Sot", "Darvas", "Severo"]


// for (let prof of profs) {

//     console.log(prof)
// }


// EXEMPLO 5 - FOR OF



// const numeros = [12, 17, 40000000, 23, 25, 0, 10, 111100, 12, -2, 2]


// let maiorNumero = numeros[0]

// for (let numero of numeros) {
//     if (maiorNumero < numero) {
//         maiorNumero = numero
//     }
// }

// console.log(maiorNumero)

// ------------------------------------------- EXERCÍCIOS -----------------------------------

// EXERCÍCIO 1 - WHILE
// let soma = 0
// let numero

// while (numero !== 0) {

//     numero = Number(prompt("Digite um valor"))

//     soma = soma + numero

//     console.log(soma)
// }

// EXERCÍCIO 2 - FOR

// const numeros = [40000000, 12, 17, 23, 25, 0, 10, 111100, 12, -2, 2]


// let maiorNumero = numeros[0]


// for (let indexDoArray = 0; indexDoArray < numeros.length; indexDoArray++) {
//     let elemento = numeros[indexDoArray]

//     if (maiorNumero < elemento) {
//        maiorNumero = elemento
//     }
    
// }

// console.log(maiorNumero)


// EXERCÍCIO 3 - FOR OF

// const arrayDeStrings = ["Oi", "sumido,", "tudo bem?", "Saudades!"]
// let texto = ""

// for (let string of arrayDeStrings) {
//     texto = texto + " " + string
// }

// console.log(texto)



//Exercícios de interpretação de código
//EXERCÍCIO 1

//O que o código abaixo está fazendo? Qual o resultado impresso no console?
//Resposta: Ele dá o valor que é 5 + o número ue encontrou que é 5. Somando 10.

//EXERCICIO 2

//a. O que vai ser impresso no console?
//Resposta: Ele vai imprimir todos os números que forem maiores que o 18.

//b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//Resposta: Sim, desde que o escreva no código.


//DESAFIO 1
//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? 
//Resposta: Irá imprimir 4 linhas de asteriscos


//Exercícios de escrita de código
//EXERCICIO 3

//a.
/*
const original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 

for (let i= 0; i < original.length; i++) {

console.log(original[i])

}


//b.

const original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 

for (let i= 0; i < original.length; i++) {

console.log(original[i] / 10)

}


//c.

const original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 
let pares = []
for (let i= 0; i < original.length; i++) {
    if( original[i] %2 === 0) {
        pares.push(original[i])
    }
}
    console.log(pares)


//d.

const original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 
let strings = []
for (let i=0; i < original.length; i++) {
    strings.push(`O elemento do índex ${i} é ${original[i]}`)
    console.log(strings[i])
}

 
//e.

const original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = original[0]
let valorMinimo = original[0]
for (let i= 0; i < original.length; i++) {
    if (original[i] > valorMaximo) {
        valorMaximo = original[i]
    }
    if (original[i] < valorMinimo) {
        valorMinimo = original[i]
    }
}
    console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
*/


//DESAFIO 2
/*
const numero = Number(prompt ("Escolha um número"))
console.log("Vamos jogar!")

let numero2 = Number(prompt ("Advinhe o número"))
console.log(`O número chutado foi: ${numero2}`)

let armazena = 1

while (numero !== numero2) {
    armazena ++
    
    console.log(`O número chutado foi: ${numero2}`)
    if (numero2 < numero) {
        console.log("Você digitou um número menor")
    } else {
        console.log("Você digitou um número maior")
    }
    numero2 = Number(prompt ("Advinhe o número"))
}

console.log("Você acertou!")
console.log(`O número de tentativas foi: ${armazena}`)
*/


//DESAFIO 3
/*
const numero = Math.floor((Math.random()*10)+1)

let numero2 = Number(prompt ("Advinhe o número"))
console.log(`O número chutado foi: ${numero2}`)

let armazena = 1

while (numero !== numero2) {
    armazena ++
    
    console.log(`O número chutado foi: ${numero2}`)
    if (numero2 < numero) {
        console.log("Você digitou um número menor")
    } else {
        console.log("Você digitou um número maior")
    }
    numero2 = Number(prompt ("Advinhe o número"))
}

console.log("Você acertou!")
console.log(`O número de tentativas foi: ${armazena}`)
*/
//




