let N1 = 5
let N2 = 5
let Nrec = 5

let Nfinal = (N1 + N2) / 2

if (Nfinal >= 7) {
    console.log("Passou");
} else if (Nfinal < 4) {
    console.log("Reprovado");
}else{
 if (Nrec >= 6) {
    console.log("Passou pela recuperação");
 } else {
    console.log("Reprovado");
 }
}
