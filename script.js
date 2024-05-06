const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const idPokemon = document.getElementById("pokemon-id");
const containerImg = document.getElementById("container-img");
const name = document.getElementById("pokemon-name");
const type = document.getElementById("types");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const pokeApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"


const fetchData = async () => {
    try {
        const res = await fetch(pokeApi)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

