Thanks for your message!

<?php
	
	$userName 		= $_POST['name'];
    $userEmail	 	= $_POST['email'];
    $userPhone	 	= $_POST['phone'];
	$userMessage 		= $_POST['subject'];

	$to 			= "aminchamsaz@gmail.com";
	$subject 		= "Email from my website";
	$body 			= "Information Submitted:";

	$body .= "\r\n Name: " . $userName;
    $body .= "\r\n Email: " . $userEmail;
    $body .= "\r\n Phone: " . $userPhone;
	$body .= "\r\n Message: " . $userMessage;

	mail($to, $subject, $body);
?>
