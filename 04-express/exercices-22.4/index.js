const express = require('express');

const app = express();
app.use(express.json());

// Exercice 1 
app.get('/ping', (req, res) => {
  const response = { message: 'pong' };

  res.send(response);
});

// Exercice 2 - POST com a mensagem de Olá enviado pelo Insomnia
app.post('/hello', (req, res) => {
  const { message } = req.body; 
  console.log(message);
  res.send(message);
})

// Exercice 3 - POST com name e age feito pelo Insomnia
app.post('/greetings', (req,res) => {
  const { name, age } = req.body;

  if (age <= 17) {
    return res.status(401).send({ "message": "Unauthorized" });
  }

  return res.status(200).send({ "message": `Hello, ${name}` });
})

// Exercice 4 - PUT feito via Insomnia para (http://localhost:3000/users/vitor/20)
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.send({ "message": `Seu nome é ${name} e você tem ${age} anos`});
});

// Exercice 5 - cria API simpsons
const simpsons = require('./simpsons.json');

app.get('/simpsons', (req, res) => {
  res.status(200).send(simpsons);
});

// Exercices 6 e 7 - GETs feitos pelo Insomnia
app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;

  const findSimpson = simpsons.find((simpson) => simpson.id === id);

  if(!findSimpson) {
    return res.status(404).send({ "error": `Character #${id} does not exists`});
  }

  return res.status(200).send(findSimpson);
});

// Exercice 8 - POSTS do objeto com Insomnia
app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;

  const checkId = simpsons.find((simpson) => simpson.id === id);
  if (checkId) {
    return res.status(409).send({ message: 'id already exists' });
  }

  simpsons.push({
    "id": id,
    "name": name
  });

  console.log(simpsons);

  res.status(204).end();
})

app.listen(3333, () => {
  console.log('Rodando na porta 3000');
});