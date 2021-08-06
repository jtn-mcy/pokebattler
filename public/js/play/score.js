const goHome = () => {
    document.location.replace('/');
}

document.querySelector('#goHome').addEventListener('click', goHome)