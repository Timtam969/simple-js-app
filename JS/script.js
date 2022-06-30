//Creation of IIFE function. Using this to ensure the use only as the Local variable.
let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';



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
      }).then(function (json) {
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
    }).then(function (pokemon) {

      // Now we add the details to the item
      item.imageUrl = pokemon.sprites.other.dream_world.front_default,
      item.height = pokemon.height,
      item.types = pokemon.types,
      item.weight = pokemon.weight,
      item.id = pokemon.id
      console.log(pokemon)
      hideLoadingMessage();
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

  console.log(pokemon);
});
}


// -- END Creating a function to display details of the pokemen Characters -- //
// ----------------- Adding the pokemon Characters to the list------------------
  function addListItem(pokemon) {
    let newPokemons = document.querySelector('.characters-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    let span = document.createElement('span');
    let pokemonImg = document.createElement('img');
    pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`;


    //button.innerHTML = pokemon.imageUrl;
    span.innerText = pokemon.name;
    button.classList.add('pokemon_Button');
    button.appendChild(pokemonImg);
    button.appendChild(span);
    listItem.appendChild(button);
    newPokemons.appendChild(listItem);
// --- additon of an event listner for the button of each pokemon Character ----
// ------------ Referencing function showDetails() to display info -------------
    button.addEventListener('click', function(pokemon_Button) {
      showDetails(pokemon);
// -- END additon of an event listner for the button of each pokemon Character -
    });
  }





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
