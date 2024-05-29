// == igual | != diferente | === é igual o valor e o tipo | !== é diferente o valor e o tipo

const fome = prompt("Você está com fome? (sim) ou (nao)")
const temDinheiro = prompt("Você tem dinheiro? (sim) ou (nao)")
const restaurante = prompt("O restaurante está aberto? (sim) ou (nao)")

if(fome === "nao" && temDinheiro === "nao"){
    console.log("você vai jantar em casa!");
} else if (temDinheiro === "sim" && restaurante === "sim"){
    console.log("hoje o jantar será no seu restaurante preferido!");
} else {
    console.log("peça um delivery!")
}
