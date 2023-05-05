//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//function perguntas(nome, idade, local, aluno){
//    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro ${local} e ${aluno} estudante.`);
//}
//perguntas('eric', 18, 'Do Lado Da Luisa', 'sou');
//perguntas(prompt("digite o nome"), Number(prompt("digite o idade")), prompt("digite o local"), prompt("você é estudante?"));

function somarNumero(numero1,numero2){
    const soma = numero1 + numero2;
    const igualnumero = numero1 >= numero2 
    const ehPar = numero1 % numero2 === 0
    return [soma,igualnumero,ehPar]
}
console.log(somarNumero(Number(prompt('digite um numero')),Number(prompt('digite um segundo numero'))));

function calculadora(primeiroValor,segundoValor){
    const soma = primeiroValor + segundoValor
    const menos = primeiroValor - segundoValor
    const vezes = primeiroValor * segundoValor
    const divide = primeiroValor / segundoValor
    return [soma,menos,vezes,divide]
}
const numero1 = Number(prompt('digite um numero'))
const numero2 = Number(prompt('digite um segundo numero'))
console.log(calculadora(numero1,numero2))

