//User will choose a pokemon to start off with
//Once chosen, a new pokemon will be posted into the pokemon database using the user's req.session.id

const addCharmander = async () => {
    const response = await fetch ('/play/start/pokemons', {
        method: 'POST',
        body: JSON.stringify({
            name: charmander[0],
            description: charmander[1],
            hitpoints: charmander[2],
            move_one: charmander[3][0],
            sprite: charmander[4]
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/battle');
    } else {
        alert ('Failed to create new pokemon')
        return
    }
}

const addSquirtle = async () => {
    const response =  await fetch ('/play/start/pokemons', {
        method: 'POST',
        body: JSON.stringify({
            name: squirtle[0],
            description: squirtle[1],
            hitpoints: squirtle[2],
            move_one: squirtle[3][0],
            sprite: squirtle[4]
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/battle');
    } else {
        alert ('Failed to create new pokemon')
        return
    }
}

const addBulbasaur = async () => {
    const response =  await fetch ('/play/start/pokemons', {
        method: 'POST',
        body: JSON.stringify({
            name: bulbasaur[0],
            description: bulbasaur[1],
            hitpoints: bulbasaur[2],
            move_one: bulbasaur[3][0],
            sprite: bulbasaur[4]
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/battle');
    } else {
        alert ('Failed to create new pokemon')
        return
    }
};

//base hp of pokemon are different
let charmander = [
    'Charmander', //name
    'A fire-type pokemon from Generation I', //description
    Math.floor(Math.random() * 20 + 40), //randomize starting hp
    ['tackle'], //move_one
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' //sprite
];

let squirtle = [
    'Squirtle', //name
    'A water-type pokemon from Generation I', //description
    Math.floor(Math.random() * 20 + 55), //randomize starting hp
    ['tackle'], //move_one
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'

];

let bulbasaur = [
    'Bulbasaur', //name
    'A grass/poison-type pokemon from Generation I', //descr
    Math.floor(Math.random() * 20 + 50), //randomize starting hp
    ['tackle'], //move_one
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' //sprite
]

// const checkInProgress = async () => {
//     const response = 
// }

document.querySelector('#charmander').addEventListener('click', addCharmander);
document.querySelector('#squirtle').addEventListener('click', addSquirtle);
document.querySelector('#bulbasaur').addEventListener('click', addBulbasaur);