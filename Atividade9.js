let saldo = 300
let valorcompra = 470
let temlimite = true
let limit = 250

if (saldo >= valorcompra){
    let saldofinal = saldo - valorcompra
    console.log("Aprovado e Saldo final é:", saldofinal)
}
else if (saldo + limit && temlimite >= valorcompra){
    let saldofinal = (Saldo+limite) - valorcompra
    console.log("Aprovado utilizando limite e Saldo final é:", saldofinal)
}
else{
    console.log("Negado")
}