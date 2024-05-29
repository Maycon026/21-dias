let nome = prompt("insira seu nome")
let idade = parseInt(prompt("insira a sua idade"))
let peso = (prompt("insira seu peso"))
let altura = (prompt("insira sua altura"))
let profissao = prompt("Diga a sua profissão")
let ano = prompt("insira o ano em que você nasceu")
let mes = prompt("insira o mes em que você nasceu")
let dia = prompt("insira o dia em que você nasceu")
let idadeTt = 12 * idade
let semanas = (30 - dia)/ 7

console.log("Nome, " + nome + ", Tem " + idade + " anos de idade, pesa: " + peso + ", profissão: " + profissao + ", Altura: " + altura )

if(idade >= 18){
    console.log("Está liberado pra tomar umas geladas") 
}else if(idade < 18){
    console.log("Sem gelada pra você")
}
if(idade = 18){
    console.log("Você tem, " + idadeTt + " Meses")
}else if(idade < 18){
    console.log("Você tem, " + idadeTd + mes - 1  + " Meses")
}
if(semanas < 1){
    false
}else if (semanas >=1){
    console.log(semanas + " semanas")
}
if(parseInt(semanas - 30 )/ 7){
    console.log("e " + semanas + " dias de vida")
}else if(parseInt(semanas - 30 )/ 7){
    console.log("e " + semanas + " dias de vida")
}
