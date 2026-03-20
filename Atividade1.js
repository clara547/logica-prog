let Vcompra = 100
let D5 = (Vcompra * 0.5)
let D10 = (Vcompra * 0.10)
let D15 = (Vcompra * 0.15)

if (Vcompra < 100) {
    console.log("Sem desconto, o valor da sua compra é:", Vcompra);
} else if (Vcompra >= 100 && Vcompra <= 299.99) {
    console.log("Você ganhou um desconto de 5%, o valor da sua compra é:", D15);
}else if (Vcompra >= 300 && Vcompra <= 499.99) {
    console.log("Você ganhou um desconto de 10%, o valor da sua compra é:", D10);
}else if (Vcompra >= 500) {
    console.log("Você ganhou um desconto de 5%, o valor da sua compra é:", D15);
}else{
    console.log("Erro");
}