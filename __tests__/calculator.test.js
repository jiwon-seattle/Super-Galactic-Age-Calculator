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
  //   test('should return a certain number that represents day', () => {
  //     let var1 = new DayOfWeek(2020, 2, 5);
  //     let var2 = new DayOfWeek(2020, 3, 1);
  //     let var3 = new DayOfWeek(2020, 4, 13);
  //     expect(var1.calculateDate()).toEqual(3);
  //     expect(var2.calculateDate()).toEqual(0);
  //     expect(var3.calculateDate()).toEqual(1);
  //   });
  //
  //   test('should return string "This is not valid date to the invalid date' , () => {
  //     let var1 = new DayOfWeek("02020", 11, 6);
  //     let var2 = new DayOfWeek(2020, 13, 6);
  //     let var3 = new DayOfWeek(2020, 11, 33);
  //     let var4 = new DayOfWeek(2020, 3, "07")
  //     expect(var1.calculateDate()).toEqual("This is not valid date");
  //     expect(var2.calculateDate()).toEqual("This is not valid date");
  //     expect(var3.calculateDate()).toEqual("This is not valid date");
  //     expect(var4.calculateDate()).toEqual("This is not valid date");
  //   });
  // });
