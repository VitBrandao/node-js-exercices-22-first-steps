const express = require('express');

const app = express();
app.use(express.json());

// Ex.1 
const pingPong = require('./middlewares/ping');
app.use('/ping', pingPong);

// Ex.2
const hello = require('./middlewares/hello');
app.use('/hello', hello);

//Ex.3
const greeting = require('./middlewares/greeting');
app.use('/greeting', greeting);

app.listen('3002', () => console.log('Rodando na porta 3002'));
