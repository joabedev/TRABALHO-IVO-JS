var input = require('fs').readFileSync('stdin10', 'utf8');
var lines = input.split(' ');
let salario = Number(input);
if (salario >= 0 && salario <= 400.00) {

    novo_salario = salario + (salario * (15 / 100));
    reajuste = novo_salario - salario;
    percentual = (reajuste / novo_salario) * 100 + 1;
    console.log("Novo salário:", novo_salario.toFixed(2),
                "\nReajuste ganho:", reajuste.toFixed(2),
                "\nEm percentual:", Math.ceil(percentual.toFixed(2)), "%");

} else if (salario >= 400.01 && salario <= 800.00) {

    novo_salario = salario + (salario * (12 / 100));
    reajuste = novo_salario - salario;
    percentual = reajuste / novo_salario * 100 + 1;
    console.log("Novo salário:", novo_salario.toFixed(2),
                "\nReajuste ganho:", reajuste.toFixed(2),
                "\nEm percentual:", Math.ceil(percentual.toFixed(2)), "%");

} else if (salario >= 800.01 && salario <= 1200.00) {

    novo_salario = salario + (salario * (10 / 100));
    reajuste = novo_salario - salario;
    percentual = reajuste / novo_salario * 100;
    console.log("Novo salário:", novo_salario.toFixed(2),
                "\nReajuste ganho:", reajuste.toFixed(2),
                "\nEm percentual:", Math.ceil(percentual.toFixed(2)), "%");

} else if (salario >= 1200.01 && salario <= 2000.00) {

    novo_salario = salario + (salario * (7 / 100));
    reajuste = novo_salario - salario;
    percentual = reajuste / novo_salario * 100;
    console.log("Novo salário:", novo_salario.toFixed(2),
                "\nReajuste ganho:", reajuste.toFixed(2),
                "\nEm percentual:", Math.ceil(percentual.toFixed(2)), "%");

} else if (salario > 2000.00) {

    novo_salario = salario + (salario * (4 / 100));
    reajuste = novo_salario - salario;
    percentual = reajuste / novo_salario * 100;
    console.log("Novo salário:", novo_salario.toFixed(2),
                "\nReajuste ganho:", reajuste.toFixed(2),
                "\nEm percentual:", Math.ceil(percentual.toFixed(2)), "%");
                
}