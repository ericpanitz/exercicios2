//1
const nome = prompt('insira seu nome')
const gmail = prompt('insira seu gmail')
console.log('o gmail', gmail, 'foi cadastrado com sucesso. Seja bem-vinda(o),', nome);

//const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//const ind = Number(prompt('digite um numero de 1 a 9: '))
//console.log(numeros2[ind -1]);

//2
const comida = ['arroz', 'picanha', 'batata', 'pizza', 'lasanha']
console.log(comida);
console.log(`Essas são as minhas comidas preferidas: \n ${comida[0]}\n ${comida[1]}\n ${comida[2]}\n ${comida[3]}\n ${comida[4]}\n`); //b
const comida2 = prompt('qual a sua comida preferida')
console.log(`\n ${comida[0]}\n ${comida2}\n ${comida[2]}\n ${comida[3]}\n ${comida[4]}\n`)

//3
const listaDeTarefas = []
console.log('diga 3 tarefas que você tem que fazer no dia')
const p1 = prompt('diga a primeira tarefa')
const p2 = prompt('diga a segunda tarefa')
const p3 = prompt('diga a terceira tarefa')
listaDeTarefas.push(p1, p2, p3)
console.log(`sua lista de tarefas é: ${listaDeTarefas}`)
const remover = Number(prompt('insira o numero da tarefa que você deseja remover (0, 1 ou 2)'))
listaDeTarefas.splice(remover, 1) //removendo o ', 1' ele vai aparecer so o escolhido pelo usario
console.log(`sua lista agora é esta: ${listaDeTarefas}`)
