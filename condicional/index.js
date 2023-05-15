// const numero1 = Number(prompt('insira um numero'))
// const numero2 = Number(prompt('insira outro numero'))
// if (numero1>numero2){
//     console.log(`${numero1} é maior que ${numero2}`)
// }
// else if (numero2>numero1){
//     console.log(`${numero1} nao é maior que ${numero2}`)
// }
// else{
//     console.log(`${numero1} é igual a ${numero2}`)
// }
// if (numero1 % 2 === 0){
//     console.log('o numero é par')
// }
// else {
//     console.log('o numero é impar')
// }

//SWCHTI CASE
// let paisdeOrigem = prompt(" Digite o pais onde nasceu ")

// switch(paisdeOrigem.toLowerCase()){
// case `Brasil`.toLowerCase():
//     console.log(`Brasileiro`)
//     break

// case `EUA`.toLowerCase():
//     console.log(`Norte Americano`)
//     break

// case `Inglaterra`.toLowerCase():
//     console.log(`Ingles`)
//     break

// default:
//      console.log(`Nacionalidade não encontrada`)
//      break

// }


// let pokemon = prompt('escolha seu pokemon inicial: (bulbassauro, charmander ou squirtle)')
// switch (pokemon.toLowerCase()){
//     case "bulbassauro":
//         console.log('pokemon bulbassauro do tipo planta e veneno')    
//         break;
//     case "charmander":
//         console.log('pokemon charmander do tipo fogo')
//         break;
//    case "squirtle":
//         console.log('pokemon squirtle do tipo agua')
//         break;
//     default:
//         console.log('voce escolheu um pokemon invalido, ira receber um pikachu do tipo eletrico')
//         break;
// }

// function pessoa(){
//     idade = Number(prompt('voce tem quantos anos?'));
//     ensinoMedio = prompt('voce concluiu o ensino medio? digite SIM ou NÃO').toLowerCase() === "sim";
//     curso = prompt('voce ja esta cursando alguma faculdade? digite SIM ou NÃO').toLowerCase() === "nao";
//     if (ensinoMedio && idade >= 18 && curso){
//         console.log('voce pode cursar na faculdade')
//     }
//         else{    
//         if(idade<18){
//         console.log('voce não pode cursar na faculdade pois é menor de idade')
//     }
//         if(ensinoMedio !== "sim"){
//         console.log('voce não pode cursar na faculdade pois nao concluiu o ensino medio')
//     }
//         if(curso !== "nao"){
//         console.log('voce não pode cursar na faculdade pois ja esta matriculado em alguma faculdade')
//     }
//     }
    
// }
// console.log(pessoa())

//exercicio1
// const idade = Number(prompt('insira sua idade: '))
//     if(idade>=18){
//         console.log('voce pode tirar a carteira de motorista')
//     }
//     else{
//         console.log('voce nao pode tirar a carteira de motorista')
    // }

// exercicio2
// const turno = prompt('qual turno voce estuda? insira V para vespertino, N para noturno ou M para manha:').toUpperCase   
// if (turno === 'V'){
//         console.log('Boa tarde');
//     }
//     if (turno === 'N'){
//         console.log('Boa noite');
//     }
//     if (turno === 'M'){
//         console.log('Bom dia');
//     }

//exercicio3
// let turno = prompt('qual turno voce estuda? insira V para vespertino, N para noturno ou M para manha:')
// switch (turno.toLowerCase()){
//     case "v":
//         console.log('boa tarde');
//         break;
//     case "m":
//         console.log('bom dia');
//         break;
//     case "n":
//         console.log('boa noite');
//         break;
//     default:
//         console.log('voce insiriu um turno invalido');
// }

//exercicio4
// const filme = prompt('diga o genero do filme que irao assistir: ').toLowerCase()
// const preco = Number(prompt('insira o preço do ingresso: '))
// if (filme === 'fantasia' && preco <= 15){
//         console.log('Bom filme!')
//     }
//     if (preco >15){
//         console.log('escolha outro filme o ingresso custa mais que 15 reais')
//     }
//     if (filme !== 'fantasia'){
//         console.log('escolha outro filme seu amigo(a) nao gosta desse genero')
//     }
//     if (filme !== 'fantasia' && preco > 15){
//         console.log('porra errou tudo')
//     }
// const mor = prompt('a bela donzela aceita voltar com o caro eric? (responda com "s" para sim ou "n" para nao)').toLowerCase();
//     if (mor === "s")
//         alert('otima escolha senhora, eu te amo mais que tudo meu bem, e quero voce para todo sempre')
//     while (mor === "s"){
//         prompt('a bela donzela aceita voltar com o caro eric? (responda com "s" para sim ou "n" para nao)')
//     }
let resposta = prompt('minha linda perfeita e maravilhosa ex aceita voltar comigo? (responda "s" para sim ou "n" para nao)');

while (resposta !== 's') {
  resposta = prompt('minha linda perfeita e maravilhosa ex aceita voltar comigo? (responda "s" para sim ou "n")');
}

alert('te amo meu amor que bom que voltamos to com saudade');
