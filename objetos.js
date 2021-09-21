/* Objetos

    Objetos são "super variáveis" que armazenam uma coleção de valores referenciados pelo nome.
    Essas informações podem ser recuperadas em qualquer parte do nosso programa.
    No Javascript, qualquer coias é um objeto, uma função, uma variável, etc.
*/

// Função que não retorna valor
function welcome() {
    var welcome = "Hello Javascript - valor da função"
    document.getElementById("welcome").append(welcome)
    console.log(welcome)
}

welcome()

// Um objeto literal é composto por um par de chaves, dentro delas há várias propriedades
var album = {
    title: 'Californication',
    released: '1999',
    // showInfo é uma propriedade que armazena os dados de uma função
    showInfo: function() {
        console.log(`Título do álbum: ${this.title}, lançado em ${this.released}`)
    }
}

album.showInfo()
console.log(album.title)
console.log(album.released)

// Objeto anônimo: variável que não possui nenhuma propriedade
var banda = new Object()

banda.nome = 'RHCP'
banda.origem = 'Califórnia'
banda.showInfo = function() {
    console.log(`Nome da banda: ${this.nome}, origem ${this.origem}`)
}

banda.showInfo()
console.log(banda.nome)
console.log(banda.origem)

// Outro objeto, usando forEach
banda.integrantes = ['Anthony', 'Flea', 'Chad', 'John']
banda.showIntegrantes = function() {
    this.integrantes.forEach(function(value, key){
        console.log(value)
    })
}

banda.showIntegrantes()

