
/* async function getPokemonData(url) {
  const respond = await fetch(url)
  return await response.json()
} */

class vehicles {
  constructor(name, vehicle_class, cost_in_credits, max_atmosphering_speed) {

    this.name = name
    this.vehicle_class = vehicle_class
    this.cost_in_credits = cost_in_credits
    this.max_atmosphering_speed = max_atmosphering_speed

  }}


document.querySelector('#vehicleButton').addEventListener('click', () => {
  let vehiclesName = prompt('Provide a number between 4 and 76 to add a new vehicle: *Note some numbers may not work. If not try another number.')
  let vehiclesNameNum = parseInt(vehiclesName, 10)
  if (vehiclesNameNum > 76) {
    alert('That Vehicle does not exist! Please enter a different one.')
    return
  } else {
    getAPIData(`https://swapi.co/api/vehicles/${vehiclesName}`)
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
  const theData = getAPIData('https://swapi.co/api/vehicles/')
  .then(data => { 
        for (const vehicles of data.results) {
        getAPIData(vehicles.url)
        .then(vehiclesdata => {
          populateDOM(vehiclesdata)
        })
      }
  })
  
  console.log(theData)
  
  let mainArea = document.querySelector('main')
  
  
  function populateDOM(single_vehicles) {
      let vehiclesScene = document.createElement('div')
      let vehiclesCard = document.createElement('div')
      let vehiclesFront = document.createElement('div')
      let vehiclesBack = document.createElement('div')
      let name = document.createElement('h4')
      let pic = document.createElement('img')
  
      fillCardFront(vehiclesFront, single_vehicles)
      fillCardBack(vehiclesBack, single_vehicles)
  
     pic.setAttribute('class', 'picDivs')
     vehiclesScene.setAttribute('class', 'scene')
     vehiclesCard.setAttribute('class', 'card')
     vehiclesFront.setAttribute('class', 'card__face card__face--front')
     vehiclesBack.setAttribute('class', 'card__face card__face--back')
    
  
      
  
      let vehiclesName = getvehiclesName(single_vehicles.name)
      vehiclesBack.appendChild(name)
      name.textContent = `${single_vehicles.name}`
      // pic.src = `https://starwars-visualguide.com/assets/img/vehicles/${vehiclesName}.jpg`
     pic.src = `../vehicles/${vehiclesName}.jpg`
      vehiclesFront.appendChild(pic)
    
  
      vehiclesCard.appendChild(vehiclesFront)
      vehiclesCard.appendChild(vehiclesBack)
      vehiclesScene.appendChild(vehiclesCard)
  
      mainArea.appendChild(vehiclesScene) 
      
      vehiclesCard.addEventListener( 'click', function() {
      vehiclesCard.classList.toggle('is-flipped');
      });
    }
  
  
    function fillCardFront(vehiclesFront, data) {
      let vehiclescost_in_credits = document.createElement('p')
      vehiclescost_in_credits.textContent = data.cost_in_credits
      vehiclesFront.appendChild(vehiclescost_in_credits)
    }
  
    function fillCardBack(vehiclesBack, data) {
      let vehiclesvehicle_class = document.createElement('h5')
      vehiclesvehicle_class.textContent = data.vehicle_class
      vehiclesBack.appendChild(vehiclesvehicle_class)
  
      let vehiclesmax_atmosphering_speed = document.createElement('h3')
      vehiclesmax_atmosphering_speed.textContent = data.max_atmosphering_speed
      vehiclesBack.appendChild(vehiclesmax_atmosphering_speed)
    }
      
  
  
  
    function getvehiclesName(name) {
         if(name < 10) return `00${name}`
         if(name > 9 && name < 100) {
           return `0${name}`
         } else return name
    }
