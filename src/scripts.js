
  export class Planet {
  constructor(name, year) {
  this.name = name
  this.year = year
  }

  planetAge(planet, bornYear) {
    this.planet = planet
    const thisYear = 2020
    this.bornYear = bornYear
    let cal = (thisYear - bornYear) * 365
    let age = parseInt(cal / this.year)

    const lifeExpentancy = Math.floor(Math.random() * 30) + 70
    let lifeResult = lifeExpentancy - age

    if (lifeResult > 0 ) {
      return `Age in ${this.planet.name} is ${age}. Your life expects to be ${lifeExpentancy}. You still have ${parseInt(lifeResult)} years.`
    } else {
      return `I am sorry. You already passed away! Your age in ${this.planet.name} is ${age}. You have lived more ${parseInt(Math.abs(lifeResult))} years. Your life expected to be ${lifeExpentancy}.`
    }

  }

}

export class PlanetArray {

  constructor() {
    this.planets = []
    this.planetId = 0;
  }

  addPlanet(planet) {
    this.planets.push(planet)
    planet.planetId = this.assignId()
  }

  assignId() {
    this.planetId += 1
    return this.planetId
  }

}
