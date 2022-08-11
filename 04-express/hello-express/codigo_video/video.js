const express = require('express');

const app = express();

app.listen('3000', () => {
    console.log('Rodando na porta 3000');
})

app.get('/', (req, res) => {
    res.send('Hello, World');
})
