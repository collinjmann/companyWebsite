<?php
$to = "noah.pikaart.wgd@gmail.com, collin.mann.wgd@gmail.com";
$sender = $_GET["email"];
$subject = "Vendicant Games Contact Form";
$message = $_GET["message"];
$headers = "From: $sender";

mail($to, $subject, $message, $headers);



?>