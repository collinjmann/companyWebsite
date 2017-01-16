<?php
$to = "noah.pikaart.wgd@gmail.com, collin.mann.wgd@gmail.com";
$sender = $_POST["email"];
$subject = "Vendicant Games Contact Form";
$message = $_POST["message"];
$headers = "From: $sender";

mail($to, $subject, $message, $headers);
?>