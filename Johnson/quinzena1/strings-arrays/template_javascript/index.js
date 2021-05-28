// Aula 05 - Strings e Arrays

// Exercícios de interpretação de código

//1.
//a. imprime o undefined
//b. imprime array null
//c. imprime tamanho do array: 11
//d. 3 é o novo index
//e. 3 se torna 19 e imprime: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f. valor 9

//2.
// SUBI NO ONIBUS EM MIRROCOS
//frase.length: 26

//Exercícios de escrita de código
//1.
// const nomeUsuario = prompt("Qual o seu nome?");
// const emailUsuario = prompt("Qual o seu email?");

// console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`);

//2.
//a.
//const comidasPreferidas = ["sushi", "churrasco", "feijoada", "macarronada", "pizza"];
// console.log("comidas", comidasPreferidas);

//b.
// console.log("Essas são minhas comidas preferidas:");
// console.log("Comida número 1:",comidasPreferidas[0]);
// console.log("Comida número 2:",comidasPreferidas[1]);
// console.log("Comida número 3:",comidasPreferidas[2]);
// console.log("Comida número 4:",comidasPreferidas[3]);
// console.log("Comida número 5:",comidasPreferidas[4]);

//c.
// const comidaFavorita = prompt("Qual a sua comida preferida?");
// const comidaUsuario = [comidaFavorita];
// console.log(comidaUsuario);

// console.log("Comida número 1:",comidasPreferidas[0]);
// console.log("Comida número 2:",comidaUsuario);
// console.log("Comida número 3:",comidasPreferidas[2]);
// console.log("Comida número 4:",comidasPreferidas[3]);
// console.log("Comida número 5:",comidasPreferidas[4]);


//3.
//a.
let tarefas =[];

const tarefa1 = prompt("Digite a primeira tarefa do seu dia");
const tarefa2 = prompt("Digite a segunda tarefa do seu dia");
const tarefa3 = prompt("Digite a terceira tarefa do seu dia");

tarefas.push(tarefa1, tarefa2, tarefa3)

const excluirUmaTarefa = prompt("Escolha: 0, 1 ou 2")
tarefas.splice(excluirUmaTarefa, 1)
console.log(tarefas)
