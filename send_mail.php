<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "pisarencomihail82@gmail.com";
    $subject = "Mesaj de la $name";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Mesajul a fost trimis cu succes!";
    } else {
        echo "A apărut o eroare. Te rugăm să încerci din nou.";
    }
}
?>
