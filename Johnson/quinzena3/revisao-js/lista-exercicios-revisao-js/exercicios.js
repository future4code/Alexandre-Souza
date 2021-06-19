// EXERCÍCIO 01
function inverteArray(array) {
  const inverteArray = array.map((valor, i) =>
    array[array.length - 1 - i])
  return inverteArray

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i] ** 2)
    }
  }
  return numerosPares
}
 
// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i])
    }
  }
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const a = booleano1 && booleano2 && !booleano4
  const b = (booleano1 && booleano2) || !booleano3
  const c = (booleano2 || booleano3) && (booleano4 || booleano1)
  const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const resposta = [a, b, c, d, e]

  return resposta

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  let numerosPares = []
  let contador = 0

  while (contador < n) {
    numerosPares.push(contador * 2)
  
    contador++
  }
  
return numerosPares
  
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if (a !== b && b !== c && c !== a) {
    return 'Escaleno'
  } else if (a == b && b == c && c == a) {
    return 'Equilátero'
  } else if (a === b && a !== c) {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  const comparacaoDosNumeros = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: false,
    diferenca: 0
  }

  if (num1 > num2) {
    comparacaoDosNumeros.maiorNumero = num1
    comparacaoDosNumeros.maiorDivisivelPorMenor = num1 % num2 === 0
    comparacaoDosNumeros.diferenca = num1 - num2

  } else if (num2 > num1) {
    comparacaoDosNumeros.maiorNumero = num2
    comparacaoDosNumeros.maiorDivisivelPorMenor = num2 % num1 === 0
    comparacaoDosNumeros.diferenca = num2 - num1
  }
  else {
    comparacaoDosNumeros.maiorNumero = num2
    comparacaoDosNumeros.maiorDivisivelPorMenor = num2 % num1 === 0
    comparacaoDosNumeros.diferenca = 0

  }

  return comparacaoDosNumeros
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let maiorNumero = 0
  let segundoMaior = 0
  let menorNumero = 0
  let segundoMenor = 0
  
  for(let i = 0; i < array.length; i++) {
      if(maiorNumero < array[i]) {
          maiorNumero = array[i]  
      }
  }
  
  for(let i = 0; i < array.length; i++) {     
      if(maiorNumero !== array[i] && segundoMaior < array[i]) {
          segundoMaior = array[i]
      }
  }
  
  menorNumero = maiorNumero
  segundoMenor = segundoMaior
  for(let i = 0; i < array.length; i++) {
      if (menorNumero > array[i]) {
          menorNumero = array[i]
      }
  }
  
  for(let i = 0; i < array.length; i++) { 
      if(menorNumero !== array[i] && segundoMenor > array[i]) {
          segundoMenor = array[i]
      }
  }

}

// EXERCÍCIO 11
function ordenaArray(array) {
  array.sort(function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })

  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  const dadosFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}

return dadosFilme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const dadosFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}

return `Venha assistir ao filme ${dadosFilme.nome}, de ${dadosFilme.ano}, dirigido por ${dadosFilme.diretor} e estrelado por ${dadosFilme.atores[0]}, ${dadosFilme.atores[1]}, ${dadosFilme.atores[2]}, ${dadosFilme.atores[3]}.`// "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const dadosRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2)),
    area: (lado1 * lado2)
  }

  return dadosRetangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const dados = {
    nome: "Carlos",
    idade: 26,
    email: "carlos@labenu.com.br",
    endereco: "Rua do Futuro, 4"
  }
  const novosDados = {
    ...pessoa,
    nome: "ANÔNIMO"
  }

  return novosDados
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maioresDeIdade = arrayDePessoas.filter(array => {
    return array.idade > 17
  })
  return maioresDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menorDeIdade = arrayDePessoas.filter(array => {
    return array.idade < 18
  })
  return menorDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  const multiplicaPorDois = array.map(dobro => dobro * 2)
  return multiplicaPorDois
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let novoArray = []
  array.map((numero) => {
    let numeroString = numero * 2
    novoArray.push(numeroString.toString())
  })
  return novoArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let novoArray = []
  array.map((numero) => {
      if (numero % 2 === 0) {
          novoArray.push(`${numero} é par`)
      } else {
          novoArray.push(`${numero} é ímpar`)
      }
  })
  return novoArray
}


// EXERCÍCIO 18A
const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 }
]

function retornaPessoasAutorizadas(pessoas) {
  const pessoasQuePodemEntrar = pessoas.filter(p => p.altura >= 1.5 && p.idade > 14 && p.idade < 60)
    return pessoasQuePodemEntrar

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasBarradas = pessoas.filter(p => p.altura <= 1.5 || p.idade < 14 || p.idade > 60)
    return pessoasBarradas

}

// EXERCÍCIO 19A
const consultas = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
]

function ordenaPorNome(consultasNome) {
  return consultas.sort()


}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function calculaSaldo(contas) {
  contas.map((contas) => {
    let comprasTotal = 0;
    for (let i = 0; i < contas.compras.length; i++) {
      comprasTotal += contas.compras[i]
    }
    contas.saldoTotal -= comprasTotal
  })

}
