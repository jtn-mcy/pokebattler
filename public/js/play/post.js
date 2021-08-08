const monsterTracker = document
  .querySelector('#tracker')
  .getAttribute('data-m_left');
const gameId = document.querySelector('#tracker').getAttribute('data-game_id');
const levelId = document
  .querySelector('#tracker')
  .getAttribute('data-level_id');
let score = document.querySelector('#tracker').getAttribute('data-score');

async function createMonster() {
  const response = await fetch('/api/monsters', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Darkrai',
      description: 'Dark',
      hitpoints: Math.floor(Math.random() * 20 + 80),
      move_one: 'tackle',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
      level_id: `${levelId}`,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Successfully created a new monster');
  } else {
    console.log('Failed to create a new monster');
  }
}

const goNext = async () => {
  if (monsterTracker === 0) {
    score += 10;
    const response = await fetch(`/play/post/game/${gameId}`, {
      method: 'PUT',
      body: JSON.stringify({
        beat_game: true,
        score: score,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/play/score');
    }
  } else {
    score++;
    //TODO: post a new monster here
    await createMonster();
    const response = await fetch(`/play/post/game/${gameId}`, {
      method: 'PUT',
      body: JSON.stringify({
        beat_game: false,
        score: score,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/play/battle');
    }
  }
};

const victorySound = new Howl({
  src: ['../sounds/pokemon_victory.mp3'],
  volume: 0.2,
});

const postStartUp = (event) => {
  if (victorySound.playing()) {
    return;
  }
  victorySound.play();
};

postStartUp();

document.querySelector('#goNext').addEventListener('click', goNext);
