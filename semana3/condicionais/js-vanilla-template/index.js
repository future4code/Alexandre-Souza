/* 
Exercícios de interpretação de código
EXERCICIO 1

Qual o teste que ele realiza?
Resposta: Verifica se o número vai ser par

Para que tipos de números ele imprime no console "Passou no teste"?
Resposta: Para números pares

Para que tipos de números a mensagem é "Não passou no teste"?
Resposta: Para números que não forem pares
*/


/*EXERCÍCIO 2


a. Para que serve o código acima?
Resposta: Para verificar se o usuário irá escrever uma das frutas
que estão no case.

b. Qual será a mensagem impressa no console, 
se o valor de fruta for "Maçã"?
Resposta: Será o valor estipulado para Maçã que é 2.25

c. Considere que um usuário queira comprar uma Pêra, qual seria a 
mensagem impressa no console se retirássemos o break que está logo 
acima do default (o break indicado pelo comentário "BREAK PARA O 
ITEM c.")?
Resposta: Ele seria enviado para a próxima lista de código, que é
o default, que o preço é 5.
*/


/*EXERCÍCIO 3

a. O que a primeira linha está fazendo?
Resposta: Está pedindo pro usuário digitar um número que o if vai
verificar se é maior ou não que zero.

b. Considere que um usuário digitou o número 10. Qual será a mensagem 
do terminal? E se fosse o número -10?
Resposta: Será "Esse número passou no teste". Se for o número -10 ele
vai dar erro, pois além de ser menor que zero, o código não declarou
o else.

c. Haverá algum erro no console? Justifique usando os conceitos de bloco 
ou escopo.
Resposta: Acredito que sim, terá um erro, pois está faltando declarar
o else com uma mensagem explicando que o número pode ser menor que zero.
Foi colocado um let mensagem dentro do escopo e está incorreto.
/*


/*Exercícios de escrita de código
EXERCÍCIO 4

const idade = Number (prompt("Quantos anos você tem?"))

if (idade >=18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}
*/


/*EXERCÍCIO 5

const turno = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)").toUpperCase()

if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
} else {

}
*/


/*EXERCÍCIO 6

let turno = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)").toUpperCase()
switch (turno) {
    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
        break
    default:
        console.log('Digite M (matutino), V (Vespertino) ou N (Noturno)')
}
*/


/*EXERCÍCIO 7

const movieGenre = prompt("Qual gênero de filme você vai assistir?").toLowerCase()
const ticketValue = Number (prompt("Qual o valor do ingresso?"))

if (movieGenre === "fantasia" && ticketValue <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme")
}*/


/*DESAFIO 1


const movieGenre = prompt("Qual gênero de filme você vai assistir?").toLowerCase()
const ticketValue = Number (prompt("Qual o valor do ingresso?"))
const snack = prompt("Qual snack você prefere comprar?")

if (movieGenre === "fantasia" && ticketValue <= 15) {
    console.log(`Bom filme e com ${snack}`)
} else {
    console.log("Escolha outro filme")
}
*/





