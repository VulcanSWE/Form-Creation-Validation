Provide real-time feedback to users for form validation.
Ensure data persists across browser sessions using local storage.
Tasks
0. Form Creation and Validation
mandatory
Score: 50.00% (Checks completed: 100.00%)
Repo Requirements :
Create a New Repo in Github
Repo Name : Form-Creation-Validation
Using this user registration form, implement validations to ensure that users provide the right kind of data.


HTML Structure:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Registration Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form id="registration-form">
        <label for="username">Username:</label>
        <input type="text" id="username" required>

        <label for="email">Email:</label>
        <input type="email" id="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" required>

        <button type="submit">Register</button>
        <div id="form-feedback"></div>
    </form>
    <script src="script.js"></script>
</body>
</html>
CSS (style.css):
body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    margin: 0;
}

form {
    background: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
}

input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: calc(100% - 22px); /* Adjust width to account for padding and border */
    box-sizing: border-box; /* Include padding and border in element's total width and height */
}

button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

#form-feedback {
    margin-top: 10px;
    padding: 10px;
    color: #d8000c;
    background-color: #ffbaba;
    border-radius: 4px;
    display: none; /* Initially hide the feedback div */
}
Implement a form validation script using basic JavaScript string methods and conditions. Upon form submission, validate the input fields for username, email, and password according to specific criteria. Display a success message if all validations pass, or appropriate error messages if any validations fail.

Task Requirements
Setup and Initial Code Structure
Start with DOMContentLoaded Event:

Wrap your entire script in a DOMContentLoaded event listener. This ensures your JavaScript runs after the entire HTML document has been loaded.
Form Selection:

Use document.getElementById to select the form with id="registration-form". Store this reference in a constant named form.
Feedback Division Selection:

Similarly, select the division where feedback will be displayed (id="form-feedback") and store it in a constant named feedbackDiv.
Form Submission and Event Prevention
Form Submission Event Listener:
Add an event listener to form for the ‘submit’ event. Use an anonymous function to handle the event.
Inside this function, call event.preventDefault() to prevent the form from submitting to the server. This is crucial for client-side validation.
Input Retrieval and Trimming
Retrieve User Inputs:
Use document.getElementById to select each input field by its respective ID: username, email, and password.
For each, retrieve the .value property and apply the .trim() method to remove any leading or trailing whitespace. Store these trimmed values in constants named after each input field.
Validation Logic
Initialize Validation Variables:

Declare a variable named isValid and set it to true. This will track the overall validation status.
Declare an array named messages to store validation error messages.
Username Validation:

Check if username.length is less than 3. If so, set isValid to false and add a specific error message to messages.
Email Validation:

Check if email includes both ‘@’ and ‘.’ characters. If not, set isValid to false and append a corresponding error message to messages.
Password Validation:

Ensure password.length is at least 8. If it falls short, update isValid to false and add an appropriate error message to messages.
Displaying Feedback
Feedback Display Logic:
Make feedbackDiv visible by setting its style.display to "block".
If isValid remains true, set the textContent of feedbackDiv to "Registration successful!" and its style.color to "#28a745".
If isValid is false, join messages with <br> to form a single string, and assign this to the innerHTML of feedbackDiv. Set feedbackDiv.style.color to "#dc3545".
Repo:

GitHub repository: Form-Creation-Validation
File: index.html, style.css, script.js
