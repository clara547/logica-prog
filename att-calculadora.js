let num1 = 10
let num2 = 10
let operador = "+"

if(operador === "+") {
    console.log(num1 + num2);
}
else if (operador === "-") {
    console.log(num1 - num2);
}
else if (operador === "*") {
    console.log(num1 * num2);
}
else if (operador === "/" ) {
    console.log(num1 / num2);
    if (operador === "/" && num1 == 0 || num2 == 0) {
       console.log("erro");
    } else {
         console.log(num1 / num2);
    }
}


else {

}

