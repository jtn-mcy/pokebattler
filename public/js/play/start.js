const { response } = require("express");

const addCharmander = async () => {
    await fetch ('/api/pokemons', {
        method: 'POST',
        body: JSON.stringify({
            name: charmander[0],
            description: charmander[1],
            hitpoints: charmander[2],
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
    await fetch ('/api/pokemons', {
        method: 'POST',
        body: JSON.stringify({
            name: squirtle[0],
            description: squirtle[1],
            hitpoints: squirtle[2],
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
    await fetch ('/api/pokemons', {
        method: 'POST',
        body: JSON.stringify({
            name: bulbasaur[0],
            description: bulbasaur[1],
            hitpoints: bulbasaur[2],
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
    'Charmander',
    'A fire-type pokemon from Generation I',
    Math.floor(Math.random() * 20 + 40), //randomize starting hp
];

let squirtle = [
    'Squirtle',
    'A water-type pokemon from Generation I',
    Math.floor(Math.random() * 20 + 55), //randomize starting hp
];

let bulbasaur = [
    'bulbasaur',
    'A grass/poison-type pokemon from Generation I',
    Math.floor(Math.random() * 20 + 50), //randomize starting hp
]

// const checkInProgress = async () => {
//     const response = 
// }

document.querySelector('#charmander').addEventListener('click', addCharmander);
document.querySelector('#squirtle').addEventListener('click', addSquirtle);
document.querySelector('#bulbasaur').addEventListener('click', addBulbasaur);