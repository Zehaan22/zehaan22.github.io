<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $subject = trim($_POST['subject']);
    $message = trim($_POST['message']);

    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        die("Please fill all required fields.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    $to = 'zehaan.naik@gmail.com';

    // Safe headers
    $headers = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Message:\n$message";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>