/* Crie um middleware no arquivo middlewares/validateNameSimpson.js seguindo as seguintes especifições:
Deve ser capaz de receber o parâmetro name do req.body.
Se o valor de name for igual a vazio ou nulo deve retornar o json { message: 'Nome é obrigatório'} e status 500.
Caso name seja válido deve chamar a função next do middleware.
Esse middleware deve ser chamado pela rota POST /simpsons
antes do middleware construído no requisito 6 (createSimpson)
e depois do middleware construído no requisito 7 (validateNameSimpson). */