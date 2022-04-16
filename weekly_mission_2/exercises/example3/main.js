class Profile {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(user, username, age){
    this.user = user;
    this.username = username
    this.status = "Enabled"
    this.age = age
	}

    set SetStatus(stat){
        this.status = stat;
    }

    get GetStatus(){
        return this.status;
    }

    startTrip = () => {
        console.log("Run run ... run!!!!!")
    }

    endTrip = () => {
        console.log("Viaje Terminado!!!!!")
    }
}

class User extends Profile{
    constructor(user, username, age, paymentMethods){
        super(user, username, age);
        this.paymentMethods = paymentMethods;
    }

    get GetPaymentMethods(){
        return this.paymentMethods;
    }

    startTrip = () => {
        console.log("Solo el conductor puede iniciar el viaje!")
    }

    endTrip = () => {
        console.log("Bajaaannn!!!!!")
    }

}

class Driver extends Profile{
    constructor(user, username, age, car){
        super(user, username, age);
        this.car = car;
    }

    startTrip = () => {
        console.log("Llego el usuario, iniciando el viaje...")
    }

    endTrip = () => {
        console.log("Llegamos al destino!!!!!")
    }
}

const userProfile = new User( "Sam123", "Sam", 25, ["Cash", "Card", "Paypal"] );
console.log("userProfile");
console.log(userProfile);
console.log("================================");

console.log("GetPaymentMethods");
console.log(userProfile.GetPaymentMethods);
console.log("================================");

console.log("SetStatus");
userProfile.SetStatus = "Disabled";
console.log(userProfile.GetStatus);
console.log("================================");

const driverProfile = new Driver("Juan123", "Juan", 25, "Seat Leon");
console.log("Driver Status");
console.log(driverProfile.GetStatus);
console.log("================================");

console.log("user startTrip");
userProfile.startTrip();
console.log("================================");

console.log("driver startTrip");
driverProfile.startTrip();
console.log("================================");

console.log("user endTrip");
userProfile.endTrip();
console.log("================================");

console.log("driver endTrip");
driverProfile.endTrip();
console.log("================================");

const prof = new Profile(null, null, null);
console.log("Base Class startTrip");
prof.startTrip();
console.log("================================");

