//This line of codes ensure that the code runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Step 1: Select the form and feedback div elements
    //selecting the form and feedback div elements
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('feedback');



    // Step 2: Add event listener for form submission
    //adding an event listener to the form for the submit event
    form.addEventListener('submit',  function(event){
        
        //preventing the default form submission behavior
        event.preventDefault();

    // Step 3: Retrieve and trim input values

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Step 4: Validate input values

    let isValid = true;
    let messages = [];

    //step 4a: Validate username
    
    if (username.length < 3){
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
    }

    //step 4b: Validate email using a simple regex pattern
    if (!email.includes('@') || !email.includes('.')){
        isValid = false;
        messages.push('Please enter a valid email address.');
    }

    //step 4c: Validate password
    if (password.length < 8){
        isValid = false;
        messages.push('Password must be at least 6 characters long.');
    }

    // Step 5: Provide feedback to the user
    




}