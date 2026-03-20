let senha = ""

if (senha.length < 8) {
    console.log("Senha invalida: Menos de 8 caracteres");
} else if (senha.includes("123")) {
    console.log("Senha invalida: Contém uma sequencia de 123");
} else {
    console.log("Senha Valida");
}