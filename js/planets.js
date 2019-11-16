
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
  
   
    let planetsNum = getplanetsNumber(single_planets.id)
    planetsBack.appendChild(name)
    name.textContent = `${single_planets.name}`
    pic.src = `../planets/${planetsNum}.jpg`
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
    let planetsrotation_period = document.createElement('p')
    planetsrotation_period.textContent = data.rotation_period
    planetsFront.appendChild(planetsrotation_period)
  }

  function fillCardBack(planetsBack, data) {
    let planetsDiameter = document.createElement('h5')
    planetsDiameter.textContent = data.diameter
    planetsBack.appendChild(planetsDiameter)
  }
    

  

  function getplanetsNumber(id) {
       if(id < 10) return `00${id}`
       if(id > 9 && id < 100) {
         return `0${id}`
       } else return id
  }


// data.stats[0].base_stat
class planets {
  constructor(id, name, rotation_period, diameter) {
    this.id = id
    this.name = name
    this.rotation_period = rotation_period
    this.diameter = diameter
  }
}

const Maggies = new planets(900, 'Maggies Planet', 28, 1000000);
populateDOM(Maggies)
