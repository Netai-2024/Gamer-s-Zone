document.addEventListener('DOMContentLoaded', () => {
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        const image = card.dataset.image;
        const url = card.dataset.url;
        
        // Set the background image for the game card
        card.style.backgroundImage = `url(${image})`;
        
        // Add click event to the play button
        card.querySelector('.play-btn').addEventListener('click', () => {
            window.open(url, '_blank');
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here you can add additional functionality like sending the form data to a server
});
