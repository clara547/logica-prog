let cliente = "PJ"
let faturamento = 80605

if (cliente =="PF"){
    console.log("Valor do plano fixo é: R$29,90 e sua categoria é:",cliente )
}
else if (faturamento <10000){
    console.log("Valor do plano é: R$99 e sua categoria é:", cliente)
}
else if (faturamento >10000 && faturamento <50000){
    console.log("Valor do plano é: R$199 e sua categoria é", cliente)
}
else if (faturamento >50000){
     console.log("Valor do plano é: R$399 e sua categoria é:", cliente)
}
else{
    console.log("Erro");
}