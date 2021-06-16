// Exercícios de interpretação de código
//1.

// a) 
// Vai ser impresso nome, o apelido, o index e a array. Uma vez para cada item dentro da array.

//2.
// a) Vai ser impresso só o nome. Porque é a unica informação salva no return.

//3.
// a) Vai ser impresso Amanda e Lais, porque o apelido delas é diferente de Chijo./ É um map, que vai percorrer cada item, colocar o índice do array, mostrando que cada nome tem seu apelido e onde está no seu índice

//Exercícios de escrita de código
//1.
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//a.
//  const dogNomes = pets.map((pets) => {
//     return pets.nome
//  })

//  console.log("Os nomes dos Dogs são: ", dogNomes)

//b.
// const dogNomes = pets.filter((pets) =>  {
//     return pets.raca === "Salsicha"
// })

// console.log("Os dogs da raça Salsicha são: ", dogNomes)

//c.
// const cuPoodle = pets.filter((pets) => {
//     return pets.raca === "Poodle"
// }).map((pets) => {
//     return pets.nome
// })

// console.log("Você ganhou um cupom de desconto de 10% para tosar o/a: ", cuPoodle)

//2.
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//a.
// const produtosNomes = produtos.map((produtos) => {
//     return produtos.nome
// })

// console.log(produtosNomes)

// b.
// const arrayDesconto = produtos.map((item) => {
//     return ({nome: item.nome, preco: 0.05 * item.preco})
    
// })
// console.log((arrayDesconto))

//c.
// const categoriaBebidas = produtos.filter((produtos) => {
//     return produtos.categoria === "Bebidas"
// })

// console.log("As bebidas são: ", categoriaBebidas)

//d.
// const seTemYpe = produtos.filter((produtos) => {
//     return produtos.nome.includes("Ypê")
// })

// console.log("Os produtos Ypê são: ", seTemYpe)

//e.
// const produtosYpe = produtos.filter((produtos) => {
//     return produtos.nome.includes("Ypê")
// })

// const mensagemPreco = produtosYpe.map((item) => {
//     return `Compre o produto ${item.nome} por ${item.preco}`
// })

// console.log(mensagemPreco)