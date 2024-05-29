let nome = prompt("coloca o nome ai")
let idade = parseInt(prompt("coloca a idade ai"))
let altura =parseInt(prompt("coloca o altura ai"))
let peso = parseInt(prompt("coloca o peso ai"))
let anoNasc = 2023 - idade
let imc = peso /(altura*altura)
console.log('Olá ' + nome + ' você tem ' + idade + ' anos, nasceu em ' + anoNasc + ', tem ' + altura + 'm de altura, pesa ' + peso + 'kg seu IMC é ' + imc + 'kg/m2')