let Ckwh = 201

if (Ckwh <= 100) {
    let uso = 0.6
    console.log(Ckwh * uso);
} else if (Ckwh <= 200) {
    let uso = 0.75
    console.log(Ckwh * uso);
} else {
    let uso = 0.90
    console.log(Ckwh * uso);
}