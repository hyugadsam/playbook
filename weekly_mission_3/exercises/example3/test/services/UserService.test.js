const { UserService } = require("../../app/services/UserService");


describe("Unit Test for UserService", () => {
    test('Case 1: Crate an user with UserService', () => {
        
        const user = UserService.create(1, "sam123", "samuel");
        expect(user.id).toBe(1);
        expect(user.username).toBe("sam123");
        expect(user.name).toBe("samuel");
        expect(user.bio).not.toBeUndefined();

    });

    test('Case 2: Get user info with UserService', () => {
        
        const user = UserService.create(1, "sam123", "samuel");
        const info = UserService.getInfo(user);
        expect(info[0]).toBe(1);
        expect(info[1]).toBe("sam123");
        expect(info[2]).toBe("samuel");
        expect(info[3]).toBe("Some info for new users");

    });

    test('Case 3: update usernam with UserService', () => {
        
        const user = UserService.create(1, "sam123", "samuel");
        UserService.updateUserUsername(user, "ASDASDK");
        expect(user.username).toBe("ASDASDK");
    });

    test('Case 4: get all usernames from User list with UserService', () => {
        const lista = [];
        lista.push(UserService.create(1, "sam1", "samuel"));
        lista.push(UserService.create(2, "sam2", "samuel"));
        lista.push(UserService.create(3, "sam3", "samuel"));

        const UserNames = UserService.getAllUsernames(lista);

        expect(UserNames).toContain("sam1");
        expect(UserNames).toContain("sam2");
        expect(UserNames).toContain("sam3");
    });


});