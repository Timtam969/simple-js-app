//Creation of IIFE function. Using this to ensure the use only as the Local variable.
let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
  //let modalContainer = document.querySelector('#Character-modal');
  // let typeColor = {
  //   bug: '#26de81',
  //   dragon: '#ffeaa7',
  //   electric: '#fed330',
  //   fairy: '#FF0069',
  //   fighting: '#30336b',
  //   fire: '#f0932b',
  //   grass: '#00b894',
  //   ground: '#EFB594',
  //   ghost: '#a55eea',
  //   ice: '#74b9ff',
  //   normal: '#95afc0',
  //   poison: '#6c5ce7',
  //   psychic: '#a29bfe',
  //   rock: '#2d3436',
  //   water: '#0190FF'
  // };
  // ---------------------------- Adding Pokemon ------------------------------ //

  function add(item) {
    if (typeof item !== 'object') {
      window.alert('Invalid Pokemon entry');
    }
    const keys = Object.keys(item);
    if (!keys.includes('name')) {
      return 'The pokemon object is missing some required fields';
    }
    pokemonList.push(item);
  }

  (function findPokemonByName(name) {
    let result = getAll().filter(pokemon => pokemon.name === name);
    return result[0];
  })();
  // -------------------------- End Adding Pokemon ---------------------------- //

  function getAll() {
    return pokemonList;
  }

  // ------------------ loading and showing Pokemon Date ---------------------- //
  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name[0].toUpperCase() + item.name.slice(1),
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function loadDetails(item) {
    showLoadingMessage();
    let pokemon = item.detailsUrl;
    return fetch(pokemon)
      .then(function(response) {
        return response.json();
      })
      .then(function(pokemon) {
        hideLoadingMessage();
        // Now we add the details to the item
        (item.image = pokemon.sprites.other['official-artwork'].front_default),
          (item.height = pokemon.height),
          (item.types = pokemon.types.map(type => type.type.name).join(', '));
        (item.weight = pokemon.weight),
          (item.id = pokemon.id),
          (item.stats = pokemon.stats[0].base_stat);
      })
      .catch(function(e) {
        console.error(e);
      });
  }
  // ----------------- End loading and showing Pokemon Date ------------------- //

  //-------------------------- Creating Loading Image ------------------------- //
  function showLoadingMessage() {
    document.getElementById('loader').style.display = 'block';
  }

  function hideLoadingMessage() {
    document.getElementById('loader').style.display = 'none';
  }

  //---------------------- End Creating Loading Image ------------------------- //

  // ---- Creating a function to display details of the pokemen Characters ---- //
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }
  // -- END Creating a function to display details of the pokemen Characters -- //

  // ----------------- Adding the pokemon Characters to the list------------- //
  // ----------------- imaging code provided by Akunna Nwosu ---------------- //
  function addListItem(p) {
    return fetch(p.detailsUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(pokemon) {
        let newPokemons = document.querySelector('#characters-list');
        let listItem = document.createElement('li');
        listItem.classList.add('group-list-item-active');
        let button = document.createElement('button');
        let span = document.createElement('span');
        let indexNum = document.createElement('p');
        let pokemonImg = document.createElement('img');
        pokemonImg.src =
          pokemon.sprites.other['official-artwork'].front_default;
        span.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        indexNum.innerText = '# ' + pokemon.id;
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '.modal');
        button.classList.add('button-class', 'btn-block', 'btn', 'm1');

        button.appendChild(indexNum);
        button.appendChild(pokemonImg);
        button.appendChild(span);
        listItem.appendChild(button);
        newPokemons.appendChild(listItem);
        button.addEventListener('click', function() {
          showModal(pokemon);
          showDetails(p);
        });
        // -- END additon of an event listner for the button of each pokemon Character -
        hideLoadingMessage();
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  // ------------- creating the show function for the Modal ------------- //
  function showModal(pokemon) {
    // const themeColor = typeColor[item.types[0].type.name];

    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalTitle.empty();
    modalBody.empty();

    let pokeName = $('<h1>' + pokemon.name + '</h1>');

    let pokeImage = $('<img class="modal-img" style="width:70%">');
    pokeImage.attr('src', pokemon.image);
    let height = $('<p>' + 'Height:' + '<br>' + pokemon.height + '</p>');
    height.addClass('height col-6');
    let types = $('<p>' + 'Types:' + '<br>' + pokemon.types + '</p>');
    types.addClass('types col-6');
    let weight = $('<p>' + 'Weight:' + '<br>' + pokemon.weight + '</p>');
    weight.addClass('weight col-6');
    let pokeHit = $('<p>' + 'HP:' + '<br>' + pokemon.stats + '</p>');
    pokeHit.addClass('hp col-6');
    let att1 = $('<div>');
    att1.addClass('att1');
    let att2 = $('<div>');
    att2.addClass('att2');

    // ----------- End creating the show function for the Modal ----------- //

    //--------------- Enabling Title and content for Modal ---------------- //
    modalTitle.append(pokeName);
    modalBody.append(pokeImage);
    modalBody.append(att1);
    modalBody.append(att2);
    att1.append(height, weight);
    att2.append(types, pokeHit);

    // styleCard(themeColor);
  }

  // function styleCard(color) {
  // var element = document.getElementsByClassName("modal-content");
  // let attColorTypes = document.getElementsByClassName("types");
  // let attColorHeight = document.getElementsByClassName("height");
  // let attColorHp = document.getElementsByClassName("stats");
  // let attColorWeight = document.getElementsByClassName("weight");

  // element[0].style.background = `radial-gradient(circle at 50% 30%, ${color} 36%, #fff 36%)` ;
  // attColorTypes[0].style.background = `${color}` ;
  // attColorHeight[0].style.background = `${color}` ;
  // attColorHp[0].style.background = `${color}` ;
  // attColorWeight[0].style.background = `${color}` ;
  // };
  //------------- End Enabling Title and content for Modal -------------- //

  // ---------------------- Adding the search Bar function ---------------------//
  const search = document.getElementById('search');

  search.addEventListener('keyup', e => {
    const searchString = e.target.value;
    const filteredPokemons = document.querySelectorAll('li');
    filteredPokemons.forEach(e => {
      if (e.innerText.toLowerCase().includes(searchString.toLowerCase())) {
        e.style.display = 'block';
      } else {
        e.style.display = 'none';
      }
    });
  });
  // --------------------- END Adding the search Bar function --------------------

  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
    showDetails
  };
})();

// ------------------------- add in new characters -----------------------------

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
// ------------------------ END add in new characters --------------------------
