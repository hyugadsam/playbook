class Spiderman {
    constructor (nombre, edad, actor, totalPeliculas, estudioCine) {
        this.nombre = nombre;
        this.edad = edad;
        this.actor = actor;
        this.totalPeliculas = totalPeliculas;
        this.estudioCine = estudioCine;
    }

    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.estudioCine} Studio`
    }

  }
  
  // Esta línea nos permite exportar nuestra clase
  module.exports = Spiderman