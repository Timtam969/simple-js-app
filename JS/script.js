// created array for for the tables
  let pokemonList = [
    {name: 'Charizard', height: 1.7, type:['Monster','Dragon'], abilities:['Blaze','Solor-Power']},
    {name: 'Fearow', height: 1.2, type:['Flying'], abilities:['Keen-eye','Sniper']},
    {name: 'Nidoking', height: 1.4, type:['Monster','Field'], abilities:['Poison-point','Rivalry','Sheer-force']},
    {name: 'Tentacruel', height: 1.6, type:['Water3'], abilities:['Clear-body','Rain-dish','Liquid-ooze']},
    {name: 'Wailord', height: 14.5, type:['Field','Water2'], abilities:['Oblivious','Water-veil','Pressure']},
  ];

// border setup for the tables
  var html ="<table border= '1|1'>";

// creation of the table for the first table
  setTimeout(() => {
    html+='<thead>';
    html+='<tr>';
    html+='<td>' + 'name' +'</td>';
    html+='<td>' + 'height' +'</td>';
    html+='<td>' + 'type' +'</td>';
    html+='<td>' + 'abilities' +'</td>';
    html+='</tr>';
    html+='</thead>';

// Looping throught the Array and populating the #character_table with information
// creation in the individual columns
    for (let i =0; i<pokemonList.length; i++){
      html+='<tr>';
      html+='<td>' + pokemonList[i].name +'</td>';
      html+='<td>' + pokemonList[i].height +'</td>';
      html+='<td>' + pokemonList[i].type +'</td>';
      html+='<td>' + pokemonList[i].abilities +'</td>';
      html+='</tr>';
    }
    document.getElementById('character_table').innerHTML = html;
  })


// creation of the table for the second table table_height
setTimeout(() => {
    html+='<thead>';
    html+='<tr>';
    html+='<td>' + 'Name' +'</td>';
    html+='<td>' + 'Height' +'</td>';
    html+='<td>' + 'Height Catagory' +'</td>';
    html+='</tr>';
    html+='</thead>';

// Looping throught the Array and populating the #table_height with information
// creation in the individual columns
    for (let a =0; a<pokemonList.length; a++){
      // uses if else statement to locate the height attributes and then populate new table column
      if (pokemonList[a].height < 1.5) {
      html+='<tr>';
      html+='<td>' + pokemonList[a].name +'</td>';
      html+='<td>' + pokemonList[a].height +'</td>';
      // Adding a new table column to accept the if else conditions
      html+='<td>' + "You're tiny!" +'</td>';
      html+='</tr>';
    }
    else if(pokemonList[a].height < 5) {
      html+='<tr>';
      html+='<td>' + pokemonList[a].name +'</td>';
      html+='<td>' + pokemonList[a].height +'</td>';
      html+='<td>' + "Standard but Strong!" +'</td>';
      html+='</tr>';
    }
    else  {
      html+='<tr>';
      html+='<td>' + pokemonList[a].name + '</td>';
      html+='<td>' + pokemonList[a].height + '</td>';
      html+='<td>' + "You're Huge!" + '</td>';
      html+='</tr>';
    }
}
    document.getElementById('table_height').innerHTML = html;

  })
// writing information to tables
document.write()
