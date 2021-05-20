/* 
Exercícios de interpretação de código
EXERCICIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", true)

resultado = bool1 && bool2 && bool3
console.log("b. ", false)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", false)

console.log("e. ", typeof boolean)
*/


/*EXERCICIO 2

let array
console.log('a. ', array)
Resposta: undefined, pois o arrya está vazio.

array = null
console.log('b. ', array)
Resposta: null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
Resposta: 11

let i = 0
console.log('d. ', array[i])
Resposta: 3

array[i+1] = 19
console.log('e. ', array)
Resposta: 19

const valor = array[i+6]
console.log('f. ', valor)
Resposta: 9
*/


/* 
Exercícios de escrita de código
EXERCICIO 1

let valor1 = prompt("Qual a sua idade?: ")
let valor2 = prompt("Qual a idade do seu melhor amigo?: ")

let resultado = Number(valor1) > Number(valor2)
console.log("Você é mais velho?" + resultado)
*/

/*
EXERCICIO 2

let valor = prompt("Insira um número par")
console.log(Number (valor) % 2)

c. Teste o programa com diversos números pares. 
Você notou um padrão? Escreva em um comentário de código.
Resposta: Todos os números restam zero.

d. O que acontece se o usuário inserir um número ímpar? 
Escreva em um comentário de código
Resposta: Todos os números irão restar 1.
*/

/*
EXERCICIO 3

let listaDeTarefas = []

let tarefa1 = prompt("Qual sua primeira tarefa do dia?")
let tarefa2 = prompt("Qual sua segunda tarefa do dia?")
let tarefa3 = prompt("Qual sua terceira tarefa do dia?")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas) 

let indice = prompt("Qual tarefa já realizou: 0, 1 ou 2?")

listaDeTarefas.splice( Number(indice), 1 )

console.log(listaDeTarefas) 
*/



/*EXERCICIO 4

let nome = prompt("Insira seu nome")
let email = prompt("Insira seu e-mail")
let mensagem = "O e-mail " + email + "foi cadastrado com sucesso. Seja bem-vinda(o) " + nome
console.log(mensagem)
*/