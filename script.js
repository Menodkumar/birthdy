// Confetti Effect (Optional)
function confetti() {
    let count = 200;
    let colors = ['#ff4d94', '#ff80b3', '#ff66b2', '#ff3399'];
    let container = document.createElement('div');
    container.setAttribute('id', 'confetti-container');
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(confetti);
    }
}

// Reveal surprise message on button click
document.getElementById('reveal-message').addEventListener('click', () => {
    document.getElementById('surprise').style.display = 'block';
    confetti(); // Call confetti effect when the surprise is revealed
});
