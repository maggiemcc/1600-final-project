
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
  let vehiclesName = prompt('Provide the Vehicle number you want to add:')
  let vehiclesNameNum = parseInt(vehiclesName, 10)
  if (vehiclesNameNum > 57) {
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
      pic.src = `https://starwars-visualguide.com/assets/img/vehicles/${vehiclesName}.jpg`
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
  
  
  // // data.stats[0].base_stat
  // class vehicles {
  //   constructor(name, vehicle_class, cost_in_credits, max_atmosphering_speed) {

  //     this.name = name
  //     this.vehicle_class = vehicle_class
  //     this.cost_in_credits = cost_in_credits
  //     this.max_atmosphering_speed = max_atmosphering_speed
  //   }
  // }


  // const Delta = new vehicles('Delta', 'Airplane', 'unknown', '460 – 575 mph');
  // populateDOM(Delta)

  // const Zephyr_G_swoop_bike = new vehicles('Zephyr-G swoop bike', 'Repulsorcraft', '5,750', '350km/h');
  // populateDOM(Zephyr_G_swoop_bike)

  // const Koro_2_Exodrive_airspeeder = new vehicles('Koro-2 Exodrive airspeeder', 'Airspeeder', 'unknown', '800km/h');
  // populateDOM(Koro_2_Exodrive_airspeeder)
  
  // const XJ_6_airspeeder = new vehicles('XJ-6 airspeeder', 'Airspeeder', 'unknown', '720km/h');
  // populateDOM(XJ_6_airspeeder)

  //  const LAAT_i= new vehicles('LAAT/i', 'Gunship', 'unknown', '620km/h');
  // populateDOM(LAAT_i)
  
  // const Tsmeu_6_personal_wheel_bike = new vehicles('Tsmeu-6 personal wheel bike', 'Wheeled Walker', '15,000', '330km/h');
  // populateDOM(Tsmeu_6_personal_wheel_bike)

  // const TIE_IN_interceptor = new vehicles('TIE/IN interceptor', 'Starfighter', 'unknown', '1,250km/h');
  // populateDOM(TIE_IN_interceptor)
  
  // const Geonosian_starfighter = new vehicles('Geonosian starfighter', 'Starfighter', 'unknown', '20,000km/h');
  // populateDOM(Geonosian_starfighter)

  // const Bantha_II_cargo_skiff = new vehicles('Bantha-II cargo skiff', 'Repulsorcraft Cargo Skiff', '8,000', '250km/h');
  // populateDOM(Bantha_II_cargo_skiff)
  
  // const Imperial_Speeder_Bike = new vehicles('Imperial Speeder Bike', 'Speeder', ' 8,000', '360km/h');
  // populateDOM(Imperial_Speeder_Bike)

  // const Vulture_Droid= new vehicles('Vulture Droid', 'Starfighter', 'unknown', '1,200km/h');
  // populateDOM(Vulture_Droid)
  
  // const Multi_Troop_Transport = new vehicles('Multi-Troop Transport', 'Repulsorcraft', '138,000', '35km/h');
  // populateDOM(Multi_Troop_Transport)

  // const Armored_Assault_Tank= new vehicles('Armored Assault Tank', 'Repulsorcraft', 'unknown', '55km/h');
  // populateDOM(Armored_Assault_Tank)
  
  // const C_9979_landing_craft = new vehicles('C-9979 landing craft', 'Landing Craft', '200,000', '587km/h');
  // populateDOM(C_9979_landing_craft)

  //  const Sith_speeder = new vehicles('Sith speeder', 'Speeder', '4,000', '180km/h');
  // populateDOM(Sith_speeder)
  
  // const Single_Trooper_Aerial_Platform = new vehicles('Single Trooper Aerial Platform', 'Repulsorcraft', '2,500', '400km/h');
  // populateDOM(Single_Trooper_Aerial_Platform)