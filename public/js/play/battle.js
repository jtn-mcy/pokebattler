let monsterTurn = document.querySelector('#turn').getAttribute('data-turn'); //true = monster's turn
let levelId = document.querySelector('#turn').getAttribute('data-l_id');

let damage;

let monsterName = document
  .querySelector('#monster')
  .getAttribute('data-m_name');
let monsterHp = document.querySelector('#monsterHp').getAttribute('data-m_hp'); //get current monster hp
let monsterId = document.querySelector('#monster').getAttribute('data-m_id'); //get monster id

let pokemonName = document
  .querySelector('#pokemon')
  .getAttribute('data-p_name');
let pokemonHp = document.querySelector('#pokemonHp').getAttribute('data-p_hp'); //get current pokemon hp
let pokemonId = document.querySelector('#pokemon').getAttribute('data-p_id'); //get pokemon id

const playerTakesDamage = async (event) => {
  damage = Math.floor(Math.random() * 11); //deals a range of 0-10 damage

  let newPokemonHp = pokemonHp - damage;
  console.log(
    'pokemonHp: ',
    pokemonHp,
    ' damage: ',
    damage,
    ' newPokemonHp: ',
    newPokemonHp
  );

  if (newPokemonHp < 0) {
    const response = await fetch(`/play/battle/pokemons/${pokemonId}`, {
      method: 'PUT',
      body: JSON.stringify({
        hitpoints: 0,
        is_dead: true,
      }),
      heads: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert(`${pokemonName} has been defeated! Game over!`);
      document.location.replace('/play/score');
    } else {
      alert(`Something went wrong when monster attacked`);
      return;
    }
  } else {
    const response = await fetch(`/play/battle/pokemons/${pokemonId}`, {
      method: 'PUT',
      body: JSON.stringify({
        hitpoints: newPokemonHp,
        is_dead: false,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert(`${pokemonName} took ${damage} damage!`);

      const response = await fetch(`/play/battle/levels/${levelId}`, {
        method: 'PUT',
        body: JSON.stringify({
          monsterTurn: false,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        alert(`Get ready to attack!`);
        document.location.replace('/play/battle/');
      } else {
        alert(`Error changing turn flag`);
      }
    } else {
      alert(`Something went wrong when hurting pokemon`);
    }
  }
};

const playerDealsDmg = async (event) => {
  const move = document
    .querySelector('#p_move_one')
    .getAttribute('data-p_move_one');
  if (moveList[move]) {
    damage = moveList[move].strength;
  } else {
    damage = Math.floor(Math.random() * 6); //deal 0-5 damage
    console.log(`couldn't find ${move}!`);
  }

  //update new monster hp

  let newMonsterHp = monsterHp - damage;
  console.log(
    'monsterHp: ',
    monsterHp,
    ' damage: ',
    damage,
    ' newMonsterHp: ',
    newMonsterHp
  );

  //Is monster dead?
  if (newMonsterHp < 0) {
    const response = await fetch(`/play/battle/monsters/${monsterId}`, {
      method: 'PUT',
      body: JSON.stringify({
        hitpoints: 0,
        is_dead: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert(`You defeated ${monsterName}!!`);
      document.location.replace('/play/post'); //go to post battle screen
    } else {
      alert('Something went wrong when killing monster');
      document.location.reload();
    }
  } else {
    const response = await fetch(`/play/battle/monsters/${monsterId}`, {
      method: 'PUT',
      body: JSON.stringify({
        hitpoints: newMonsterHp,
        is_dead: false,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert(`${monsterName} took ${damage} damage!`);

      const response = await fetch(`/play/battle/levels/${levelId}`, {
        method: 'PUT',
        body: JSON.stringify({
          monsterTurn: true,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        alert(`Get ready for an attack!`);
        document.location.replace('/play/battle/');
      } else {
        alert(`Error changing turn flag`);
      }
    } else {
      alert('Something went wrong when hurting monster');
    }
  }
};

moveList = {
  tackle: {
    strength: '10',
  },
};

console.log('monsterName', monsterName);
console.log('monsterHp', monsterHp);
console.log('monsterId', monsterId);
console.log('pokemonName', pokemonName);
console.log('pokemonHp', pokemonHp);
console.log('pokemonId', pokemonId);
console.log('levelId', levelId);
console.log('monsterTurn', monsterTurn);

if (monsterTurn === 'true') {
  playerTakesDamage();
}

document.querySelector('#p_move_one').addEventListener('click', playerDealsDmg);
