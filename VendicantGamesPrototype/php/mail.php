<?php
#Messages sent to
$to = "noah.pikaart.wgd@gmail.com";
#Messages sent from
$noreply = "noreply@kuzmaclass.org";
#Sender email with special chars removed, excluding . and @
$sender = preg_replace('/[^A-Za-z0-9.@\-]/', '', $_POST["email"]);
#Sender name with special chars removed
$senderName = preg_replace('/[^A-Za-z0-9\-]/', '', $_POST["fname"] . $_POST["lname"]);
#Email Subject
$subject = "Vendicant Games Contact Form";
#Message with special chars removed
$message = preg_replace('/[^A-Za-z0-9\-]/', '', $_POST["message"]) . "\r\n \r\n" . "From: " . $sender;
#Headers
$headers = "From: $noreply";
$headers .= "Reply-To: $sender";
$headers .= "MIME-Version: 1.0";
$headers .= "Content-type:text/html; charset=UTF-8";

#Verify required fields are not null
if($message != NULL && $sender !=null && senderName != NULL) {
    #If Message sent
    if(@mail($to, $subject, $message, $headers)) {
        echo 'Message Sent';
    }else {
        echo 'Your message failed to send';
    }
} else {
    echo 'Error sending message. Please verify that all fields were completed correctly.';
}
?>