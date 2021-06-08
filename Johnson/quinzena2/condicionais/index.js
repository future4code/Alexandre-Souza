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
const maioridade = Number(prompt("Qual a sua idade?"))

function podeDirigir(maioridade) {
    if (maioridade >= 18) {
        return "Você pode dirigir"
    } else {
        return "Você não pode dirigir."
    }
}

console.log(podeDirigir(maioridade))

