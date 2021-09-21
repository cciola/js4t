/*
    Arrays

    São coleções de dados que podemos utilizar para gravar dados simples, ou até mesmo objetos, funções ou atributos.

    Existem duas formas de se criar um array no Javascript:
    var array = new Array();
    ou
    var array = [];
*/

var rhcp = ['Anthony', 'Chad', 'Flea'];
console.log(rhcp)

// se declararmos um typeof, retornará o array como um objeto, e não seus valores, conforme acima
console.log(typeof rhcp)

// o push adiciona um item dentro do array, na última posição
rhcp.push('John')
console.log(rhcp)

// a função pop() remove o último registro do array
rhcp.push('Josh')
rhcp.pop();
console.log(rhcp)

// a função shift() remove o primeiro registro do array
rhcp.shift();
console.log(rhcp)

// o indexOf mostra a posição do registro no array
var indice = rhcp.indexOf('Flea')
console.log(indice)

// para remover um registro com base na posição que ele se encontra, utilizamos o splice
var indice = rhcp.indexOf('Flea')
rhcp.splice(indice)
console.log(rhcp)