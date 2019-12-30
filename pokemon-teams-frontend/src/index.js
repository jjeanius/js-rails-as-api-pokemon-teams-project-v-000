
    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    const mainDiv = document.querySelector('main')

       fetch(TRAINERS_URL) // fetch request is a get request returns a promise containing
        .then(function (response){ // a response object, which parse the response into json using.then
            return response.json();
         })
        .then(function (json) { //we need to take our parsed data and feed it into a function called addTrainers
          addTrainers(json)
        })

        function addTrainers(trainers){
            trainers.forEach(trainer => {
            let pokiString = ""
            /*trainer.pokemons.forEach(pokemon => {
                pokiString += `<li> ${pokemon.nickname} (${pokemon.species})
                <button class="release" data-pokemon-id="${pokemon.id}"> Release </button> </li>`
            }) */

            mainDiv.innerHTML +=  // adding to the HTML
            `<div class="card" data-id="${trainer.id}"> <p> ${trainer.name} </p>
            <button data-trainer-id ="${trainer.id}" > Add Pokemon </button>
            <ul> ${pokiString} </ul>
            </div>`
         })
        }

        mainDiv.addEventListener('click', e=> {   // adding EventListener to DOM
            if (e.target.dataset.trainerId !== undefined) {
                fetch(POKEMONS_URL, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        trainer_id: e.target.dataset.trainerId
                    })
                })
                .then(res =>res.json())
                .then(addPokemon)
                }
            })

        function addPokemon(pokemon){
            mainDiv.children[pokemon.trainer_id-1].lastElementChild.innerHTML +=
            `<li> ${pokemon.nickname} (${pokemon.species})
            <button class="release" data-pokemon-id="${pokemon.id}"> Release </button></li>`
        }

            mainDiv.addEventListener('click', e =>{
                if(e.target.dataset.trainerId !== undefined) {
                fetch(POKEMONS_URL, {
                    method: "POST",
                    headers: {
                        'Content_Type': 'application/json'
                    },
                    body: JSON.stringify ({
                        trainer_id: e.target.dataset.trainerId
                    })
                })
                .then(res => res.json())
                .then(addPokemon)
                }

                if (e.target.dataset.pokemonId !== undefined){
                    e.target.parentElement.remove()
                    fetch(POKEMONS_URL + '/' + e.target.dataset.pokemonId, {method: 'DELETE'})
                   };
                })

