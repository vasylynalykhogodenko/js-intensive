const button = document.getElementById('clickButton');

function moveButton() {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.transform = `translate(${x}px, ${y}px)`;
}

function moveButtonHandler() {
    moveButton();
}

function mouseoverHandler() {
    if (Math.random() < 0.5) {
        moveButton();
    }
}

button.addEventListener('mouseover', mouseoverHandler);
button.addEventListener('click', moveButtonHandler);
