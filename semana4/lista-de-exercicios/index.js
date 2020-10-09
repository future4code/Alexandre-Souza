//Exercício 1
//Fará a multiplicação com o valor da cotação que o usuário inserir no prompt. Irá mostrar o valor da multiplicação.

//Exercício 2
//È uma função witch case: ações ocup valor de tipo de investimento que tem varios tipos, ações se torna valor. 
//O segundo montante tesouro direto e não é igual a nada: entao vai pro alert, ou seja, undefinid pq o retur esta fora da função

//Exercício 3
//Ele vai percorrer desde o i=0 até o último e verificar a paridade de todos, se for
//vai acrescentar esses números dentro do array1, se não for, vai para o array2.
//depois irá imprimir a quantidade de cada instrução de console.log respectivamente: 14, pares e não pares.

//Exercício 4
//se 25 é menor que infinity, n1 se tornará 25
//console 1: n1 vai se tornar o menor n possível, no caso o -10
//console 2: maior número


//Exercício 5


const numero1 = Number(prompt('Digite um número: '))
const numero2 = Number(prompt('Digite outro número: '))


const verificaMaiorNumero = (a, b) => {
    if ( a > b ) {
         console.log('O maior é: ' , a)
         console.log(b + ' não é divisível por ' + a)
         console.log(a + ' é divisível por ' + b)
         console.log('A diferença entre eles é',  a - b)
    }else if ( b > a ) {
         console.log('O maior é: ', b)
         console.log(a + ' não é divisível por ' + b)
         console.log(b + ' é divisível por' + a)
         console.log('A diferença entre eles é ' , b - a)
    } else {
        alert('Os dois números são iguais!')
    }

}

verificaMaiorNumero(numero1, numero2)