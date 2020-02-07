// class PlanetAge {
//   constructor() {
//     this.planets = [];
//     this.planetId = 0;
//   }
//   AddPlanet(planets) {
//     this.planets.push(planet);
//     planet.planetId = this.assignId()
//   }
//   AssignId() {
//     this.planetId += 1;
//     return this.planetId;
//   }
// }

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
      return cal / mercuryYear.year

    } else if (this.name == "venus") {
      let venus = (cal / venusYear.year)
      return venus
    } else if (this.name == "mars") {
      let mars = (cal / marsYear.year)
      return mars
    } else if (this.name == "jupiter") {
      let jupiter = (cal / jupiterYear.year)
      return jupiter
    }
  }

 lifeExpect(planets) {
   this.planet = planets.planetAge();
   const lifeExpentancy = 88
   let lifeResult = lifeExpentancy - this.planet
   console.log(lifeResult)

   if (lifeResult > 0 ) {
     return `Your life expects to be ${lifeExpentancy}. You still have ${parseInt(lifeResult)} years.`
   } else {
     return `I am sorry. You already passed away! You have lived more ${parseInt(Math.abs(lifeResult))} years.`
   }
 }

}
