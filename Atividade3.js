let Idade = 15
let Autorização = false

if (Idade >= 18) {
    console.log("acesso liberado");
} else if (Idade >= 16 && Autorização == true) {
    console.log("acesso liberado");
}else{
console.log("Acesso negado");
}