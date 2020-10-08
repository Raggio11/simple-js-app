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
  type:  ['grass','posion']}
  ];
  for (let i = 0; i < pokemonList.length; i++) {
      document.write("#" + pokemonList[i].pokedexNumber + " " + pokemonList[i].name + " ");
      if (pokemonList[i].height >= 1.5) {
          document.write("(height: " + pokemonList[i].height + ") - Wow that's big!</br>")
      }
      else if (pokemonList[i].height < 1.5)
          document.write("(height: " + pokemonList[i].height + ")</br>")
  };
