var input = require('fs').readFileSync('stdin02', 'utf8');
var lines = input.split(' ');

let [nota_1, nota_2] = input.split(' ').map(item => parseFloat(item));
let MEDIA = (nota_1 * 3.5 + nota_2 * 7.5) / 11
console.log("MEDIA = " + MEDIA.toFixed(2))