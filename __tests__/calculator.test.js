import { Planet } from './../src/scripts.js';
import { exportSpecifier, exportDefaultDeclaration } from '@babel/types';

describe('Planet', () => {

  test('return planet objects', () => {
    const earthYear = 365
    let mercuryYear = new Planet('mercury', earthYear * 0.24);
    let venusYear = new Planet('venus', earthYear * 0.62);
    let marsYear = new Planet('mars', earthYear * 1.88);
    let jupiterYear = new Planet('jupiter', earthYear * 11.86);
    expect(mercuryYear).toEqual({"name": "mercury", "year": 87.6});
    expect(venusYear).toEqual({"name": "venus", "year": 226.3});
    expect(marsYear).toEqual({"name": "mars", "year": 686.1999999999999});
    expect(jupiterYear).toEqual({"name": "jupiter", "year": 4328.9});
  });
});

// should change the statement to return. ex> 'let mercury =' -> 'return'
   test('should return age per planet', () => {
     const earthYear = 365
     let mercuryYear = new Planet ('mercury', earthYear * 0.24);
     let venusYear = new Planet('venus', earthYear * 0.62);
     let marsYear = new Planet('mars', earthYear * 1.88);
     let jupiterYear = new Planet('jupiter', earthYear * 11.86);
     expect(mercuryYear.planetAge()).toEqual(120.83333333333334);
     expect(venusYear.planetAge()).toEqual(46.774193548387096);
     expect(marsYear.planetAge()).toEqual(15.425531914893618);
     expect(jupiterYear.planetAge()).toEqual(2.4451939291736933);
   });
  //
    test('should return life expectancy', () => {
      const earthYear = 365
      let mecury = new Planet ('mercury', earthYear * 0.24);
      let venus = new Planet ('venus', earthYear * 0.62);
      let mars = new Planet ('mars', earthYear * 1.88);
      let jupiter = new Planet ('jupiter', earthYear * 11.86)
      expect(mecury.lifeExpect(mecury)).toEqual("I am sorry. You already passed away! You have lived more 32 years.");
      expect(venus.lifeExpect(venus)).toEqual("Your life expects to be 88. You still have 41 years.");
      expect(mars.lifeExpect(mars)).toEqual("Your life expects to be 88. You still have 72 years.");
      expect(jupiter.lifeExpect(jupiter)).toEqual("Your life expects to be 88. You still have 85 years.");
    });
  
