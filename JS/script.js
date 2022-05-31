
//Creation of IIFE function. Using this to ensure the use only as the Local variable.
let pokemonRepository = (function() {
  let pokemonList = [
    {name: 'Charizard', height: 1.7, type:['Monster','Dragon'], abilities:['Blaze','Solor-Power']},
    {name: 'Fearow', height: 1.2, type:['Flying'], abilities:['Keen-eye','Sniper']},
    {name: 'Nidoking', height: 1.4, type:['Monster','Field'], abilities:['Poison-point','Rivalry','Sheer-force']},
    {name: 'Tentacruel', height: 1.6, type:['Water3'], abilities:['Clear-body','Rain-dish','Liquid-ooze']},
    {name: 'Wailord', height: 14.5, type:['Field','Water2'], abilities:['Oblivious','Water-veil','Pressure']},
  ];

  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };

  // border setup for the tables
  var html ="<table border= '4'>";

  html+='<thead>';
  html+='<tr>';
  html+='<td>' + 'name' +'</td>';
  html+='<td>' + 'Height' +'</td>';
  html+='<td>' + 'Type' +'</td>';
  html+='<td>' + 'Abilities' +'</td>';
  html+='</tr>';
  html+='</thead>';

// Looping throught the Array and populating the #character_table with information using a foreach loop
// creation in the individual columns
    pokemonList.forEach((character) => {
      html+='<tr>';
      html+='<td>' + character.name +'</td>';
      html+='<td>' + character.height +'</td>';
      html+='<td>' + character.type +'</td>';
      html+='<td>' + character.abilities +'</td>';
      html+='</tr>';
    });
    // creation of the table for the first table
    document.getElementById('character_table').innerHTML = html;
  })();

  pokemonRepository.add({ name: 'Pikachu' });

//Creation of IIFE function. Using this to ensure the use only as the Local variable.
let table_height = (function() {

  let pokemonList = [
    {name: 'Charizard', height: 1.7, type:['Monster','Dragon'], abilities:['Blaze','Solor-Power']},
    {name: 'Fearow', height: 1.2, type:['Flying'], abilities:['Keen-eye','Sniper']},
    {name: 'Nidoking', height: 1.4, type:['Monster','Field'], abilities:['Poison-point','Rivalry','Sheer-force']},
    {name: 'Tentacruel', height: 1.6, type:['Water3'], abilities:['Clear-body','Rain-dish','Liquid-ooze']},
    {name: 'Wailord', height: 14.5, type:['Field','Water2'], abilities:['Oblivious','Water-veil','Pressure']},
  ];

  // border setup for the tables
  var html2 ="<table border= '4'>";

    html2+='<thead>';
    html2+='<tr>';
    html2+='<td>' + 'Name' +'</td>';
    html2+='<td>' + 'Height' +'</td>';
    html2+='<td>' + 'Height Catagory' +'</td>';
    html2+='</tr>';
    html2+='</thead>';

    // Looping throught the Array and populating the #character_table with information using a foreach loop
    // creation in the individual columns

    pokemonList.forEach((height) => {
      // uses if else statement to locate the height attributes and then populate new table column
      if (height.height < 1.5) {
      html2+='<tr>';
      html2+='<td>' + height.name +'</td>';
      html2+='<td>' + height.height +'</td>';
      // Adding a new table column to accept the if else conditions
      html2+='<td>' + "You're tiny!" +'</td>';
      html2+='</tr>';
    }
    else if(height.height < 5) {
      html2+='<tr>';
      html2+='<td>' + height.name +'</td>';
      html2+='<td>' + height.height +'</td>';
      html2+='<td>' + "Standard but Strong!" +'</td>';
      html2+='</tr>';
    }
    else  {
      html2+='<tr>';
      html2+='<td>' + height.name + '</td>';
      html2+='<td>' + height.height + '</td>';
      html2+='<td>' + "You're Huge!" + '</td>';
      html2+='</tr>';
    }
    // creation of the table for the second table table_height
      document.getElementById('table_height').innerHTML = html2;
  });
})();
