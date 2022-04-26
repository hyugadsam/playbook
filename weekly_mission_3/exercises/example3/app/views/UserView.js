const { UserService } = require("../services/UserService");


class UserView{

    static createUser = (user) =>{
        if(user == null)
            return { error: "Payload no existe" };

        if(user.username == null || user.id == null || user.name == null)
            return { error: "Necesitan tener un valor valido" };

        const response = UserService.create(user.id, user.username, user.name);
        return response;
    }

}

module.exports = UserView;