let monsterTurn = document.querySelector('#turn').getAttribute('data-monsterTurn'); //true = monster's turn

if (monsterTurn) {
    playerTakesDamage()
}

const playerDealsDmg = async (event) => {
    let damage;

    let monsterHp = document.querySelector('#monsterHp').getAttribute('data-hp'); //get current monster hp
    let monsterId = document.querySelector('#monster').getAttribute('data-id'); //get monster id
    let monsterName = document.querySelector('#monster').getAttribute('data-name');

    const move = document.querySelector('#move_one').getAttribute('data-move_one');
    if (moveList[move]) {
        damage = moveList[move].strength
    } else {
        damage = Math.floor(Math.random() * 5);
        console.log(`couldn't find ${move}!`)};
    
    //update new monster hp
    let newMonsterHp = monsterHp - damage;
    
    //Is monster dead?
    if (newMonsterHp < 0) {
        const response = await fetch(`/api/monsters/${monsterId}`, {
            method: 'PUT',
            body: JSON.stringify({
                hitpoints: 0,
                is_dead: true,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert(`You defeated ${monsterName}!!`);
            document.location.replace('/post'); //go to post battle screen
        } else {
            alert ('Something went wrong when killing monster')
        };
    } else {
        const response = await fetch(`/api/monsters/${monsterId}`, {
            method: 'PUT',
            body: JSON.stringify({
                hitpoints: newMosnterHp,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert(`${monsterName} took ${damage} damage!`);
            alert(`Get ready for an attack!`);
            document.location.reload();
        }

    }
}

moveList = {
    'tackle': {
        strength: '10'
    },
}


document.querySelector('#move_one').addEventListener('click', playerDealsDmg)