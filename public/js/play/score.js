const game_id = document.querySelector("#game_id").getAttribute('data-g_id');

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
}

gameEnd();

document.querySelector('#goHome').addEventListener('click', goHome)