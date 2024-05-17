<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Here, you can process the form data, send emails, etc.
    echo "Form submitted successfully";
} else {
    // Handle invalid requests
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
