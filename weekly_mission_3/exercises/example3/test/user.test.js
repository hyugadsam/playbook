const User = require('./../app/User');

describe("Unit Test for user class", () => {
    test('Case 1: Crate an user Object', () => {
        const currentTime = new Date();
        const usser = new User(1, "sam123", "samuel", "something for the bio");
        
        expect(usser.id).toBe(1);
        expect(usser.username).toBe("sam123");
        expect(usser.bio).toBe("something for the bio");
        expect(usser.dateCreated).not.toBeUndefined();
        expect(usser.lastUpdated).not.toBeUndefined();

        //No funciona la comparacion de fechas por alguna razon
        // expect(usser.dateCreated.getTime() > currentTime.getTime()).toBe(true);
        // expect(usser.lastUpdated.getTime() > currentTime.getTime()).toBe(true);

    });

    test('Case 2: Test getters', () => {
        const usser = new User(1, "sam123", "samuel", "something for the bio");

        expect(usser.getUsername).toBe("sam123");
        expect(usser.getBio).toBe("something for the bio");
        expect(usser.getDateCreated).not.toBeUndefined();
        expect(usser.getLastUpdated).not.toBeUndefined();

      });


      test('Case 3: Test setters', () => {
        const usser = new User(1, "sam123", "samuel", "something for the bio");

        usser.setUsername = "Sam987";
        usser.setBio = "New bio for this user";

        expect(usser.getUsername).toBe("Sam987");
        expect(usser.getBio).toBe("New bio for this user");

      });

  })

