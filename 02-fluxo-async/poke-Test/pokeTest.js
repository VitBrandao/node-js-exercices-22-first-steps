const axios = require('axios');

async function getPokeById(id) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  console.log(`Nome do pokémon: ${response.data.name}`)
}

getPokeById(1);