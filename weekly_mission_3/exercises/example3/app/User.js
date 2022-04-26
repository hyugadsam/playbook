class User{
    constructor(id, username, name, bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }

    get getUsername(){
        return this.username;
    } 

    get getBio(){
        return this.bio;
    }

    get getDateCreated(){
        return this.dateCreated;
    }

    get getLastUpdated(){
        return this.lastUpdated;
    } 

    set setUsername(name){
        this.username = name;
        this.lastUpdated = new Date();
    }

    set setBio(bio){
        this.bio = bio;
        this.lastUpdated = new Date();
    }

}

module.exports = User;


//npm install --save-dev jest
