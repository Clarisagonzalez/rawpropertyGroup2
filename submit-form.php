<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email details
    $to = "info@rawpropertycorp.com"; // Change this to your company's email address
    $subject = "Message from Contact Form";
    $body = "Name: $name\nEmail: $email\n\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
} else {
    // If the request method is not POST, show an error message
    echo "Error: Invalid request.";
}
?>
