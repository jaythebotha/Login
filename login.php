<?php
// Read users from a text file
$users = file('users.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

// Get user input
$username = $_POST['username'];
$password = $_POST['password'];

// Check if user exists and password matches
$user_found = false;
foreach ($users as $user) {
    list($stored_username, $stored_password) = explode(':', $user);
    if ($stored_username === $username && password_verify($password, $stored_password)) {
        $user_found = true;
        break;
    }
}

// Provide feedback based on user input
if ($user_found) {
    echo "Login successful!";
} else {
    echo "Invalid username or password.";
}
?>