document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation with regex
        if (!emailRegex.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation - making it consistent with error message
        if (password.length < 6) {
            isValid = false;
            messages.push('Password must be at least 6 characters long.');
        }

        // Feedback display
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.textContent = 'Registration successful!'; // Using textContent instead of innerHTML
            form.reset();
        } else {
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
            // Safer way to display messages
            feedbackDiv.textContent = messages.join(' ');
        }
    });
});