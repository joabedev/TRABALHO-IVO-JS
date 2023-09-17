var input = require('fs').readFileSync('stdin08', 'utf8');
var lines = input.split(' ');

let [A, B, C] = input.split(' ').map(item => parseFloat(item));

if ((A > B + C) || (B > C + A) || (C > A + B)) {
    let area = ((A + B) * C) / 2.0;
    console.log("Área = ", area)
} else{
    let perimetro = A + B + C;
    console.log("Perímetro = ", perimetro);
}