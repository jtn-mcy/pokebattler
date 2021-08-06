let monsterTurn = document.querySelector('#turn').getAttribute('data-turn'); //true = monster's turn
let levelId = document.querySelector('#turn').getAttribute('data-l_id')


const playerTakesDamage = async (event) => {
    let damage;

    let pokemonName = document.querySelector('#pokemon').getAttribute('data-p_name');
    let pokemonHp = document.querySelector('#pokemonHp').getAttribute('data-p_hp'); //get current pokemon hp
    let pokemonId = document.querySelector('#pokemon').getAttribute('data-p_id'); //get pokemon id

    damage = Math.floor(Math.random()*11); //deals a range of 0-10 damage

    let newPokemonHp = pokemonHp - damage;

    if (newPokemonHp < 0) {
        const response = await fetch (`/api/pokemon/${pokemonId}`, {
            method: 'PUT',
            body: JSON.stringify({
                hitpoints: 0,
                is_dead: true,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert(`${pokemonName} has been defeated! Game over!`);
            document.location.replace('/score');
        } else {
            alert(`Something went wrong when monster attacked`);
            return
        }
    } else {
        const response = await fetch(`/api/pokemon/${pokemonId}`, {
            method: 'PUT',
            body: JSON.stringify({
                hitpoints: newPokemonHp,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert(`${pokemonName} took ${damage} damage!`);
            alert(`Get ready to attack!`);

            const response = await fetch(`/api/levels/${levelId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    monsterTurn: false
                }),
                headers: { 'Content-Type': 'application/json' }
            })
            if (response.ok) {
                document.location.reload();
            } else {
                alert(`Error changing turn flag`);
            }
        } else{
            alert(`Something went wrong when hurting pokemon`)
        }
    }
}

const playerDealsDmg = async (event) => {
    let damage;

    let monsterName = document.querySelector('#monster').getAttribute('data-m_name');
    let monsterHp = document.querySelector('#monsterHp').getAttribute('data-m_hp'); //get current monster hp
    let monsterId = document.querySelector('#monster').getAttribute('data-m_id'); //get monster id


    const move = document.querySelector('#move_one').getAttribute('data-p_move_one');
    if (moveList[move]) {
        damage = moveList[move].strength
    } else {
        damage = Math.floor(Math.random() * 6); //deal 0-5 damage
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
            document.location.reload();
        };
    } else {
        const response = await fetch(`/api/monsters/${monsterId}`, {
            method: 'PUT',
            body: JSON.stringify({
                hitpoints: newMonsterHp,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert(`${monsterName} took ${damage} damage!`);
            alert(`Get ready for an attack!`);

            const response = await fetch(`/api/levels/${levelId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    monsterTurn: true
                }),
                headers: { 'Content-Type': 'application/json' }
            })
            if (response.ok) {
                document.location.reload();
            } else {
                alert(`Error changing turn flag`);
            }
        } else {
            alert ('Something went wrong when hurting monster');
        }

    }
}

moveList = {
    'tackle': {
        strength: '10'
    },
}

if (monsterTurn) {
    playerTakesDamage()
}

document.querySelector('#move_one').addEventListener('click', playerDealsDmg)