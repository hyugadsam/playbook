const Spiderman = require('./../app/spiderman');

describe("Unit Test for Spiderman class", () => {
    test('Case 1: Crate an spiderman Object', () => {
      const andrew = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

      expect(andrew.nombre).toBe("Spiderman Sony");
      expect(andrew.edad).toBe(31);
      expect(andrew.actor).toBe("Andrew Garfield");
      expect(andrew.estudioCine).toBe("Sony");

    });

    test('Case 2: Test method getInfo', () => {
        const andrew = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        //Practica
        expect(andrew.getInfo()).toBe("Hey, I'm Andrew Garfield from Sony Studio");
      });

  })

// describe("Test Suite Dummy Description", () => {
//     test('Case 1 Dummy', () => {
//       const resultOfSomething = 1 + 2
//       expect(resultOfSomething).toBe(18);
//     });
//   })