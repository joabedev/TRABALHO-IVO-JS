var input = require('fs').readFileSync('stdin05', 'utf8');
var lines = input.split(' ');
let valor = Number(input.split(' '))
if (valor < 0 || valor > 100) {
    console.log("Fora de intervalo.")
} else if (valor >= 0 && valor <= 25) {
    console.log("Intervalo [0,25]")
} else if (valor > 25 && valor <= 50) {
    console.log("Intervalo (25,50]")  
} else if (valor > 50 && valor <= 75) {
    console.log("Intervalo (50,75]")
} else if (valor > 75 && valor <= 100) {
    console.log("Intervalo (75, 100]")
}