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
  const mensagemUsuario = prompt("Digite uma saudação");
  const fraseMaiuscula = mensagemUsuario.toLowerCase()

console.log(fraseMaiuscula);
}

// Exercício 7
function calculaIngressosEspetaculo() {


}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {

}
// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}