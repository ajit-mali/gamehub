const vdo = document.getElementById('backVdo');
const main = document.querySelector('main');
setTimeout(() => {
    main.style.backdropFilter = 'blur(5px)';
    console.log(vdo, main)
}, 4500);

vdo.playbackRate = 2;
