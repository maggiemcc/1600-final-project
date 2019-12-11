import {starships } from '../Assets/starships.js'
console.log(starships)

let contentArea = document.querySelector('.content')
starships.forEach(ship => {
    let shipDiv = document.createElement('div')
    let shipName = document.createElement('h3')
    let shipPic = document.createElement('img')
    let model = document.createElement('p')
    let cost_in_credits = document.createElement('p')
    let starship_class = document.createElement('p')
    let manufacturer = document.createElement('p')

    shipName.textContent = ship.name
    let shipNum= getCharNumber(ship.url)
    shipPic.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    model.textContent = `• MODEL: ${ship.model}`
    cost_in_credits.textContent = `• COST: ${ship.cost_in_credits}`
    starship_class.textContent = `• CLASS: ${ship.starship_class}`
    manufacturer.textContent = `• MANUFACTURER: ${ship.manufacturer}`


    shipDiv.appendChild(shipName)
    shipDiv.appendChild(model)
    shipDiv.appendChild(manufacturer)
    shipDiv.appendChild(cost_in_credits)
    shipDiv.appendChild(starship_class)
    
    shipDiv.appendChild(shipPic)
    contentArea.appendChild(shipDiv)
})

function getCharNumber(charURL) {
  let end = charURL.lastIndexOf('/')
  let charID = charURL.substring(end -2, end)
  if(charID.indexOf('/') !== -1 ) {
    return charID.slice(1,2)
  } else {
    return charID
  }
}
