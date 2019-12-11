
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
    let population = document.createElement('h3')
    let diameter = document.createElement('h3')
    let terrain = document.createElement('h3')
    let surface_water = document.createElement('h3')
    let orbital_period = document.createElement('p')

    // fillCardFront(planetsFront, single_planets)
    // fillCardBack(planetsBack, single_planets)

   pic.setAttribute('class', 'picDivs')
   planetsScene.setAttribute('class', 'scene')
   planetsCard.setAttribute('class', 'card')
   planetsFront.setAttribute('class', 'card__face card__face--front')
   planetsBack.setAttribute('class', 'card__face card__face--back')
  


    let planetsName = getplanetsName(single_planets.name)
    planetsBack.appendChild(name)
    name.textContent = `${single_planets.name}`
    orbital_period.textContent = `ORBITS: ${single_planets.orbital_period} days`
    population.textContent = `• POPULATION: ${single_planets.population}`
    diameter.textContent = `• DIAMETER: ${single_planets.diameter}km`
    terrain.textContent = `• TERRAIN: ${single_planets.terrain}`
    surface_water.textContent = `• SURFACE WATER : ${single_planets.surface_water}%`

    pic.src = `../planets/${planetsName}.jpg`
    planetsFront.appendChild(pic)
  planetsBack.appendChild(population)
  planetsBack.appendChild(diameter)
  planetsBack.appendChild(terrain)
  planetsBack.appendChild(surface_water)
  planetsFront.appendChild(orbital_period)

    planetsCard.appendChild(planetsFront)
    planetsCard.appendChild(planetsBack)
    planetsScene.appendChild(planetsCard)

    mainArea.appendChild(planetsScene) 
    
    planetsCard.addEventListener( 'click', function() {
    planetsCard.classList.toggle('is-flipped');
    });
  }


  // function fillCardFront(planetsFront, data) {
  //   let planetsrotation_period = document.createElement('p')
  //   planetsrotation_period.textContent = `ROTATION ${data.rotation_period}`
  //   planetsFront.appendChild(planetsrotation_period)
  // }

  // function fillCardBack(planetsBack, data) {
  //   let planetsDiameter = document.createElement('p')
  //   planetsDiameter.textContent = `DIAMETER ${data.diameter}`
  //   planetsBack.appendChild(planetsDiameter)

  //   let planetsPopulation = document.createElement('h3')
  //   planetsPopulation.textContent = `POPULATION ${data.population}`
  //   planetsBack.appendChild(planetsPopulation)
  // }
    



  function getplanetsName(name) {
       if(name < 10) return `00${name}`
       if(name > 9 && name < 100) {
         return `0${name}`
       } else return name
  }


// data.stats[0].base_stat
class planets {
  constructor(id, name, orbital_period, diameter, population, terrain, surface_water) {
    this.id = id
    this.name = name
    this.orbital_period = orbital_period
    this.diameter = diameter
    this.population = population
    this.terrain = terrain
    this.surface_water = surface_water
  }
}

const Maggies = new planets(900, 'Maggies Planet', 365, 12742, '7.7 billion', 'mountains, jungle, desert, ocean', 71);
populateDOM(Maggies)

const Krypton = new planets(900, 'Krypton', 'N/A', 1095, 'was 1.4 billion', 'mountains, jungle', 'N/A');
populateDOM(Krypton)