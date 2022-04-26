const UserView = require("../app/views/UserView");


describe("Unit Test for user view", () => {
  test('Case 1: Return an error object when try to create a new user with a null payload', () =>{
    const payload = null;
    const result = UserView.createUser(payload);
    expect(result.error).toMatch('Payload no existe');
  });

  test('Case 2: Return an error object when try to create a new user with a payload' +
  ' with invalid properties', () =>{
    const payload = {username: null, name: 12, id: 'id'};
    const result = UserView.createUser(payload);
    expect(result.error).toMatch('Necesitan tener un valor valido');
  });

  test('Case 3: Return an error object when try to create a new user with a payload' +
  ' with missing properties', () =>{
    const payload = { username: "Username" };
    const result = UserView.createUser(payload);
    expect(result.error).toMatch('Necesitan tener un valor valido');
  });

  test('Case 4: Create a user by a given valid payload', () =>{
    const payload = { username: "Username", id: 1, name: "Name" };
    const result = UserView.createUser(payload);
    expect(result.username).toMatch("Username");
    expect(result.id).toBe(1);
    expect(result.name).toMatch("Name");
  });


});
