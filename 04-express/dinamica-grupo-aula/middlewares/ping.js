/* Crie um middleware no arquivo middlewares/ping.js que retorne uma resposta com status igual a 200 e a string "pong!" utilizando o send. 

Esse middleware deve ser acessível pela rota GET /ping; */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("pong!!!");
})


// const pingPong = ('/', (req, res) => {
    
// }); 

module.exports = router;