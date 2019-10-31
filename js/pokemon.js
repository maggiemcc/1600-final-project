
async function getAPIData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
}
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
.then(data => {
    console.log(data.results)
    for (const pokemon of data.results) {
      console.log(pokemon.url)
      getAPIData(pokemon.url)
      .then(pokedata => {
        console.log(pokedata)
      })
    }
})

console.log(theData)


let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {
    let pokeDiv = document.createElement('div')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

    pokeDiv.setAttribute('class', 'charDivs')
    pic.setAttribute('class', 'picDivs')

    let pokeNum = getPokeNumber(single_pokemon.url)
   
    name.textContent = single_pokemon.name

    pic.src = '../images/${pokeNum}.png'

    pokeDiv.appendChild(name)
    pokeDiv.appendChild(pic)

    mainArea.appendChild(pokeDiv)
  }
    
  function getPokeNumber(id) {
    if(id < 10) return '00${id}'
    if(id > 9 && id < 100) {
      return '0${id}'
    } else return id
  }



/* var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
}); */