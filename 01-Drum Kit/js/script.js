const playSound = (e) => {
    // console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
    // console.log(audio);

    const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`);
    // console.log(key)

    if (!audio) {
        return;
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    console.log(e.path[0]);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// console.log(keys);

window.addEventListener('keydown', playSound);