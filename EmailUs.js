document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const rating = document.getElementById('rating').value;

    if (name && email && message && rating) {
        alert('Thank you for your message!');
        // You can add further functionality to send the form data to the server
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
