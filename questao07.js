var input = require('fs').readFileSync('stdin07', 'utf8');
var lines = input.split(' ');

let [cod, qtd] = input.split(' ').map(item => parseFloat(item))
let descricao = ''
switch (cod) {
    case 1:
        descricao = "Cachorro Quente";
        total = qtd * 4.00;
        break;
    case 2:
        descricao = "X-Salada";
        total = qtd * 4.50;
        break;
    case 3:
        descricao = "X-Bacon";
        total = qtd * 5.00;
        break;
    case 4:
        descricao = "Torrada simples";
        total = qtd * 2.00;
        break;
    case 5:
        descricao = "Refrigerante";
        total = qtd * 1.50;
        break;
}
console.log(descricao,`\nTotal: R$ ${total.toFixed(2)}`);