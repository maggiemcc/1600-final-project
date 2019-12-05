import {species } from '../Assets/species.js'
console.log(species)

let contentArea = document.querySelector('.content')
species.forEach(species => {
    let speciesDiv = document.createElement('div')
    let speciesName = document.createElement('h3')
    let speciesClassification = document.createElement('p')
    let speciesLanguage = document.createElement('p')
    let speciesAverage_height = document.createElement('p')
    let speciesAverage_Lifespan = document.createElement('p')
    // let speciesDesignation = document.createElement('p')
    let speciesPic = document.createElement('img')

    speciesName.textContent = species.name
    // speciesDesignation.textContent = `Designation: ${species.designation}`
    speciesClassification.textContent = `• Classification: ${species.classification}`
    speciesLanguage.textContent = `• Language: ${species.language}`
    speciesAverage_height.textContent = `• Height(cm): ${species.average_height}`
    speciesAverage_Lifespan.textContent = `• Lifespan(yrs): ${species.average_lifespan}`
    let speciesNum= getCharNumber(species.url)
    speciesPic.src = `https://starwars-visualguide.com/assets/img/species/${speciesNum}.jpg`


    speciesDiv.appendChild(speciesName)
    // speciesDiv.appendChild(speciesDesignation)
    speciesDiv.appendChild(speciesClassification)
    speciesDiv.appendChild(speciesLanguage)
    speciesDiv.appendChild(speciesAverage_Lifespan)
    speciesDiv.appendChild(speciesAverage_height)

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
