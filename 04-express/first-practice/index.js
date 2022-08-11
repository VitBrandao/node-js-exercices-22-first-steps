const express = require('express');

const app = express();

const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
]; 

app.get('/drinks', function (req, res) {
    const { limit } = req.query;

    const result = drinks.slice(0, limit || drinks.length);

    res.send(result);
});

app.get('/drinks/:id', (req, res) => {
    const { id } = req.params;

    const findDrink = drinks.find((drink) => drink.id === parseInt(id));

    if (!findDrink) {
        res.status(404).send({ message: `Drink ${id} não existe`});
    }

    res.send(findDrink);
});

app.listen(3002, () => {
    console.log('Rodando na porta 3002');
});