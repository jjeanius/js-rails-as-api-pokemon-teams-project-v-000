
document.addEventListener('DOMContentLoaded', init);

function init() {
    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    let button = document.querySelector('button');

button.addEventListener('click', addPokemon) // allow us to listen to load the content and execute call back function
    function addPokemon(ev){
        console.log(ev.type, ev.target)
    };


}