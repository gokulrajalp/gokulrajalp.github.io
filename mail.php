<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "gokulrajalp@gmail.com";

$subject = "gokulrajalp's Portfolio";

$body = "Name = " . $name . "\r\nEmail = " . $email . "\r\nMessage = " . $message;

$headers = "From: noreplay@gmail.com" . "\r\n" . "CC: somebodyelse@gmail.com";

mail($to,$subject,$body,$headers);

echo '<script>alert("Message Sent to GokulRaja LP");</script>';
echo '<script>windows.location.href="index.html";</script>';


?>