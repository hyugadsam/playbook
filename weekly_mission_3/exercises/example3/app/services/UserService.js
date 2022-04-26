const User = require('../User');

class UserService{
    static create = (id, username, name) =>{
        const defaultBio = "Some info for new users";
        let usser = new User(id, username, name, defaultBio);
        return usser;
    }

    static getInfo = (user) =>{
        let arrayinfo = []
        arrayinfo.push(user.id);
        arrayinfo.push(user.username);
        arrayinfo.push(user.name);
        arrayinfo.push(user.bio);
        return arrayinfo;
    }

    static updateUserUsername = (user, newUsername) =>{
        user.username = newUsername;
        return user;
    }

    static getAllUsernames = (users = []) =>{
        const lista = []
        users.forEach(element => {
            lista.push(element.username);
        });
        return lista;
    }
}

module.exports = {
    UserService
}