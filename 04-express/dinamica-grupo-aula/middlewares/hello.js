/* Crie um middleware (handler) no arquivo middlewares/hello.js. 
Você deve fazer com que esse middleware recebe o atributo name pelo body da requisição e a resposta do middleware deve ser { "message": "Hello, <name>!" }, onde <nome do usuário> deve ser o nome enviado. O status da resposta deve ser 201.
Esse middleware deve ser acessível pela rota POST /hello; */

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    res.status(201).json({ "message": `Hello ${name}`})
});

module.exports = router;