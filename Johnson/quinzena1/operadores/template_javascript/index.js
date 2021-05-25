// Exercícios de interpretação de código

//1. 

//a. false
//b. false
//c. false
//d. boolean

//2.
//Como nao colocou a sintaxe Number, ele vai concatenar um nº com outro.

//3.
// let primeiroNumero = Number(prompt("Digite um número"));
// let segundoNumero = Number(prompt("Digite outro número"));

// const soma = primeiroNumero + segundoNumero;
// console.log(soma);

//Exercícios de escrita de código

//1.
// const idadeUsuario = Number(prompt("Qual a sua idade?"));
// const idadeAmigX = Number(prompt("Qual a idade do seu amigX?"));

// const idadeMaiorDoQueAMigX = idadeUsuario >= idadeAmigX;
// console.log("Sua idade é maior do que a do seu melhor amigX?", idadeMaiorDoQueAMigX);

// const diferencaDaIdade = idadeUsuario - idadeAmigX
// console.log("A diferença de idade de vocês é", diferencaDaIdade);

//2.
// const par = Number(prompt("Insira um número par"));
// const divide = par % 2;

// console.log(divide); 

//Sempre que digitar nº par ele restará 0
//Se inserir um nº que não seja par, ele restará sempre 1

//3.
// const idadeEmAnos = Number(prompt("Quantos anos de idade você tem?"));
// console.log("A sua idade em anos é:", idadeEmAnos);

// const idadeEmMeses = Number(prompt("Quantos meses de idade você tem?"));
// console.log("A sua idade em meses é", idadeEmMeses);

// const idadeEmDias = Number(prompt("Quantos dias de idade você tem?"));
// console.log("A sua idade em dias é:", idadeEmDias);

// const idadeEmHoras = Number(prompt("Quantas horas de idade você tem?"));
// console.log("A sua idade em horas é:", idadeEmHoras);

//4.
const numeroA = Number(prompt("Digite um número"));
const numeroB = Number(prompt("Digite mais um número"));
const numeroADivisivel = numeroA % 2;
const numeroBDivisivel = numeroB % 2;


console.log("O primeiro número é maior que o segundo?", numeroA > numeroB);
console.log("O primeiro número é igual ao segundo?", numeroA === numeroB);
console.log("O primeiro número é divisível pelo segundo?", numeroA === 0);
console.log("O segundo número é divisível pelo primeiro?", numeroB === 0);