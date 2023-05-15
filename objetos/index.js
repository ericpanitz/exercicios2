// const endereco = {
//     rua: 'de cima da luisa',
//     numero: 111,
//     cidade: 'sao leopoldo',
//     estado: 'rio grande do sul'
// }
// const usuario = {
//     nome:'Eric',
//     idade:18,
//     endereço:endereco,
//     senha:29082004
// }
// console.log(usuario)
// //1---------------------------------------------------------------------------------------------------------------------------------------
// const filmes = {
//     nomeFilme:'',
//     anoFilme:'',
//     direçaoFilme:'',
//     elencoFilme:'',
// }
// filmes.nomeFilme = 'vingadores'
// filmes.anoFilme = 2010
// filmes['direçaoFilme'] = 'irmaos russo'
// filmes['elencoFilme'] = 'Robert Downey Jr, Chris Evans, Marcos Ruffalo, Chris Hemsworth, Scarlet Johansson e Jeremias Renner'
// console.log(filmes)
// //2---------------------------------------------------------------------------------------------------------------------------------------
// const musica = {
//     nome:'eric',
//     idade: 18,
//     gostoMusica:'pipokinha'
// }
// console.log(`O nome da pessoa é ${musica.nome}, ela tem ${musica.idade} anos e gosta muito de ${musica.gostoMusica}`)
// //3---------------------------------------------------------------------------------------------------------------------------------------
// const produtos1 = [
//     {id: 1,nome:"teclado razer", preco:300},
//     {id: 2,nome:"monitor", preco:3000},
//     {id: 3,nome:"mouse", preco:400},
// ]
// produtos1[0].quantidade = 20
// produtos1[1].quantidade = 60
// produtos1[2].quantidade = 120
// console.log(produtos1)
// //4---------------------------------------------------------------------------------------------------------------------------------------
// const idProduto = prompt('insira o id do produto');
// const nomeProduto = prompt('insira o nome do produto');
// const precoProduto = Number(prompt('insira o preço do produto'));

// let produtos = [];
// function adicionarProdutos(id,nome,preco){
//     const produto = {
//     idProduto: id,
//     nomeProduto: nome,
//     precoProduto: preco,
// }
// produtos.push(produto)
// }
// adicionarProdutos(idProduto,nomeProduto,precoProduto)
// console.log(produtos)
// //exercicio1---------------------------------------------------------------------------------------------------------------------------------------
const pessoa = {
   nome: "luisa", 
   apelido: ['Lu, Lulu, Lula']
}
function imprimeMsg(obj){
        console.log(`meu nome é ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido}`)
}
imprimeMsg(pessoa)
pessoa.apelido = 'Lulinha, Lulao, Luhh'
imprimeMsg(pessoa)
//exercicio2--------------------------------------------------------------------------------------------------------------------------------------------
const pessoa1 = {
	nome: "eric", 
    idade: 18, 
    profissao: "escravo"
}
function minhaFuncao(pessoa1) {
    const nome = pessoa1.nome
    const caracterNome = nome.length
    const idade = pessoa1.idade
    const profissao = pessoa1.profissao
    const caracterProfissao = profissao.length
    return [nome, caracterNome, idade, profissao, caracterProfissao]
}

console.log(minhaFuncao(pessoa1))
//exercicio3-----------------------------------------------------------------------------------------------------------------------------------------------
const carrinho = []
const fruta1 = {
    nome: 'melancia' ,
    disponivel: true
}
const fruta2 = {
    nome: 'manga' ,
    disponivel: false
}
const fruta3 = {
    nome: 'maça',
    disponivel: true
}
function adcionarFruta(fruta){
    carrinho.push(fruta)
}
adcionarFruta(fruta1)
adcionarFruta(fruta2)
adcionarFruta(fruta3)

console.log(carrinho)
