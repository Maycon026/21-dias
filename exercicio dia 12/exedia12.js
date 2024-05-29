let nomes = []
let senhas = []
let contador = 0

let continuar = true

while (continuar){
    let opcao = prompt("O que deseja fazer? 1 - cadastro / 2 - longin / 3 - excluir / 4 - encerrar")

    switch(opcao){
        case "1":
            nomes[contador] = prompt("qual o nome?")
            senhas[contador] = prompt("qual a senha")
            contador++

            break;

            case "2":
                let nome = prompt("qual o nome?")
                let senha = prompt("qual a senha")
                let loginValido = false

                for (let i = 0; i < nome.length; i++){
                    if (nome == nomes[i] && senha == senhas[i]){
                        loginValido = true
                    }
                }  
               if (loginValido) {
                alert("login feito com sucesso. Bem-vindo!")
               }else {
                alert("login ou senha incorretos!")
               }

               break;

               case "3":
                let nomeExcluir = prompt("Qual o nome que deseja excluir?")
                let nomesAux = []
                let senhasAux = []
                let contadorAux = 0
                
                for(let i = 0; i < contador; i++) {
                if(nomeExcluir == nomes[i]){
                    alert("Cadastro excluido com sucesso")
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }
                nomes = nomesAux
                senhas = senhasAux
                contador--

                break;

            case "4":
                continuar = false
                break;
            default:
                console.log("opcao invalida, escolha outra!")
                break;   
    }          
} function encontrarIndice(nomes) {
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nome)
            return -1;
    }
}
const nome = prompt("digite o nome do usuário:");
const senha = prompt("digite a senha:");

const indice = encontrarIndice(nome);

if (indice !== -1 && senhas[indice] === senha){
    console.log("Login bem-sucedido!");
}else {
    console.log("Nome de usuário ou senha incorretos.");
}
const nomeExcluir = prompt("digite o nome de usuário a ser excluído:");

const indiceExcluir = encontrarIndice(nome);

if(indice !== -1) {
    for(let i = indice; i < nomes.length - 1; i++) {
        nomes[i] = nomes[i + 1];
        senhas[i] = senhas[i + 1];
    }
    nomes.length--;
    senhas.length--;
    
    console.log("Cadastro excluido com sucesso!");
}else {
    console.log("nome de usuário não encontrado.");
}