import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import { Planet } from './scripts';
import { PlanetArray } from './scripts';


const earthYear = 365
let mercury = new Planet('mercury', earthYear * 0.24);
let venus = new Planet('venus', earthYear * 0.62);
let mars = new Planet('mars', earthYear * 1.88);
let jupiter = new Planet('jupiter', earthYear * 11.86);

var planetArray = new PlanetArray
planetArray.addPlanet(mercury);
planetArray.addPlanet(venus);
planetArray.addPlanet(mars);
planetArray.addPlanet(jupiter);


$(document).ready(function(){
  
  $("#mercury").click(function(event){
    event.preventDefault();
    console.log('hihi')
    let bornYear = document.getElementById('userBornYear').value;
    let mercuryYear = planetArray.planets[0].planetAge(mercury, bornYear);
    $("#mercuryResult").text(mercuryYear)
  });
  $("#venus").click(function(event){
    event.preventDefault();
    var bornYear = document.getElementById('userBornYear').value;
    let venusYear = planetArray.planets[1].planetAge(venus, bornYear);
    $("#venusResult").text(venusYear)
  });
  $("#mars").click(function(event){
    event.preventDefault();
    var bornYear = document.getElementById('userBornYear').value;
    let marsYear = planetArray.planets[2].planetAge(mars, bornYear);
    $("#marsResult").text(marsYear);
  })
  $("#jupiter").click(function(event){
    event.preventDefault();
    var bornYear = document.getElementById('userBornYear').value;
    let jupiterYear = planetArray.planets[3].planetAge(jupiter, bornYear);
    $("#jupiterResult").text(jupiterYear);
  })
});
