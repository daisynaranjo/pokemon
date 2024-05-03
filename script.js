const numeroInput = document.getElementById("pokemon#");
const pokemonImg = document.querySelector("#pokemon-img img");
let tabla = [];
function imagenPokemon(pokeId) {
  pokemonImg.src = tabla[0].sprites.front_default;
}
function getPokemon(pokeId) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (pokemon) {
      tabla.pop();
      tabla.push(pokemon);
      imagenPokemon(pokeId);
    });
}
numeroInput.addEventListener("input", function (e) {
  var id = e.target.value;
  if (id == "") {
    getPokemon(403);
  } else {
    getPokemon(e.target.value);
  }
});
