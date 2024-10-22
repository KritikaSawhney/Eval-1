// JavaScript for storing signup data in localStorage with validation
document.querySelector('#signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the signup form
    const name = document.querySelector('#signup-name').value.trim();
    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    // Validation flags
    let isValid = true;

    // Clear previous error messages
    document.querySelector('#name-error').textContent = '';
    document.querySelector('#username-error').textContent = '';
    document.querySelector('#email-error').textContent = '';
    document.querySelector('#password-error').textContent = '';

    // Validate Name
    if (name.length < 2) {
        document.querySelector('#name-error').textContent = 'Name must be at least 2 characters.';
        isValid = false;
    }

    // Validate Username
    if (username.length < 3) {
        document.querySelector('#username-error').textContent = 'Username must be at least 3 characters.';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.querySelector('#email-error').textContent = 'Enter a valid email address.';
        isValid = false;
    }

    // Validate Password
    if (password.length < 6) {
        document.querySelector('#password-error').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    // If all validations pass, store data in localStorage
    if (isValid) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userUsername', username);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('Sign-up successful! Data saved locally.');
        window.location.href = 'signin.html';
    }
});
