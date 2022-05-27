
  let pokemonList = [
    {name: 'Charizard', height: 1.7, type:['Monster','Dragon'], abilities:['Blaze','Solor-Power']},
    {name: 'Fearow', height: 1.2, type:['Flying'], abilities:['Keen-eye','Sniper']},
    {name: 'Nidoking', height: 1.4, type:['Monster','Field'], abilities:['Poison-point','Rivalry','Sheer-force']},
    {name: 'Tentacruel', height: 1.6, type:['Water3'], abilities:['Clear-body','Rain-dish','Liquid-ooze']},
    {name: 'Wailord', height: 14.5, type:['Field','Water2'], abilities:['Oblivious','Water-veil','Pressure']},
  ];

  // let height= pokemonList.height;
  var html ="<table border= '1|1'>";
  setTimeout(() => {
    html+='<thead>';
    html+='<tr>';
    html+='<td>' + 'name' +'</td>';
    html+='<td>' + 'height' +'</td>';
    html+='<td>' + 'type' +'</td>';
    html+='<td>' + 'abilities' +'</td>';
    html+='</tr>';
    html+='</thead>';

    for (let i =0; i<pokemonList.length; i++){
      html+='<tr>';
      html+='<td>' + pokemonList[i].name +'</td>';
      html+='<td>' + pokemonList[i].height +'</td>';
      html+='<td>' + pokemonList[i].type +'</td>';
      html+='<td>' + pokemonList[i].abilities +'</td>';
      html+='</tr>';
    }
    document.getElementById('character_table').innerHTML = html;

    html+='<thead>';
    html+='<tr>';
    html+='<td>' + 'Name' +'</td>';
    html+='<td>' + 'Height' +'</td>';
    html+='<td>' + 'Height Catagory' +'</td>';
    html+='</tr>';
    html+='</thead>';


    for (let a =0; a<pokemonList.length; a++){
      if (pokemonList[a].height < 1.5) {
      html+='<tr>';
      html+='<td>' + pokemonList[a].name +'</td>';
      html+='<td>' + pokemonList[a].height +'</td>';
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

document.write()



// let pokemonList= [{name: 'Charizard', height: 1.7, type:['Monster","Dragon'], abilities:['Blaze','Solor-Power'], image:'../images/charizard.svg'},
//                 {name: 'Fearow', height: 1.2, type:['Flying'], abilities:['Keen-eye','Sniper'], image: '../images/fearow.svg'},
//                 {name: 'Nidoking', height: 1.4, type:['Monster','Field'], abilities:['Poison-point','Rivalry','Sheer-force'], image:'../images/nidoking.svg'},
//                 {name: 'Tentacruel', height: 1.6, type:['Water3'], abilities:['Clear-body','Rain-dish','Liquid-ooze'], image:'../images/tentacreul.svg'},
//                 {name: 'Wailord', height: 14.5, type:['Field','Water2'], abilities:['Oblivious','Water-veil','Pressure'], image:'../images/Wailord.png'},
//               ];
//
//               for (let list of pokemonList) {
//                 document.write(list.name);
//                 document.write(list.height)
//               }
//
//
//
//             let text2 = "";
//             let item = 0;
//
//             while (pokemonList[item]){
//               text2 = text2 + " " + pokemonList[item];
//               item++;
//             }
//
//             console.log(text2);
