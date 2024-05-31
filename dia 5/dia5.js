let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite o segundo número"))
let opcao = parseInt(("Digite o os seguintes números com as seguintes operações \n1= + \n2 = - \n3 = * \n4 = /"))

switch (opcao) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
    case 4:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
    default:
         alert("Operação Inválida!")
        break;
}