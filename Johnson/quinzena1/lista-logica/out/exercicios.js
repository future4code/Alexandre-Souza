// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do retângulo"));
  const largura = Number(prompt("Digite a largura do retângulo"));
  const resultado = (altura * largura);

console.log(resultado);
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual"));
  const anoSeuNascimento = Number(prompt("Digite o ano do seu nascimento"));
  const resultado = (anoAtual - anoSeuNascimento);

console.log(resultado);
}

// Exercício 3
function calculaIMC() {
  const seuPeso = Number(prompt("Quantos quilos você pesa?"));
  const suaAltura = Number(prompt("Qual a sua altura?"));
  const resultadoIMC = seuPeso / (suaAltura * suaAltura)

console.log(resultadoIMC);
}


// Exercício 4
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Qual é o seu nome?");
  const idadeUsuario = prompt("Qual a sua idade?");
  const emailUsuario = prompt("Qual o seu e-mail?");

console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`);
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual a sua primeira cor favorita?");
  const cor2 = prompt("Qual a sua segunda cor favorita?");
  const cor3 = prompt("Qual a sua terceira cor favorita?");
  
  const arrayCores = [cor1, cor2, cor3];

console.log(arrayCores); 
}
// Exercício 6
function retornaStringEmMaiuscula() {
  const saudacao = prompt("Digite uma saudação");
  const fraseMaiuscula = saudacao.toUpperCase()

console.log(fraseMaiuscula);
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = prompt("Qual o custo de um espetáculo teatral?");
  const valorIngresso = prompt("Qual o valor do ingresso?");
  

console.log(custoEspetaculo / valorIngresso);

}

// Exercício 8
function checaStringsMesmoTamanho() {
  const mensagem1 = prompt("Escolha um animal");
  const mensagem2 = prompt("Escolha um País");
  
console.log(mensagem1.length === mensagem2.length);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Escolha uma cor");
  const string2 = prompt("Escolha outra cor");

const igualdade = string1.toUpperCase() === string2.toUpperCase();

console.log(igualdade);
}
// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual?"));
  const anoNasc = Number(prompt("Digite seu ano de nascimento"));
  const anoRg = Number(prompt("Digite seu RG"));

  const idade = anoAtual - anoNasc;
  const emissao = anoAtual - anoRg;

  console.log((idade <= 20 && emissao >= 5) || (idade > 20 && idade <= 50 && emissao >= 10) || (idade > 50 && emissao >= 15));
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}