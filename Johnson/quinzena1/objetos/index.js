//Exercícios de interpretação de código
//1.
//a.
//console.log(filme.elenco[0]) vai imprimir Matheus Nachtergaele
//console.log(filme.elenco[filme.elenco.length - 1]) vai imprimir Virginia Cavendish
//console.log(filme.transmissõesHoje[2]) vai imprimir o array 2 que é Globo", horario: "14h

//2.
//a.
//console.log(cachorro)
// nome: "Juca", idade: 3, raca: "SRD"

//console.log(gato)
//nome: "Juba", idade: 3, raca: "SRD"

//console.log(tartaruga)
//nome: "Jubo", idade: 3, raca: "SRD"

//b.
//Ele faz uma cópia

//3.
//a.
//Vai imprimir um booleano e undefined
//Booleano devido pedir o backender e undefined devido a pedir um objeto inexistente na função

//Exercícios de escrita de código
//1.
//a.
// const pessoa = {
//     nome: "Alexandre",
//     apelidos: ["Ale", "Xandi", "Xandoca"]
// }

// console.log(`Eu sou o ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)

// function adicionarNovosApelidos(pessoa) {
//     const novosApelidos = {
//         ...pessoa, novosApelidos: ["Picolé de Xuxu", "Alexandrinho", "Xandeco"]
//     }

//     return novosApelidos
// }

// const respostaNovosApelidos = adicionarNovosApelidos(pessoa)

// console.log(`Eu sou o ${respostaNovosApelidos.nome}, mas pode me chamar de: ${respostaNovosApelidos.novosApelidos[0]}, ${respostaNovosApelidos.novosApelidos[1]} ou ${respostaNovosApelidos.novosApelidos[2]}.`)

//2.
const pessoa = {
    nome: "Lady Gaga",
    idade: "35",
    profissão: "jogadora de poker"
}

console.log([pessoa.nome + pessoa.nome.length + pessoa.idade + pessoa.profissão + pessoa.profissão.length])

function respostaArray(pessoa) {
    const novaResposta = {
        ...pessoa, novaResposta: []
    }

    return novaResposta

}

const respostaDaNovaResposta = respostaArray(pessoa)

console.log([respostaDaNovaResposta.nome, respostaDaNovaResposta.nome.length, respostaDaNovaResposta.idade, respostaDaNovaResposta.profissão, respostaDaNovaResposta.profissão.length])

