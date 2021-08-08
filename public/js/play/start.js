//User will choose a pokemon to start off with
//Once chosen, a new pokemon will be posted into the pokemon database using the user's req.session.id

const addCharmander = async () => {
  const response = await fetch('/play/start/pokemons', {
    method: 'POST',
    body: JSON.stringify({
      name: charmander[0],
      description: charmander[1],
      hitpoints: charmander[2],
      move_one: charmander[3][0],
      sprite: charmander[4],
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/play/battle');
  } else {
    alert('Failed to create new pokemon');
    return;
  }
};

const addSquirtle = async () => {
  const response = await fetch('/play/start/pokemons', {
    method: 'POST',
    body: JSON.stringify({
      name: squirtle[0],
      description: squirtle[1],
      hitpoints: squirtle[2],
      move_one: squirtle[3][0],
      sprite: squirtle[4],
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/play/battle');
  } else {
    alert('Failed to create new pokemon');
    return;
  }
};

const addBulbasaur = async () => {
  const response = await fetch('/play/start/pokemons', {
    method: 'POST',
    body: JSON.stringify({
      name: bulbasaur[0],
      description: bulbasaur[1],
      hitpoints: bulbasaur[2],
      move_one: bulbasaur[3][0],
      sprite: bulbasaur[4],
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/play/battle');
  } else {
    alert('Failed to create new pokemon');
    return;
  }
};

//base hp of pokemon are different
let charmander = [
  'Charmander', //name
  'A fire-type pokemon from Generation I', //description
  Math.floor(Math.random() * 20 + 40), //randomize starting hp
  ['tackle'], //move_one
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', //sprite
];

let squirtle = [
  'Squirtle', //name
  'A water-type pokemon from Generation I', //description
  Math.floor(Math.random() * 20 + 55), //randomize starting hp
  ['tackle'], //move_one
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
];

let bulbasaur = [
  'Bulbasaur', //name
  'A grass/poison-type pokemon from Generation I', //descr
  Math.floor(Math.random() * 20 + 50), //randomize starting hp
  ['tackle'], //move_one
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', //sprite
];

// const checkInProgress = async () => {
//     const response =
// }

async function createNewGame() {
  const response = await fetch('/play/start/games', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Successfully created a new game');
  } else {
    alert('Failed to create new game');
  }
}

async function createNewLevel() {
  const response = await fetch('/play/start/levels', {
    method: 'POST',
    body: JSON.stringify({
      location: 'location1',
      monster_left: 5,
      monsterTurn: false,
      game_id: 1,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Successfully created a new level');
  } else {
    alert('Failed to create new level');
  }
}

async function createNewMonster() {
  const response = await fetch('/api/monsters', {
    method: 'POST',
    body: JSON.stringify({
      name: 'monster1',
      description: 'desc1',
      hitpoints: Math.floor(Math.random() * 20 + 55),
      move_one: 'Slam',
      level_id: 1,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Successfully created a new monster');
  } else {
    alert('Failed to create new monster');
  }
}

const continueGameImg = document.querySelector('#continue_game');

async function init() {
  if (continueGameImg) {
    await createNewGame();
    await createNewLevel();
    await createNewMonster();
    document.location.replace('/play/battle');
  }
}

init();

document.querySelector('#charmander').addEventListener('click', addCharmander);
document.querySelector('#squirtle').addEventListener('click', addSquirtle);
document.querySelector('#bulbasaur').addEventListener('click', addBulbasaur);
