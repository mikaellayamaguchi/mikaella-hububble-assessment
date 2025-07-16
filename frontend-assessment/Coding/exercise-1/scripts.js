console.log('welcome to pokefetch')

let pokemonData;

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(res =>res.json()) 
.then(data => 
{ 
console.log(data)
  document.querySelector("#img").src = data.sprites.front_default;

  document.querySelector("#name").textContent = "name: " + data.name;

  document.querySelector("#typ").textContent = "type: " + data.types[0].type.name;

  document.querySelector("#hp").textContent = "hp: " + data.stats[0].base_stat;

  document.querySelector("#att").textContent = "attack: " + data.stats[1].base_stat;

  document.querySelector("#def").textContent = "defense: " + data.stats[2].base_stat;

  document.querySelector("#satt").textContent = "special attack: " +  data.stats[3].base_stat;

  document.querySelector("#sdef").textContent = "special defense " +  data.stats[4].base_stat;

  document.querySelector("#speed").textContent = "speed: " + data.stats[5].base_stat;
}
)
