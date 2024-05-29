let modelos = []
let anos = []
let valores = []
let continuar = true
let contador = 0

while (continuar) {
    let modelo = prompt("digite o nome do " + (contador + 1) + "° veiculo")
    let ano = prompt("digite o ano do veiculo")
    let valor = parseInt(prompt("informe o valor do veiculo"))
    modelos[contador] = modelo
    anos[contador] = ano
    valores[contador] = valor
    contador++
    let resposta = prompt("deseja inserir informações sobre outro veiculo? (s/n)")
    if (resposta == "n")
        continuar = false
}

console.log("veiculo(s), ano, e valor: ");
for(let i = 0; i < modelos.length; i++) {
    console.log("modelo: " + modelos[i] + " - lançado em: " + anos[i] + " - valor de venda: " + valores[i]);
}