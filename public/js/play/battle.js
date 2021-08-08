let monsterTurn = document.querySelector('#turn').getAttribute('data-turn'); //true = monster's turn
let levelId = document.querySelector('#turn').getAttribute('data-l_id');
let monster_left = document.querySelector('#turn').getAttribute('data-m_left');
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

const faintSoundPokemon = new Howl ({
  src: ['/sounds/pokemon_faint.mp3'],
  volume: 0.2,
})

const faintSoundMonster = new Howl ({
  src: ['/sounds/monster_faint.mp3'],
  volume: 0.2
})

const cutSound = new Howl ({
  src: ['/sounds/pokemon_cut.mp3'],
  volume: 0.2,
})

// faintSound.play();

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
    faintSoundPokemon.play();
    const response = await fetch(`/play/battle/pokemons/${pokemonId}`, {
      method: 'PUT',
      body: JSON.stringify({
        hitpoints: 0,
        is_dead: true,
      }),
      headers: { 'Content-Type': 'application/json' },
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
  cutSound.play();
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
    faintSoundMonster.play()
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
      console.log('monsters left before change: ', monster_left)
      monster_left--
      console.log('monsters left after change: ', monster_left)
      const response = await fetch(`/play/battle/levels_monster/${levelId}`, {
        method: 'PUT',
        body: JSON.stringify({
          monster_left: monster_left
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (response.ok) {
        // console.log('check data');
        document.location.replace('/play/post'); //go to post battle screen
      }
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
    strength: '40',
  },
};

// console.log('monsterName', monsterName);
// console.log('monsterHp', monsterHp);
// console.log('monsterId', monsterId);
// console.log('pokemonName', pokemonName);
// console.log('pokemonHp', pokemonHp);
// console.log('pokemonId', pokemonId);
// console.log('levelId', levelId);
// console.log('monsterTurn', monsterTurn);

if (monsterTurn === 'true') {
  playerTakesDamage();
}



document.querySelector('#p_move_one').addEventListener('click', playerDealsDmg);
