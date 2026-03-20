let valorboleto = 468
let diasatrasado = 7

if (diasatrasado == 0){
    console.log("Pagar Valor Normal", valorboleto)
}
else if(diasatrasado >=1){
    let multa = valorboleto * 0.02
    let juros = diasatrasado * 0.001 * valorboleto
    let valorfinal = valorboleto + multa + juros
    console.log("Valor final é:", valorfinal)
}