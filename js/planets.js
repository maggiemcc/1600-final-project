import { planets } from '../Assets/planets.js'


let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')



  
planets.forEach(function(planet) {
    let planetDiv = document.createElement('div')
    let name = document.createElement('h1')
    let pic = document.createElement('img')

    planetDiv.appendChild(name)
    planetDiv.appendChild(pic)

    let charNum = getCharNumber(planet.url)
   
    name.textContent = planet.name
    pic.src = `https://starwars-visualguide.com/assets/img/planets/${charNum}.jpg`

    
    mainArea.appendChild(planetDiv)
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

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});