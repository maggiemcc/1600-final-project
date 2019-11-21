
/* async function getPokemonData(url) {
  const respond = await fetch(url)
  return await response.json()
} */

document.querySelector('#pokeButton').addEventListener('click', () => {
  let pokeId = prompt('Provide the Pokemon ID you want to add:')
  let pokeIdNum = parseInt(pokeId, 10)
  if (pokeIdNum > 807) {
    alert('That Pokemon ID does not exist! Please enter a different one.')
    return
  } else {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then(result => {
      populateDOM(result)
    })
  }
})


async function getAPIData(url) {
  try {
      const response = await fetch(url)
      const data = await response.json()
      return data
  } catch (error) {
    console.error(error)
}
}


// now, use the return async data
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25')
.then(data => { 
      for (const pokemon of data.results) {
      getAPIData(pokemon.url)
      .then(pokedata => {
        populateDOM(pokedata)
      })
    }
})

console.log(theData)

let mainArea = document.querySelector('main')


function populateDOM(single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
    let name = document.createElement('h4')
    let pic = document.createElement('img')

    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

   pic.setAttribute('class', 'picDivs')
   pokeScene.setAttribute('class', 'scene')
   pokeCard.setAttribute('class', 'card')
   pokeFront.setAttribute('class', 'card__face card__face--front')
   pokeBack.setAttribute('class', 'card__face card__face--back')
  
    let pokeNum = getPokeNumber(single_pokemon.id)
    pokeBack.appendChild(name)
    // name.textContent = `${single_pokemon.name} height: ${single_pokemon.height}`
    name.textContent = `height: ${single_pokemon.height}`
    // pic.src = `../images/${pokeNum}.png`
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`
    pokeFront.appendChild(pic)
  

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene) 
    
    pokeCard.addEventListener( 'click', function() {
    pokeCard.classList.toggle('is-flipped');
    });
  }


  function fillCardFront(pokeFront, data) {
    let pokeOrder = document.createElement('p')
    pokeOrder.textContent = data.order
    pokeFront.appendChild(pokeOrder)
  }

  function fillCardBack(pokeBack, data) {
    // let pokeOrder = document.createElement('h5')
    let pokeHP = document.createElement('h5')
    pokeHP.textContent = `${data.id} ${data.name[0].toUpperCase()} ${data.name.slice(1)}`
    // pokeHP.textContent = data.stats[0].base_stat
    pokeBack.appendChild(pokeHP)
  }
    

  function getPokeNumber(id) {
       if(id < 10) return `00${id}`
       if(id > 9 && id < 100) {
         return `0${id}`
       } else return id
  }


// data.stats[0].base_stat
class Pokemon {
  constructor(id, name, stats, height) {
    this.id = id
    this.name = name
    this.base_stat = stats
    this.height = height
  }
}

const Davemon = new Pokemon(900, 'Davemon', 28, 130);
populateDOM(Davemon)

var myImage = new Image(100,200);
myImage.src = '../Images/900.png';
document.body.appendChild(myImage);