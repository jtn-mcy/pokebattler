//User will choose a pokemon to start off with
//Once chosen, a new pokemon will be posted into the pokemon database using the user's req.session.id

// This variable contains the id of the newly created game and is used to create a new level.
var newGameId;
// This variable contains the id of the newly created level and is used to create a new monster.
var newLevelId;

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

  // Convert the response into a json object
  const newGame = await response.json();
  // console.log('new game', newGame);
  // Store the id of the new game so that a new level can be created
  newGameId = newGame.id;

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
      game_id: `${newGameId}`,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  // Convert the response into a json object
  const newLevel = await response.json();
  // console.log(newLevel);
  // Store the id of the new level so that a new monster can be created
  newLevelId = newLevel.id;

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
      name: 'Darkrai',
      description: 'Dark',
      hitpoints: Math.floor(Math.random() * 20 + 80),
      move_one: 'tackle',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
      level_id: `${newLevelId}`,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Successfully created a new monster');
  } else {
    alert('Failed to create new monster');
  }
}

async function init() {
  await createNewGame();
  await createNewLevel();
  await createNewMonster();
}

const charmanderEl = document.querySelector('#charmander');
if (charmanderEl) {
  charmanderEl.addEventListener('click', addCharmander);
}
const squirtleEl = document.querySelector('#squirtle');
if (squirtleEl) {
  squirtleEl.addEventListener('click', addSquirtle);
}

const bulbasaurEl = document.querySelector('#bulbasaur');
if (bulbasaurEl) {
  bulbasaurEl.addEventListener('click', addBulbasaur);
}

const continueGameImg = document.querySelector('#continue_game');
if (continueGameImg) {
  continueGameImg.addEventListener(
    'click',
    document.location.replace('/play/battle')
  );
}

init();
