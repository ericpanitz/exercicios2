function calculaArea(num1,num2){
    const altura = num1;
    const largura = num2;
    const area = altura * largura;
    return area
}
console.log(calculaArea(30,5));
console.log(calculaArea(20,5));
console.log(calculaArea(10,5));
console.log(calculaArea(5,5));
console.log(calculaArea(1,5));
//ctrl em cima da palavra localiza a função

function recebaNome(nome){
    console.log(`ola ${nome}`);
}
recebaNome('eric');
recebaNome('guilherme');
recebaNome('luisa');

function somarNumero(numero1,numero2){
    return numero1 + numero2;
}
console.log(somarNumero(Number(prompt('digite um numero')),Number(prompt('digite um segundo numero'))));

function filtroArray(arraynumeros){
    const primeironumero = arraynumeros[0]
    const ultimonumero = arraynumeros[arraynumeros.length -1] //LENGTH
    return [primeironumero,ultimonumero]
}
const numeros = [10, 20, 50, 120];
console.log(filtroArray(numeros));

//arrow
const dizeralgo = () =>{
    console.log("ola mundo");
}
dizeralgo()

//nomeada
function dizerAlgo(){
    console.log("hello world");
}

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."