PlanetAge {
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

const earthYear = 365
