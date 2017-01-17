<?php
$to = "noah.pikaart.wgd@gmail.com";
$noreply = "noreply@kuzmaclass.org";
$sender = $_POST["email"];
$subject = "Vendicant Games Contact Form";
$message = $_POST["message"] . "<br/>" . "From: " . $sender;
$headers = "From: $noreply";
$headers .= "MIME-Version: 1.0";
$headers .= "Content-type:text/html";
$headers .= "charset=UTF-8";



if($message != NULL && $sender !=null) {
    echo 'Message sent';
    mail($to, $subject, $message, $headers);
} else {
    echo 'Error sending message. Please verify that all fields were completed correctly.';
}


?>