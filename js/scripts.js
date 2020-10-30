let pokemonRepository = (function() {
  let modalContainer = document.querySelector('#modal-container');
  let container = document.querySelector('#image-container');
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let detailsUrl = 'https://pokeapi.co/api/v2/pokemon/';
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(
      '#pokemon-list'
    ); /*connects to class pokemon-list on index.html*/
    let listItem = document.createElement(
      'li'
    ); /*creats list for every pokemon on the pokemonList*/
    let button = document.createElement(
      'button'
    ); /*creats a button for every item on the list*/
    button.innerText =
      pokemon.name; /*adds the name of the pokemon to every button that has been created*/
    button.classList.add('button-list');
    button.classList.add(
      'button-class'
    ); /*creats a button class to connect to styles.css to change the style of the page*/
    button.classList.add('btn');
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    }); /*creats fucntion that if clicked on will do what the showDetails function demands*/
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // Now we add the details to the item
        item.name = item.name;
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        item.weight = details.weight;
      })
      .catch(function(e) {
        console.error(e);
      });
  }
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      showModal(item);
    });
  }
  function showModal(item) {
    let modalBody = $('.modal-body');
    let modalHeader = $('.modal-header');
    let modalTitle = $('.modal-title');
    let btnClose = $('#btnClose');

    // Implementing modal Container
    $('#modal-container').modal('show');

    modalHeader.empty();
    modalTitle.empty();
    modalBody.empty();

    //creating element for name in modal textContent
    let nameElement = $('<h3>' + item.name + '</h3>');

    //creating img modal textContent
    let imageElement = $('<img class="modal-img">');
    imageElement.attr('src', item.imageUrl);

    //creating element for height in modal textContent
    let heightElement = $('<p>' + 'Height : ' + item.height + '</p>');

    //creating element for weight in modal textContent
    let weightElement = $('<p>' + 'Weight : ' + item.weight + '</p>');

    modalHeader.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalHeader.append(btnClose);
  }
  document.querySelector('button').addEventListener('click', () => {
    showModal();
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
