let text = document.getElementById("text");
let hill2 = document.getElementById("hill2");
let hill1 = document.getElementById("hill1");
let hill8 = document.getElementById("hill8");
let leaves = document.getElementById("leaves");

window.addEventListener('scroll', () => {
    value = window.scrollY;
    let hill8Top = hill8.offsetTop;
    if (value >= 0 && value <= hill8.offsetHeight - 700) {
        hill8.style.top = value * 1 + 'px';
    }

    text.style.top = value * 1 + 'px';

    leaves.style.top = value * -1.5 + 'px';
    leaves.style.left = value * 1.5 + 'px';
    hill2.style.left = value * -1 + 'px';
    hill1.style.left = value * 1 + 'px';
    
});