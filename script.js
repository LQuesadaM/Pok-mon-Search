const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const idPokemon = document.getElementById("pokemon-id");
const containerImg = document.getElementById("container-img");
const namePokemon = document.getElementById("pokemon-name");
const type = document.getElementById("types");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const fetchData = async () => {
  try {
    const nameOrId = searchInput.value.toLowerCase();
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`
    );
    const data = await res.json();

    idPokemon.textContent = data.id;
    namePokemon.textContent = data.name;
    containerImg.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name}">`;
    weight.textContent = data.weight;
    height.textContent = data.height;

    //stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    spAttack.textContent = data.stats[3].base_stat;
    spDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;
  } catch (error) {
    alert("Pokémon not found");
    console.log(error);
  }
};

searchBtn.addEventListener("click", () => {
  fetchData();
});
