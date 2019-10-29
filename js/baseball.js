
const allPokemon = (async () => {
const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
const myJson = await response.json()
console.log(JSON.stringify(myJson))
})

console.log(allPokemon().then)

/*people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    let charNum = getCharNumber(person.url)
   
    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    
    mainArea.appendChild(personDiv)
})*/

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});