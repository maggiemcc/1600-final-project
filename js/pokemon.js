
const allPokemon = (async () => {
const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
const myJson = await response.json()
console.log(JSON.stringify(myJson))
})

console.log(allPokemon().then)

/*allPokemon.forEach(function(poke) {
    let pokeDiv = document.createElement('div')
    let name = document.createElement('h1')
    let type = document.createElement('h3')
    let pic = document.createElement('img')

    pokeDiv.appendChild(name)
    pokeDiv.appendChild(type)
    pokeDiv.appendChild(pic)

    let pokeNum = getCharNumber(poke.url)
   
    name.textContent = poke.name
    type.textContent = poke.type
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${pokeNum}.jpg`

    
    mainArea.appendChild(pokemonDiv)
})*/

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});