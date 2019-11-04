import { species } from '../Assets/species.js'


let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')



  
species.forEach(function(species) {
    let speciesDiv = document.createElement('div')
    let name = document.createElement('h1')
    let pic = document.createElement('img')

    speciesDiv.appendChild(name)
    speciesDiv.appendChild(pic)

    let charNum = getCharNumber(species.url)
   
    name.textContent = species.name
    pic.src = `https://starwars-visualguide.com/assets/img/species/${charNum}.jpg`

    
    mainArea.appendChild(speciesDiv)
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

const allDivs = Array.from(mainArea.querySelectorAll('div'))