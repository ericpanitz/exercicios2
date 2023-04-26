//1
const primeiroValor = 3
const primeiroValor2 = 4
const resultadoS = primeiroValor + primeiroValor2
console.log(resultadoS)

//2
const primeiroValor3 = 3
const primeiroValor4 = 5
const resultado = (primeiroValor3 * primeiroValor4) / 2
console.log(resultado)

//3
const primeiroValor5 = 5
const primeiroValor6 = 4
const resultadoo = (primeiroValor5 - primeiroValor6) * -1
console.log(resultadoo)

//4
const numero = 234
const nummero2 = 5
const resultadooo = numero % nummero2
console.log(resultadooo)

//exercicio 1
let idadeUsuario = Number(prompt("Qual é a sua idade?"));
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo ou amiga?"));
let diferencaIdade = idadeUsuario - idadeAmigo;
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo);
console.log("A diferença de idade entre vocês é de:", diferencaIdade, "anos.");

//○ Igual: ===
//○ Diferente: !==
//○ Maior e maior igual: > e >=
//○ Menor e menor igual: < e <=
//○ Operador E: &&
//○ Operador Ou: ||
//○ Operador Não/Negação: !

//exercicio 2
const numeroP = Number(prompt('insira um numero par: '))
const resultadoooo = numeroP % 2
console.log(resultadoooo)
//resto da divisao com numero par sempre sera 0 pois  numeros pares sao divisiveis por 2 sem deixar resto, ja com numeros impares sempre restara 1

//exercicio 3
const idadeAnos = Number(prompt("Qual sua idade em anos?"));

const idadeMeses = idadeAnos * 12;
console.log("Sua idade em meses é: " + idadeMeses);

const idadeDias = idadeAnos * 365;
console.log("Sua idade em dias é: " + idadeDias);

const idadeHoras = idadeDias * 24;
console.log("Sua idade em horas é: " + idadeHoras);

//exercicio 4
let num1 = Number(prompt("Digite o primeiro número:")); 
let num2 = Number(prompt("Digite o segundo número:")); 

console.log("O primeiro número é maior que o segundo? " + (num1 > num2));
console.log("O segundo número é par? " + (num2 % 2 === 0));
console.log("Os números são diferentes? " + (num1 !== num2)); 

