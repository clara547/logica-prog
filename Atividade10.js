let distanciakm = 7
let orcamento = 19

if(distanciakm<= 2){
    console.log("A pé")
}
else if(distanciakm<=8 && orcamento >=10){
    console.log("Ônibus")
}
else if(distanciakm<=15 && orcamento >=25){
    console.log("Moto/Carro por app")
}
else{
    console.log("Não é possivel com esse orçamento")
}