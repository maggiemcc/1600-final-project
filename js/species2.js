import {species } from '../Assets/species.js'
console.log(species)

let contentArea = document.querySelector('.content')
species.forEach(species => {
    let speciesDiv = document.createElement('div')
    let speciesName = document.createElement('h3')
    let speciesPic = document.createElement('img')

    speciesName.textContent = species.name
    let speciesNum= getCharNumber(species.url)
    speciesPic.src = `https://starwars-visualguide.com/assets/img/species/${speciesNum}.jpg`
    
    speciesDiv.appendChild(speciesName)
    speciesDiv.appendChild(speciesPic)
    contentArea.appendChild(speciesDiv)
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
