//Creation of IIFE function. Using this to ensure the use only as the Local variable.
let pokemonRepository = (function() {
  let pokemonList = [
      {name: 'Charizard ',
       height: 1.7,
       type:['Monster',' Dragon'],
       abilities:['Blaze',' Solor-Power'],
       image: '<img src = Images/charizard.svg />'
    },
      {name: 'Fearow',
      height: 1.2,
      type:['Flying'],
      abilities:['Keen-eye',' Sniper'],
      image: '<img src = Images/fearow.svg />'
    },
      {name: 'Nidoking',
      height: 1.4,
      type:['Monster',' Field'],
      abilities:['Poison-point',' Rivalry',' Sheer-force '],
      image: '<img src = Images/nidoking.svg />'
    },
      {name: 'Tentacruel',
      height: 1.6, type:['Water3'],
      abilities:['Clear-body',' Rain-dish',' Liquid-ooze'],
      image: '<img src = Images/tentacruel.svg />'
    },
      {name: 'Wailord',
      height: 14.5,
      type:['Field',' Water2'],
      abilities:['Oblivious',' Water-veil',' Pressure'],
      image: '<img src = Images/Wailord.svg />'
    },
  ];

   function add(item) {
    if (typeof item === "object" &&
        "name" in item &&
        "height" in item &&
        "type" in item &&
        "abilities" in item
    ) {
      Object.keys(item).forEach(function(property) {
        if (property === 'name', 'height', 'type', 'abilities', 'image') {
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
// --------------------- END Creation of IIFE function. ------------------------
// ----- Creating a function to display details of the pokemen Characters ------
  function showDetails(pokemon) {
    // document.querySelector('.pokemon_Button').textContent = pokemon.name;
    console.log(pokemon.name);
  }
// --- END Creating a function to display details of the pokemen Characters ----
// ----------------- Adding the pokemon Characters to the list------------------
  function addListItem(pokemon) {
    let newPokemons = document.querySelector('.characters-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    const span = document.createElement('span');
    button.innerHTML = pokemon.image;
    span.innerText = pokemon.name;
    button.classList.add('pokemon_Button');
    button.appendChild(span);
    listItem.appendChild(button);
    newPokemons.appendChild(listItem);
// --- additon of an event listner for the button of each pokemon Character ----
// ------------ Referencing function showDetails() to display info -------------
    button.addEventListener('click', function(pokemon_Button) {
      showDetails(pokemon)
// -- END additon of an event listner for the button of each pokemon Character -
});
  }

let getAll = item => pokemonList

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
     addListItem
 };
})();

// ------------------------- add in new characters -----------------------------
pokemonRepository.add({name: 'Typhlosion', height: 1.7, type:['Field'], abilities:['Flash-fire', ' Blaze'], image: '<img src = Images/typhlosion.svg />'})

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (item) {
  pokemonRepository.addListItem(item);
});
// ------------------------ END add in new characters --------------------------
