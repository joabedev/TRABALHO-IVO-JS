var input = require('fs').readFileSync('stdin01', 'utf8');
var lines = input.split(' ');

let [A, B] = input.split(' ').map(item => parseInt(item))
let PRODUTO = A * B;
console.log("PRODUTO = " + PRODUTO);