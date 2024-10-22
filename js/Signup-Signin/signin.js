
// Function to validate email format using regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password length
function validatePassword(password) {
    return password.length >= 6;
}

// Event listener for the sign-in form submission
document.querySelector('#signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    // Get the values entered in the sign-in form
    const signinEmail = document.querySelector('#signinEmail').value.trim();
    const signinPassword = document.querySelector('#signinPassword').value.trim();

    let formIsValid = true; // Flag to track form validity

    // Clear previous error messages
    document.querySelector('#signin-email-error').textContent = '';
    document.querySelector('#signin-password-error').textContent = '';

    // Email validation
    if (!validateEmail(signinEmail)) {
        formIsValid = false;
        document.querySelector('#signin-email-error').textContent = "Please enter a valid email address.";
    }

    // Password validation
    if (!validatePassword(signinPassword)) {
        formIsValid = false;
        document.querySelector('#signin-password-error').textContent = "Password must be at least 6 characters long.";
    }

    // Proceed only if the form is valid
    if (formIsValid) {
        // Get the stored signup data
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        // Compare the entered credentials with the stored credentials
        if (signinEmail === storedEmail && signinPassword === storedPassword) {
            alert('Sign-in successful!');
            // Redirect or perform other actions
            window.location.href = 'dashboard.html'; // Uncomment for actual redirect
        } else {
            alert('Invalid email or password. Please try again.');
        }
    }
});
