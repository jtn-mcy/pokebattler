const game_id = document.querySelector("#game_id").getAttribute('data-g_id');
const poke_id = document.querySelector("#score-pokemon").getAttribute('data-p_id');

const goHome = () => {
    document.location.replace('/');
}

const gameEnd = async () => {
    const response = await fetch(`/play/score/game/${game_id}`, 
    {
        method: "PUT",
        body: JSON.stringify({
            isCurrent: false
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        console.log('Game marked as ended');
    }

    const is_currentResponse = await fetch(`/play/score/pokemons/${poke_id}`, {
        method: "PUT",
        body: JSON.stringify({
            is_current: false
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (is_currentResponse.ok) {
        console.log('Pokemon marked as no longer current')
    };

    // const jsonPokemon = allPokemon.json();
    // console.log('jsonPokemon', jsonPokemon);

    // for await (object of jsonPokemon) {
    //     let pokeId = object.id;
    //     console.log(pokeId);
    //     const response = await fetch (`/play/score/pokemons/${pokeId}`, {
    //         method: "PUT",
    //         body: JSON.stringify({
    //             is_current: false
    //         }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     console.log(response);
    // }

    // // console.log(allPokemon);
}

gameEnd();

document.querySelector('#goHome').addEventListener('click', goHome)