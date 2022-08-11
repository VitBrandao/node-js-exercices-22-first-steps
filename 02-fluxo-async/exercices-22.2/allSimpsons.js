const axios = require('axios');

async function getData() {
    const response = await axios.get('https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json');
    
    // console.log('Função getData()')
    for (let index = 0; index < response.data.length; index += 1) {
        console.log(`${response.data[index].id} - ${response.data[index].name}`)
    }
}

async function getById (id) {
    const response = await axios.get('https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json');
    
    // console.log('Função getById')
    const promise = new Promise((resolve, reject) => {
        for (let index = 0; index < response.data.length; index += 1) {
            if(id.toString()  === response.data[index].id) {
                const name = response.data[index].name;
                resolve(name);
            }
        }

        reject(new Error("Id não encontrado"));
    });

    return promise;
}

// getData();

getById(10)
    .then(response => console.log(`Você digitou o ID da personagem ${response}`))
    .catch(error => console.log(error))


module.exports = getById;