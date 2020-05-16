Thanks for your message!

<?php
	
	if (isset($_POST["submuit"])){}
	$userName 		= $_POST['name'];
    $userEmail	 	= $_POST['email'];
    $$userEmail	 	= $_POST['phone'];
	$userMessage 		= $_POST['subject'];
	$msg = $_POST["msg"];

	$to 			= "aminchamsaz@gmail.com";
	$subject 		= "Email from my website";	
	$message = "name: ".$userName."\n"."userEmail".$userEmail."\n"."userEmail: ".$userEmail."\n"."Wroe the following: "."\n\n".$userMessage;
	$header= "From: ".$email;


	if(mail($to,$suject,$message,$header)){
		echo "<h1>Sent successfully! thank you"." ".$userName."We will contact you shortly!</h1>";
	}
	else {
		echo "Something went wrong!"
	}

}
?>
