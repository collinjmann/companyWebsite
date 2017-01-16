<?php
$to = "noah.pikaart.wgd@gmail.com";
$sender = $_GET("email");
$subject = "Vendicant Games Contact Form";
$message = $_GET("message") + "<br/>From:" + $_GET("fname") + $_GET("lname");
$headers = "From: $sender";

#mail($to, $subject, $message, $headers);

echo $_GET("email");

?>