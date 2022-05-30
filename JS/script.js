// created array for for the tables
// let pokemonList = [
//     {name: 'Charizard', height: 1.7, type:['Monster','Dragon'], abilities:['Blaze','Solor-Power']},
//     {name: 'Fearow', height: 1.2, type:['Flying'], abilities:['Keen-eye','Sniper']},
//     {name: 'Nidoking', height: 1.4, type:['Monster','Field'], abilities:['Poison-point','Rivalry','Sheer-force']},
//     {name: 'Tentacruel', height: 1.6, type:['Water3'], abilities:['Clear-body','Rain-dish','Liquid-ooze']},
//     {name: 'Wailord', height: 14.5, type:['Field','Water2'], abilities:['Oblivious','Water-veil','Pressure']},
//   ];




  let pokemonList = [
    {name: 'Charizard', height: 1.7, type:['Monster','Dragon'], abilities:['Blaze','Solor-Power']},
    {name: 'Fearow', height: 1.2, type:['Flying'], abilities:['Keen-eye','Sniper']},
    {name: 'Nidoking', height: 1.4, type:['Monster','Field'], abilities:['Poison-point','Rivalry','Sheer-force']},
    {name: 'Tentacruel', height: 1.6, type:['Water3'], abilities:['Clear-body','Rain-dish','Liquid-ooze']},
    {name: 'Wailord', height: 14.5, type:['Field','Water2'], abilities:['Oblivious','Water-veil','Pressure']},
  ];

  (function() {
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

// Looping throught the Array and populating the #character_table with information
// creation in the individual columns
    for (let i =0; i <pokemonList.length; i++){
      html+='<tr>';
      html+='<td>' + pokemonList[i].name +'</td>';
      html+='<td>' + pokemonList[i].height +'</td>';
      html+='<td>' + pokemonList[i].type +'</td>';
      html+='<td>' + pokemonList[i].abilities +'</td>';
      html+='</tr>';
    }
    // creation of the table for the first table
    document.getElementById('character_table').innerHTML = html;
  })();


(function() {
  // border setup for the tables
  var html2 ="<table border= '4'>";

    html2+='<thead>';
    html2+='<tr>';
    html2+='<td>' + 'Name' +'</td>';
    html2+='<td>' + 'Height' +'</td>';
    html2+='<td>' + 'Height Catagory' +'</td>';
    html2+='</tr>';
    html2+='</thead>';

// Looping throught the Array and populating the #table_height with information
// creation in the individual columns
    for (let a =0; a<pokemonList.length; a++){
      // uses if else statement to locate the height attributes and then populate new table column
      if (pokemonList[a].height < 1.5) {
      html2+='<tr>';
      html2+='<td>' + pokemonList[a].name +'</td>';
      html2+='<td>' + pokemonList[a].height +'</td>';
      // Adding a new table column to accept the if else conditions
      html2+='<td>' + "You're tiny!" +'</td>';
      html2+='</tr>';
    }
    else if(pokemonList[a].height < 5) {
      html2+='<tr>';
      html2+='<td>' + pokemonList[a].name +'</td>';
      html2+='<td>' + pokemonList[a].height +'</td>';
      html2+='<td>' + "Standard but Strong!" +'</td>';
      html2+='</tr>';
    }
    else  {
      html2+='<tr>';
      html2+='<td>' + pokemonList[a].name + '</td>';
      html2+='<td>' + pokemonList[a].height + '</td>';
      html2+='<td>' + "You're Huge!" + '</td>';
      html2+='</tr>';
    }
    // creation of the table for the second table table_height
      document.getElementById('table_height').innerHTML = html2;
  }
})();





//     const charactersList = document.getElementById('characters_table');
// let pokemonCharacters = [];
//
// const loadCharacters = async () => {
//     try {
//         const res = pokemonList;
//         pokemonCharacters = res;
//         displayCharacters(pokemonCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };
//
// const displayCharacters = (characters) => {
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${pokemonList.name}</h2>
//                 <p>Height: ${pokemonList.height}</p>
//                 <p>Type: ${pokemonList.type}</img>
//             </li>
//         `;
//         })
//         .join('');
//     pokemonList.innerHTML = htmlString;
// };
