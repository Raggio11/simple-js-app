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
return {
  add: add,
  getAll: getAll
};
})();

pokemonRepository.getAll().forEach(function(user){
  document.write('#' + user.pokedexNumber + ' ' + user.name)
  ;
  if (user.height >= 1.5) {
    document.write("(height: " + user.height + ") - Wow that's big!</br>")
  }
  else if (user.height < 1.5)
  document.write("(height: " + user.height + ")</br>")
});
