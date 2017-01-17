<?php
function clean($string) {
    str_replace('/[^A-Za-z0-9\-]/', '', $string);
    return $string;
}

$to = "noah.pikaart.wgd@gmail.com";
$noreply = "noreply@kuzmaclass.org";
$sender = $_POST["email"];
$senderName = clean($_POST["fname"] . $_POST["lname"]);
$subject = "Vendicant Games Contact Form";
$message = clean($_POST["message"]);
$message .= "\r\n \r\n" . "From: " . $sender;
$headers = "From: $noreply";
$headers .= "Reply-To: $sender";
$headers .= "MIME-Version: 1.0";
$headers .= "Content-type:text/html; charset=UTF-8";



if($message != NULL && $sender !=null && senderName != NULL) {
    #echo 'Message sent';
    mail($to, $subject, $message, $headers);
} else {
    echo 'Error sending message. Please verify that all fields were completed correctly.';
}




?>