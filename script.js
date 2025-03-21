let text = document.getElementById('text');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.5 + 'px';
    cloud1.style.left = value * -1.5 + 'px';
    cloud2.style.left = value * 1.5 + 'px';
});

