var input = require('fs').readFileSync('stdin04', 'utf8');
var lines = input.split(' ');

let [matricula, horas_trabalhadas, valor_hora] = input.split(' ').map(item => parseFloat(item))
let salario = horas_trabalhadas * valor_hora
console.log("MATRICULA = " + matricula, "\nSALARIO = " + salario)