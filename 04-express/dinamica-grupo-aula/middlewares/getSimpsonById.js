/* Crie um middleware no arquivo middlewares/getSimpsonById.js seguindo as seguintes especifições:
Deve receber o id como parâmetro de rota;
Se existir um simpson correspondente ao id passado a resposta da requisição deve ter o status 200 e retornar o objeto do simpson como json.
Se não existir um simpson correspondente ao id passado a resposta da requisição deve ter o status 404 e retornar o seguinte json: { message: 'Simpson not found!'}
Esse middleware deve ser acessível através da rota GET /simpsons/:id */