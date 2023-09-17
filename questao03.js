var input = require('fs').readFileSync('stdin03', 'utf8');
var lines = input.split(' ');

let [A, B, C, D] = input.split(' ').map(item => parseInt(item))
let DIFERENCA = (A * B) - (C * D);
console.log("DIFERENCA = " + DIFERENCA);