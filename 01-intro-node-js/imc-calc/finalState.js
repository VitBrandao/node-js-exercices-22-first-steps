let finalState = '';

const imcStatus = (imc) => {
    if (imc < 16) {
        finalState = 'Magreza Grave';
    } else if (imc > 16 && imc < 17) {
        finalState = 'Magreza Moderada';
    } else if (imc > 17 && imc < 18.5) {
        finalState = 'Magreza Leve';
    } else if (imc > 18.5 && imc < 25) {
        finalState = 'Saudável';
    } else if (imc > 25 && imc < 30) {
        finalState = 'Sobrepeso'
    } else if (imc > 30 && imc < 35) {
        finalState = 'Obesidade Grau I'
    } else if (imc > 35 && imc < 40) {
        finalState = 'Obesidade Grau II (Severa)'
    } else if (imc >= 40) {
        finalState = 'Obesidade Grau III (Mórbida)'
    }

    return finalState;
}

module.exports = imcStatus;
