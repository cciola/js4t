// Laços de repetição (loops)

// for (é movido por declaração)
for (var a = 0; a < 10; a++) {
    console.log(`Repetindo, porque ${a} é menor que 10.`)
}

// while (é movido por condição, e fica no laço enquanto esta condição for verdadeira (true))
var i = 0;
while (i <= 10) {
    console.log(`Repetindo, porque ${i} é menor que 10.`)
    i++;
}

// array
var rhcp = ['Anthony', 'Chad', 'Flea', 'John']

// o foreach é um for dentro de um array
rhcp.forEach(function(value, key){
    console.log(`${value} na posição ${key}`)
})