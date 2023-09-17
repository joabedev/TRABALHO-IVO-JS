var input = require('fs').readFileSync('stdin09', 'utf8');
var lines = input.split(' ');

let [A, B] = input.split(' ').map(item => parseInt(item));

if (B % A === 0) {
    console.log("São Múltiplos")
} else {
    console.log("Não são múltiplos")
}