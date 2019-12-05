import { films } from '../Assets/films.js'
import { people } from '../Assets/people.js'
console.log(films[0].opening_crawl)

let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')


/* films.forEach(function(film) {
let filmDiv = document.createElement('div')
let title = document.createElement('h1')
let crawl = document.createElement('p')

filmDiv.appendChild(title)
filmDiv.appendChild(crawl)

title.textContent = film.title
crawl.innerText = film.opening_crawl
    
mainArea.appendChild(filmDiv)
  }); */

  
people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let height = document.createElement('h3')
    let gender = document.createElement('h3')
    let mass = document.createElement('h3')
    let birth_year = document.createElement('h3')
    let pic = document.createElement('img')

    personDiv.appendChild(name)
    personDiv.appendChild(pic)
    personDiv.appendChild(gender)
    personDiv.appendChild(birth_year)
    personDiv.appendChild(height)  
    personDiv.appendChild(mass)
    

    let charNum = getCharNumber(person.url)
   
    name.textContent = person.name
    gender.textContent = `GENDER: ${person.gender}`
    birth_year.textContent = `BORN: ${person.birth_year}`
    height.textContent = `HEIGHT: ${person.height}cm`
    mass.textContent = `MASS: ${person.mass}kg`
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    
    mainArea.appendChild(personDiv)
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


let maleButton = document.createElement('button')
maleButton.textContent = "Male Characters"

maleButton.addEventListener('click', () => {
    maleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  femaleCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
  otherCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
});


let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"

femaleButton.addEventListener('click', event => {
femaleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  maleCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
  otherCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
});


let otherButton = document.createElement('button')
otherButton.textContent = "Other Characters"

otherButton.addEventListener('click', event => {
  otherCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  maleCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
  femaleCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
});


let allButton = document.createElement('button')
allButton.textContent = "All Characters"

allButton.addEventListener('click', () => {
    femaleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  maleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  otherCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
})

mainHeader.appendChild(allButton)
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(otherButton)


const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' & person.gender !== 'male')
console.log(maleCharacters)
console.log(femaleCharacters)
console.log(otherCharacters)





