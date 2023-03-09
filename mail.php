<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$number= $_POST['mobile'];
$message= $_POST['message'];
$to = "hello@iipl.live";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message ."\r\n Mobile number = " . $number;
$headers = "From: noreply@https://iipl.live/careers.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>