//Criando uma pequena aplicação com Node.js

//chamando o módulo http para cuidar das requisições http
const http = require('http')

//rotas a serem definidas na nossa aplicação
//
//    1 - Pagina home
//    2 - Pagina Contato (Dados.json)
//    3 - Url invalida
//

//constante dados recebe os valores de um arquivo Json(JavaScript Object Notation)
const dados = require('./dados.json').contato

//criando o servidor
//res é a resposta enviada
//req é a requisição recebida
const server = http.createServer((req, res) =>{
    //array de respostas
    const resp = []
    resp['/'] = '<h1>Home</h1>'
    resp['/contato'] = `<h1>Informacoes de Contato</h1>
                        <br/><h2>Nome: ${dados.nome}</h2>
                        <br/><h2>Telefone: ${dados.telefone}</h2>
                        <br/><h2>Email: ${dados.email}</h2>`
    resp['semUrl'] = '<h1>Url nao encontrada</h1>'

    res.end(resp[req.url] || resp['semUrl'])
})

//colocando o servidor no ar
//porta=3001
//ip=localhost
server.listen(3001,'localhost',informacoesServer())

//função executada no momento em que o servidor está dsiponível
function informacoesServer(){
    console.log("Servidor rodando em: http://localhost:3001")
    console.log("Para derrubar o servidor: ctrl + c")
}