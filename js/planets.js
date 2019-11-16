
/* async function getPokemonData(url) {
  const respond = await fetch(url)
  return await response.json()
} */


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
const theData = getAPIData('https://swapi.co/api/planets/')
.then(data => { 
      for (const planets of data.results) {
      getAPIData(planets.url)
      .then(planetsdata => {
        populateDOM(planetsdata)
      })
    }
})

console.log(theData)

let mainArea = document.querySelector('main')


function populateDOM(single_planets) {
    let planetsScene = document.createElement('div')
    let planetsCard = document.createElement('div')
    let planetsFront = document.createElement('div')
    let planetsBack = document.createElement('div')
    let name = document.createElement('h4')
    let pic = document.createElement('img')

    fillCardFront(planetsFront, single_planets)
    fillCardBack(planetsBack, single_planets)

   pic.setAttribute('class', 'picDivs')
   planetsScene.setAttribute('class', 'scene')
   planetsCard.setAttribute('class', 'card')
   planetsFront.setAttribute('class', 'card__face card__face--front')
   planetsBack.setAttribute('class', 'card__face card__face--back')
  
    let planetsNum = getplanetsNumber(single_planets)
    planetsBack.appendChild(name)
    name.textContent = `${single_planets.name}`
    pic.src = `https://starwars-visualguide.com/assets/img/planets/${planetsNum}.jpg`
    planetsFront.appendChild(pic)
  

    planetsCard.appendChild(planetsFront)
    planetsCard.appendChild(planetsBack)
    planetsScene.appendChild(planetsCard)

    mainArea.appendChild(planetsScene) 
    
    planetsCard.addEventListener( 'click', function() {
    planetsCard.classList.toggle('is-flipped');
    });
  }


  function fillCardFront(planetsFront, data) {
    let planetsOrder = document.createElement('p')
    planetsOrder.textContent = data.order
    planetsFront.appendChild(planetsOrder)
  }

  function fillCardBack(planetsBack, data) {
    // let pokeOrder = document.createElement('h5')
    let planetsHP = document.createElement('h5')
    planetsHP.textContent = `${data.name}`
    // pokeHP.textContent = data.stats[0].base_stat
    planetsBack.appendChild(planetsHP)
  }
    

  function getplanetsNumber(id) {
       if(id < 10) return `00${id}`
       if(id > 9 && id < 100) {
         return `0${id}`
       } else return id
  }


// data.stats[0].base_stat
// class planets {
//   constructor(id, name, order, stats) {
//     this.id = id
//     this.name = name
//     this.order = order
//     this.base_stats = stats
//   }
// }

// const Davemon = new planets(900, 'Davemon', 28, 130);
// populateDOM(Davemon)




























// import { planets } from '../Assets/planets.js'


// // let mainHeader = document.querySelector('header')
// let mainArea = document.querySelector('main')



  
// planets.forEach(function(planet) {
//     let planetDiv = document.createElement('div')
//     let name = document.createElement('h1')
//     let pic = document.createElement('img')

//     planetDiv.appendChild(name)
//     planetDiv.appendChild(pic)

//     let charNum = getCharNumber(planet.url)
   
//     name.textContent = planet.name
//     pic.src = `https://starwars-visualguide.com/assets/img/planets/${charNum}.jpg`

    
//     mainArea.appendChild(planetDiv)
// })

// function getCharNumber(charURL) {
//   let end = charURL.lastIndexOf('/')
//   let charID = charURL.substring(end -2, end)
//   if(charID.indexOf('/') !== -1 ) {
//     return charID.slice(1,2)
//   } else {
//     return charID
//   }
// }

// const allDivs = Array.from(mainArea.querySelectorAll('div'))

// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });
