/* DOM (Document Object Model)

    Representa as marcações do HTML, que são lidas pelo navegador e exibidas na página.
    É composto por vários elementos do HTML:

    html - página

    h1 - cabeçalhos/títulos
    p - parágrafos
    ul - agrupadores de listas
    li - itens de lista do elemento ul
    a - link
    form - formulários
    input do tipo texto - campos de texto
    input do tipo check - checkbox
    input do tipo radio - botões de rádio
    textarea - parágrafos
    button - botões
    span - elementos genéricos
    tables - tabelas
    td - colunas da tabela
    tr - linhas da tabela
    div - divisões
    labels - textos
*/

function somarValores() {
    var n1 = document.getElementById("numberOne").value
    var n2 = document.getElementById("numberTwo").value

    var result = parseInt(n1) + parseInt(n2)

    var divResultado = document.getElementById("resultado")

    divResultado.append("O resultado da soma é: "+ result)
}