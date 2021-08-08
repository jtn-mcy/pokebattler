const goNext = () => {
    document.location.replace('/play/battle')
}

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