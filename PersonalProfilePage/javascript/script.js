$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
        }
    });
});
