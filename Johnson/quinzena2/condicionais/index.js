//Exercícios de interpretação de código
//1.
//a. É um if else, dá uma condição, caso não for if, é else.

//b. Passa no teste os números que resta zero.

//c. Não passa no teste os números que restam diferente de zero.

//2.
//a. O código acima serve para o selecionar o preço de uma fruta que pode ter na lista, caso tenha será informado o valor, caso não tenha, será informado o valor de default que é 5.

//b. Maçã será informado o valor de 2.25

//c. Pêra e default serão considerados como 5

//3.
//a. Está pedindo para o usuário digitar um número.

//b. Se for 10, vai imprimir: Esse número passou no teste
// Se for -10 não vai imprimir nada pois não tem console.log

//c. Provavelmente terá erro pois está chamando uma variável e não está declarando nada.

//Exercícios de escrita de código

//1.
// const maioridade = Number(prompt("Qual a sua idade?"))

// function podeDirigir(maioridade) {
//     if (maioridade >= 18) {
//         return "Você pode dirigir"
//     } else {
//         return "Você não pode dirigir."
//     }
// }

// console.log(podeDirigir(maioridade))

//2.
// const turnoDoAluno = prompt("Que turno você estuda: (M - Matutino), (V - Vespertino), (N - Noturno)").toUpperCase()

// function mensagemAoAluno(saudacao) {
//     if (turnoDoAluno === "M") {
//         return "Bom dia!"
//     } else if (turnoDoAluno === "V") {
//         return "Boa tarde!"
//     } if (turnoDoAluno === "N") {
//         return "Boa noite"
//     }
// }

// console.log(mensagemAoAluno(turnoDoAluno))

//3.
// let mensagemAoAluno = prompt("Que turno você estuda: (Matutino), (Vespertino), (Noturno)").toLowerCase()
// switch (mensagemAoAluno) {
//     case 'matutino':
//         console.log(`Bom dia`)
//         break
//     case 'vespertino':
//         console.log('Boa tarde')
//         break
//     case 'noturno':
//         console.log('Boa noite')
//         break
//     default:
//         console.log('Digite um dos turnos')
//         break
// }

//4.
const generoDoFilme = prompt("Que gênero de filme você gosta de assistir?").toLowerCase()
const valorDoIngresso = prompt("Qual o valor do ingresso?")

function sessaoDeCinema (bilheteria) {
    if (generoDoFilme === "fantasia" && valorDoIngresso <= 15) {
        return "Bom filme"
    } else {
        return "Escolha outro filme :("
    }
}

console.log(sessaoDeCinema(generoDoFilme, valorDoIngresso))

