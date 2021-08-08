//Rendering 

const navBeep = new Howl ({
    src: ['sounds/nav_item.mp3'],
    volume: 0.2,
});

const navBeepConfirm = new Howl ({
    src: ['../../sounds/nav_item.mp3'],
    volume: 0.2,
});

const playBeep = () => {
    if (!navBeep) {
        console.log('play!')
        navBeepConfirm.play()
    } else {
    console.log('play!')
    navBeep.play();
    }
}

// const playConfirm = () => {
//     console.log('confirm!');
//     navBeepConfirm.play()
// }

const navBar_item = document.querySelectorAll('.nav-link');
navBar_item.forEach((element) => { element.addEventListener('mouseover', playBeep)});
// navBar_item.forEach((element) => { element.addEventListener('click', playConfirm)});