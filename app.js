const livros = require('./database.js')

livros.sort((a,b) => a.paginas - b.paginas)

const pegarEntrada = require ('readline-sync')

// busca por categoria
const categoriaLivros = pegarEntrada .question ('Deseja pesquisar os livros por categoria? (S/ N)')
if (categoriaLivros. toLocaleUpperCase() === 'S'){
 console.log('Essas são as categorias dos livros:')
 console.log('Fábula, Literatura infantil, Romance, Ciencias humanas, Autoajuda')
 
 const qualCategoria = pegarEntrada .question ('Qual dessas categorias deseja escolher?')
 const escolhaCategoria = livros.filter(livros => livros.categoria === qualCategoria)
 console.table(escolhaCategoria)
 

 } else{
     (categoriaLivros. toLocaleUpperCase() === 'N')
 console.log('Esses são todos os livros disponíveis:')
 console.table(livros)
 }

 //recomendação de livros

const recomendaçãoLivros= pegarEntrada.question('Deseja recomendacao de livros ja lidos? (S/ N)')
const recomendados = livros.filter(livros => livros.leu === 'true')
if(recomendaçãoLivros. toLocaleUpperCase() === 'S'){
console.log('Esses são os livros que já li e recomendo')
console.table(recomendados)
}
else {    
(recomendaçãoLivros.toLocaleUpperCase() === 'N')
console.log('Tudo bem!')
}

 // listar os livros que ainda não foram lidos- lista de desejo
const listaDesejos = pegarEntrada.question('Posso te mostrar minha lista de desejos com livros ainda nao lidos? (S / N)')
const naoLidos = livros.filter(livros => livros.leu === false)
if(listaDesejos.toLocaleUpperCase() === 'S'){
console.log('Ok, esta é a minha lista de desejos')
console.log('Obrigade por acessar minha biblioteca de livros!')
console.table(naoLidos)
 }
 else{
     (listaDesejos.toLocaleUpperCase() === 'N')
     console.log('Obrigade por acessar minha biblioteca de livros!')

 }
 