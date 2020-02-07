class PlanetAge {
  constructor() {
    this.planets = [];
    this.planetId = 0;
  }
  AddPlanet(planets) {
    this.planets.push(planet);
    planet.planetId = this.assignId()
  }
  AssignId() {
    this.planetId += 1;
    return this.planetId;
  }
}

export class Planet {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  planetAge() {
    const earthYear = 365
    let mercuryYear = new Planet ('mercury', earthYear * 0.24);
    let venusYear = new Planet('venus', earthYear * 0.62);
    let marsYear = new Planet('mars', earthYear * 1.88);
    let jupiterYear = new Planet('jupiter', earthYear * 11.86);

    let myYear = 1991
    const thisYear = 2020
    let cal = (thisYear - myYear) * 365

    if (this.name == "mercury") {
      return (cal / mercuryYear.year)
    } else if (this.name == "venus") {
      return (cal / venusYear.year)
    } else if (this.name == "mars") {
      return (cal / marsYear.year)
    } else if (this.name == "jupiter") {
      return (cal / jupiterYear.year)
    }
  }


}


const lifeExpentancy = 88
