const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
// Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(element => {
    console.log("Nombre", element.name);
    element.stack.forEach(stack => {
        console.log(element.name, "Stack: ", stack);
    });
});

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const StackList = explorers.map(ex => ex.stack);
console.log("StackList");
console.log(StackList);

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const ExStackJs = explorers.filter(ex => ex.stack.includes("js"));
console.log("ExStackJs");
console.log(ExStackJs);

// Busca el primer explorer que sea de la CDMX, usa FIND
const explorerCDMX = explorers.find(ex => ex.city === "CDMX");
console.log("explorerCDMX");
console.log(explorerCDMX);

// Obtén la suma de todos los exercises_completed, usa REDUCE
const exercises_completed = explorers.reduce( (acumulador, ex) => acumulador + ex.exercises_completed, 0 ); //0 Valor inicial porque si no lo maneja como objeto
console.log("exercises_completed");
console.log(exercises_completed);

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const exercisesFinished = explorers.some(ex => ex.missions.frontend.exercisesFinished != undefined && ex.missions.frontend.exercisesFinished === true)
console.log("exercisesFinished");
console.log(exercisesFinished);

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const isFinished = explorers.every(ex => ex.missions.onboarding.isFinished != undefined && ex.missions.onboarding.isFinished === true)
console.log("isFinished");
console.log(isFinished);