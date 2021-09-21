// Controles de fluxo utilizando a estrutura de condição do Javascript (if, else, else if, switch)

var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    console.log("Sou maior de idade e posso ir sozinho no show do Iron Maiden!")
} else if (idade >= 12) {
    console.log("Sou menor de idade mas posso entrar acompanhado de um responsável no show do Iron Maiden.")
} else {
    console.log("Sou criança e ainda não posso ir a grandes shows.")
}

var ingresso = prompt("Qual o tipo do ingresso?");

switch (ingresso) {
    case 'vip':
        console.log("Ficarei no camarote!")
        break;
    case 'premium':
        console.log("Ficarei na pista premium.")
        break;
    case 'comum':
        console.log("Ficarei na arquibancada.")
        break;
    // caso não seja nenhum dos itens do case, podemos estipular um valor default
    default:
        console.log("Tipo de ingresso inválido....")
        break;
}