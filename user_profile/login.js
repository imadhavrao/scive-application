document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Retrieve form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials for both profiles
    if (username === 'ys7205@srmist.edu.in' && password === '12345') {
        // Redirect to Yahvi's dashboard
        window.location.href = 'yahvi.html'; // Replace with your target page path
    } else if (username === 'ds5369@srmist.edu.in' && password === '12345') {
        // Redirect to Dhiraj's dashboard
        window.location.href = 'dheeraj.html'; // Replace with your target page path
    } else {
        // Display an error message for invalid credentials
        alert('Invalid username or password');
    }
});
