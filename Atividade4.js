let Vpedido = 80
let Bairros = "Outros"

if (Vpedido >= 80) {
    console.log("Frete gratis, total a pagar", Vpedido);
}
else if (Bairros === "centro") {
    let Cfrete = 5
    let Cpagar = Vpedido + 5
    console.log("Frete", Cfrete ,"Total a pagar", Cpagar);
}
else if (Bairros === "Brotas") {
    let Cfrete = 8
    let Cpagar = Vpedido + 8
    console.log("Frete", Cfrete ,"Total a pagar", Cpagar);
}
else if (Bairros === "Itapuã") {
    let Cfrete = 12
    let Cpagar = Vpedido + 12
    console.log("Frete", Cfrete ,"Total a pagar", Cpagar);
}
else if (Bairros === "Outros") {
    let Cfrete = 15
    let Cpagar = Vpedido + 15
    console.log("Frete", Cfrete ,"Total a pagar", Cpagar);
}
else {
    console.log("Erro");
}