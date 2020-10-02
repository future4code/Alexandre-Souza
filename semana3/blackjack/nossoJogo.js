/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 console.log ("Bem-vind@ ao BlackJack!");

 const respostaUsuario = confirm("Quer iniciar uma nova rodada?");

 if(respostaUsuario == true) {

   const arrayUsuario = [];
   const arrayPc = [];

   for (let i = 0; i < 2; i++) {
      arrayUsuario.push(comprarCarta());
      arrayPc.push(comprarCarta());
   }

   let totalUsuario = 0;
   let totalPc = 0;


   console.log(`Usuário - cartas: ${arrayUsuario[0]}.texto} ${arrayUsuario[1].texto} - pontuação ${totalUsuario}`);
   console.log(`Computador - cartas: ${arrayPc[0].texto} ${arrayPc[1].texto} - pontuação ${totalPc}`);


   if(totalUsuario > totalPc) {
      console.log("O usuário ganhou!")
   } else if(totalUsuario < totalPc) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }


 } else {
    console.log("O jogo acabou!")
 }