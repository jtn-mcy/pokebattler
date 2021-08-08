//Rendering 

const navBeep = new Howl ({
    src: ['sounds/nav_item.mp3'],
    volume: 0.2,
});

const navBeepConfirm = new Howl ({
    src: ['sounds/nav_item_confirm.mp3'],
    volume: 0.2,
});

const playBeep = () => {
    console.log('play!')
    navBeep.play();
}

// const playConfirm = () => {
//     console.log('confirm!');
//     navBeepConfirm.play()
// }

const navBar_item = document.querySelectorAll('.nav-link');
navBar_item.forEach((element) => { element.addEventListener('mouseover', playBeep)});
// navBar_item.forEach((element) => { element.addEventListener('click', playConfirm)});