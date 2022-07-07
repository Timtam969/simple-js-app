//Creation of IIFE function. Using this to ensure the use only as the Local variable.
let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
  let typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    grass: "#00b894",
    ground: "#EFB594",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF"
  };



// ---------------------------- Adding Pokemon ------------------------------ //

  function add(item) {
   if (typeof item === "object") {
     Object.keys(item).forEach(function(property) {
       if (property === 'name', 'detailsUlr') {
       console.log('Entry is correct')
     } else {
     window.alert("Invalid Pokemon entry")
   }
     });
       pokemonList.push(item);
   } else {
       window.alert("Invalid Pokemon entry")
   }
  }

// -------------------------- End Adding Pokemon ---------------------------- //

  let getAll = item => pokemonList

// ------------------ loading and showing Pokemon Date ---------------------- //
  function loadList() {
    showLoadingMessage();
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function(json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
        hideLoadingMessage()
      }).catch(function (e) {
        console.error(e);
      })

    }

  function loadDetails(item) {
    showLoadingMessage();
    let pokemon = item.detailsUrl;
    return fetch(pokemon).then(function (response) {
      return response.json();
    }).then(function(pokemon) {
  // Now we add the details to the item
      item.imageUrl = pokemon.sprites.other.dream_world.front_default,
      item.height = pokemon.height,
      item.types = pokemon.types,
      item.weight = pokemon.weight,
      item.id = pokemon.id,
      item.stats = pokemon.stats;
console.log(pokemon);
    }).catch(function (e) {
      console.error(e);
    });
  }
// ----------------- End loading and showing Pokemon Date ------------------- //
//-------------------------- Creating Loading Image ------------------------- //
    function showLoadingMessage() {
        document.getElementById('modal').style.display = 'block';

    }

  function hideLoadingMessage() {
      document.getElementById('modal').style.display = 'none';

  }

//---------------------- End Creating Loading Image ------------------------- //
// --------------------- END Creation of IIFE function. --------------------- //
// ---- Creating a function to display details of the pokemen Characters ---- //
function showDetails(pokemon) {
pokemonRepository.loadDetails(pokemon).then(function (item) {
hideLoadingMessage();
});
}


// -- END Creating a function to display details of the pokemen Characters -- //


  // ----------------- Adding the pokemon Characters to the list------------- //
  // ----------------- imaging code provided by Akunna Nwosu ---------------- //
function addListItem(p) {
  // console.log(p);
  return fetch(p.detailsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (pokemon) {
      let newPokemons = document.querySelector(".characters-list");
      let listItem = document.createElement("li");
      let button = document.createElement("button");
      let span = document.createElement("span");
      let indexNum = document.createElement("p");
      let pokemonImg = document.createElement("img");
      pokemonImg.src = pokemon.sprites.other.dream_world.front_default;
      span.innerText = pokemon.name;
      indexNum.innerText = ('# '+ pokemon.id);
      button.classList.add("pokemon_Button");
      button.appendChild(indexNum);
      button.appendChild(pokemonImg);
      button.appendChild(span);
      listItem.appendChild(button);
      newPokemons.appendChild(listItem);
       button.addEventListener("click", function (pokemon_Button) {
           showModal(pokemon);
          showDetails(p);
      // -- END additon of an event listner for the button of each pokemon Character -
      });
      hideLoadingMessage();
     })
     .catch(function (e) {
      console.error(e);
    });
}

let modalContainer = document.querySelector('#Character-modal');

// ------------- creating the show function for the Modal ------------- //
  function showModal(pokemon) {
    function addListItem(p) {
      // console.log(p);
      return fetch(p.detailsUrl)
        .then(function (response) {
          return response.json();
           // console.log(p);
        })
      }
    modalContainer.innerHTML = '';
    const name1 = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const poke_types = pokemon.types.map(type => type.type.name).join(', ');
    const image = pokemon.sprites.other.dream_world.front_default;
    const hitPoints = pokemon.stats[0].base_stat;
    const themeColor = typeColor[pokemon.types[0].type.name];
    console.log(themeColor);
// ----------- End creating the show function for the Modal ----------- //

//--------------- Enabling Title and content for Modal ---------------- //
// clear all existing modal content
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let name = document.createElement('div');
    name.classList.add('name');
    let pokeName = document.createElement('div');
    pokeName.innerText = name1;

    let pokeImage = document.createElement('img');
    pokeImage.src = image;

    let attributes = document.createElement('div')
    attributes.classList.add('attributes')

    let height = document.createElement('div');
    height.classList.add('height');
    height.innerText = 'Height:';

    let pokeHeight = document.createElement('div');
    pokeHeight.classList.add('pokeHeight');
    pokeHeight.innerText = pokemon.height;

    let types = document.createElement('div');
    types.classList.add('Types');
    types.innerText = 'Types:';

    let pokemonType1 = document.createElement('div');
    pokemonType1.classList.add('pokemonType1');
    pokemonType1.innerText = poke_types;

    let weight = document.createElement('div');
    weight.classList.add('weight');
    weight.innerText = 'Weight:';

    let pokeWeight = document.createElement('div');
    pokeWeight.classList.add('pokeWeight');
    pokeWeight.innerText = pokemon.weight;

    let pokeHit = document.createElement('div');
    pokeHit.classList.add('stats');
    pokeHit.innerText = 'HP:';

    let pokemonHit = document.createElement('div');
    pokemonHit.classList.add('PokemonHit');
    pokemonHit.innerText = hitPoints;

    name.append(pokeName);
    modal.append(name);
    modal.append(pokeImage);
    types.append(pokemonType1);
    height.append(pokeHeight);
    weight.append(pokeWeight);
    pokeHit.append(pokemonHit);
    attributes.appendChild(height);
    attributes.appendChild(types);
    attributes.appendChild(weight);
    attributes.appendChild(pokeHit);
    modal.append(attributes);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
    styleCard(themeColor);
  }

  function styleCard(color) {
    var element = document.getElementsByClassName("modal");
    let attColorTypes = document.getElementsByClassName("Types");
    let attColorHeight = document.getElementsByClassName("height");
    let attColorHp = document.getElementsByClassName("stats");
    let attColorWeight = document.getElementsByClassName("weight");
    // let pokeButton = document.getElementsByClassName("pokemon_Button");
    // console.log(pokeButton);
   element[0].style.background = `radial-gradient(circle at 50% 30%, ${color} 36%, #fff 36%)` ;
   attColorTypes[0].style.background = `${color}` ;
   attColorHeight[0].style.background = `${color}` ;
   attColorHp[0].style.background = `${color}` ;
   attColorWeight[0].style.background = `${color}` ;
   // pokeButton[0].style.background = `${color}` ;
  };
  //------------- End Enabling Title and content for Modal -------------- //

  let dialogPromiseReject; // This can be set later, by showDialog

  // ------------- creating the hide function for the Modal ------------- //
  function hideModal() {
    modalContainer.classList.remove('is-visible');

    if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }

  // ----------- End creating the hide function for the Modal ----------- //

  // ------- creating the event lisdtener function for the Modal -------- //
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    //when activating only the container then chance css for modal
     let target = e.target;
     if (target === modalContainer) {
      hideModal();
     }
  });









// -------------- END Adding the pokemon Characters to the list ----------------

// ---------------------- Adding the search Bar function -----------------------
 const search = document.getElementById('search');

 search.addEventListener('keyup', (e) => {
        const searchString = e.target.value;
        const filteredPokemons = document.querySelectorAll("li");
        filteredPokemons.forEach(e => {
            if (e.innerText.toLowerCase().includes(searchString.toLowerCase()))  {
                e.style.display = "block";
            }
            else {
                e.style.display = "none";
            }
        })
    })

// --------------------- END Adding the search Bar function --------------------

   return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
    showDetails,
 };
})();

// ------------------------- add in new characters -----------------------------

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
// ------------------------ END add in new characters --------------------------
