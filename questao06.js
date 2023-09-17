var input = require('fs').readFileSync('stdin06', 'utf8');
var lines = input.split(' ');

let [A, B, C] = input.split(' ').map(item => parseFloat(item));

if(A > (B + C) || B > (A + C) || C > (A + B)) {
    console.log("Não é um triângulo!")
} else if (A === B && B === C && C === A) {
    console.log("Equilátero")
} else if (A != B && B !== C && C !== A) {
    console.log("Escaleno")
} else if ((A === B !== C) || (B === C !== A) || (C === A !== B)) {
    console.log("Isósceles")
}