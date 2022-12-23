var fundo = document.getElementById('container-two');
var img = document.getElementById("imagem");
var ataque_pokemon = document.getElementById("stts-ataque").innerHTML = 0;
var defesa_pokemon = document.getElementById("stts-defesa").innerHTML = 0;
var agilidade_pokemon = document.getElementById("stts-agilidade").innerHTML = 0;
var especial_pokemon = document.getElementById("stts-especial").innerHTML = 0;
var tipo = document.getElementById("stts-tipo").innerHTML = 'Tipo';
var stts_nome = document.getElementById("stts-nome").innerHTML = 'Passe o mouse sobre os pokemons'
var extra = document.getElementById("container-extra");
var evolucoes = document.getElementById("stt-evolucoes");
var evolucoes1 = document.getElementById("stt1-evolucoes");


function colocarbulbassaur(){
    fundo.style.backgroundColor = 'green';
    fundo.style.borderRadius = '20px'
    img.setAttribute('src', 'https://toppng.com/public/uploads/thumbnail/bulbasaur-bulbasaur-pokemo-11563616517rwjijmefdz.png');
    var ataque_pokemon = document.getElementById("stts-ataque").innerHTML = 30;
    var defesa_pokemon = document.getElementById("stts-defesa").innerHTML = 70;
    var agilidade_pokemon = document.getElementById("stts-agilidade").innerHTML = 50;
    var especial_pokemon = document.getElementById("stts-especial").innerHTML = 90;
    var tipo = document.getElementById("stts-tipo").innerHTML = 'Grama';
    var stts_nome = document.getElementById("stts-nome").innerHTML = 'Esse é Bulbassaur, um pokemon gentil';
    var stts_pokemon = document.getElementById("stts-pokemon").innerHTML = 'Bulbassaur';
    evolucoes.setAttribute('src', 'https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png');
    evolucoes.style.display = 'block';
    evolucoes1.setAttribute('src', 'https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/600px-003Venusaur.png');
    evolucoes1.style.display = 'block';
    evolucoes.style.backgroundColor = 'rgb(4, 113, 202)';
    evolucoes1.style.backgroundColor = 'rgb(4, 113, 202)';
    evolucoes.style.borderRadius = '10%'
    evolucoes1.style.borderRadius = '10%'
    evolucoes.style.border = '1px solid white';
    evolucoes1.style.border = '1px solid white';       
}

function colocarcharmander(){
    fundo.style.backgroundColor = 'red';
    img.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png');
    var ataque_pokemon = document.getElementById("stts-ataque").innerHTML = 70;
    var defesa_pokemon = document.getElementById("stts-defesa").innerHTML = 20;
    var agilidade_pokemon = document.getElementById("stts-agilidade").innerHTML = 50;
    var especial_pokemon = document.getElementById("stts-especial").innerHTML = 80;
    var tipo = document.getElementById("stts-tipo").innerHTML = 'Fogo';
    var stts_nome = document.getElementById("stts-nome").innerHTML = 'Esse é Charmander, um pokemon agressivo';
    var stts_pokemon = document.getElementById("stts-pokemon").innerHTML = 'Chamander';
    evolucoes.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png');
    evolucoes.style.display = 'block';
    evolucoes1.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png');
    evolucoes1.style.display = 'block'; 
    evolucoes.style.backgroundColor = 'rgb(4, 113, 202)';
    evolucoes1.style.backgroundColor = 'rgb(4, 113, 202)';
    evolucoes.style.borderRadius = '10%'
    evolucoes1.style.borderRadius = '10%'
    evolucoes.style.border = '1px solid white';
    evolucoes1.style.border = '1px solid white';  
}

function colocarsquirtle(){
    fundo.style.backgroundColor = 'blue';
    img.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png');
    var ataque_pokemon = document.getElementById("stts-ataque").innerHTML = 50;
    var defesa_pokemon = document.getElementById("stts-defesa").innerHTML = 80;
    var agilidade_pokemon = document.getElementById("stts-agilidade").innerHTML = 50;
    var especial_pokemon = document.getElementById("stts-especial").innerHTML = 70;
    var tipo = document.getElementById("stts-tipo").innerHTML = 'Agua';
    var stts_nome = document.getElementById("stts-nome").innerHTML = 'Esse é Squirtle, um pokemon amigavel';
    var stts_pokemon = document.getElementById("stts-pokemon").innerHTML = 'Squirtle';
    evolucoes.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png');
    evolucoes.style.display = 'block';
    evolucoes1.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png');
    evolucoes1.style.display = 'block';
    evolucoes.style.backgroundColor = 'rgb(4, 113, 202)';
    evolucoes1.style.backgroundColor = 'rgb(4, 113, 202)';
    evolucoes.style.borderRadius = '10%'
    evolucoes1.style.borderRadius = '10%'
    evolucoes.style.border = '1px solid white';
    evolucoes1.style.border = '1px solid white';
}
