let pokemonList = [
  { name: 'Bulbasaur', height: .7, type: ['grass','posion']},
  { name: 'Ivysour', height: 1, type:  ['grass','posion']},
  { name: 'Venusaur', height: 2, type:  ['grass','posion']}
];
for (let i=0; i< pokemonList.length; i++){
  if (pokemonList[i].height <.8 && pokemonList[i].height >.6){
    document.write(pokemonList[i].name + "(height:.7)")
  }
  else if (pokemonList[i].height <1.5 && pokemonList[i].height >.9){
    document.write(pokemonList[i].name + "(height:1)")
  }
  else if (pokemonList[i].height <2.5 && pokemonList[i].height >1.9){
    document.write(pokemonList[i].name + "(height:2)" + "- Wow, that's big!")
  }
}
