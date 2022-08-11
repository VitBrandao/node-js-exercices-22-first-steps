/* Crie um middeware no arquivo middlewares/greeting.js. Você deve fazer com que esse middleware recebe o atributos name e age pelo body da requisição. Esse middleware deve seguir a seguinte lógica:
Se o valor do atributo age for maior ou igual a 18 deve a resposta deve ter o status 200 e o json { "message": "Hello, <name>!" }
Se o valor do atributo age for menor que 18 a resposta deve ter o status 401 e o json { "message": "Unauthorized" }.
Esse middleware deve ser acessível pela rota POST /greeting.*/

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, age } = req.body;

    if (age < 18) {
        return res.status(401).json({ "message": "Unauthorized"});
    }

    return res.status(200).json({ "message": `Hello ${name} !!!` })
});

module.exports = router;