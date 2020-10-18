let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Bulbasaur',
    pokedexNumber: 1,
    height: .7,
    type: ['grass','posion']
    },
    { name: 'Ivysour',
    pokedexNumber: 2,
    height: 1,
    type:  ['grass','posion']
    },
    { name: 'Venusaur',
    pokedexNumber: 3,
    height: 2,
    type:  ['grass','posion']
}];

function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list"); /*connects to class pokemon-list on index.html*/
  let listItem = document.createElement('li'); /*creats list for every pokemon on the pokemonList*/
  let button = document.createElement("button"); /*creats a button for every item on the list*/
  button.innerText = pokemon.name; /*adds the name of the pokemon to every button that has been created*/
  button.classList.add("button-class"); /*creats a button class to connect to styles.css to change the style of the page*/
  button.addEventListener("click", function (event) {
    showDetails(pokemon);}) /*creats fucntion that if clicked on will do what the showDetails function demands*/
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  function showDetails(pokemon){
    console.log(pokemon.name); /*Function logs pokemons name, its connected to a click function*/
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();


pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
