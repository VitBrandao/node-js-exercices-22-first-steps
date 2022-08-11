const express = require('express');

const app = express();

function etapaFinal(req, res, next) {
    res.send('Você passou na entrevista!');
}

function etapa1 (req, res, next) {
    const percent = Math.random() * 100;

    if (percent < 10) {
        return res.send('Você reprovou na etapa 1');
    }

    next();
}

function etapa2 (req, res, next) {
    const percent = Math.random() * 100;

    if (percent < 20) {
        return res.send('Você reprovou na etapa 2');
    }

    next();
}

function etapa3 (req, res, next) {
    const percent = Math.random() * 100;

    if (percent < 30) {
        return res.send('Você reprovou na etapa 1');
    }

    next();
}

app.get('/entrevista', etapa1, etapa2, etapa3, etapaFinal);

app.listen('3000', () => console.log('Rodando na 3000'));