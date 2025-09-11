// Define the async function
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container where data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> to hold the list
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run the function when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);


