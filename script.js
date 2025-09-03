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



}