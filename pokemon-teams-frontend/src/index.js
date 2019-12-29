
//document.addEventListener('DOMContentLoaded', init);

//function init() {
    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    const mainDiv = document.querySelector('main')

       fetch (TRAINERS_URL) // fetch request is a get request returns a promise containing
        .then(res => res.json()) // a response object, which parse the response into json using.then
        .then(addTrainers)  //we need to take our parsed data and feed it inot a function called addTrainers

        function addTrainers(trainers) {
           trainers.forEach(trainer => {
               let pokiString = " "
               trainer.pokemons.forEach(pokemon => {
                   pokiString +=
                   `<li> ${pokemon.nickname} (${pokemon.species})
                   <button class= "release" data-pokemon-id = "${pokemon.id}"> Release</button> </li>`
               })

               mainDiv.innerHTML +=  // adding to the innerHTML
               `<div class="card" data-id="${trainer.id}"> <p> ${trainer.name} </p>
               <button data-trainer-id ="${trainer_id}" > Add Pokemon </button>
               <ul> ${pokiString} </ul></div>`
            })
        }

        mainDiv.addEventListener('click', e=> {   // adding EventListener to DOM
            debugger
        }

            if (e.target.dataset.trainerId !== undefined) {
                fetch(POKEMONS_URL, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'applicaiton/json'
                    },
                    body:JSON.stringify({
                        trainer_id: e.target.dataset.trainerId
                    })
                })
                .then(res =>res.json())
                .then(addPokemon)
            }
        

        function addPokemon(pokemon) {
            mainDiv.children[pokemon.trainer_id-1].lastElementChild.innerHTML +=
            `<li> ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}"> Release </button> </button></li>`
        }