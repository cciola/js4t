/* Funções

    O Javascript possui funções prórpias (pop, append), mas podemos criar nossas próprias funções.
*/

// Função que não retorna valor
function welcome() {
    var welcome = "Hello Javascript - valor da função"
    document.getElementById("welcome").append(welcome)
    console.log(welcome)
}

welcome()

// Função que retorna valor
function soma(n1, n2) {
    console.log(n1 + n2)
}

soma(15, 25)

// Função que obtém o valor do retorno
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(15, 25))