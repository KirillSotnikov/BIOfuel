<?php
	$project_name = "Тестовая форма";
	$from_email = "i@up-site.com.ua";
	$to_email = "sotnikov_k@outlook.com";
	
	$name = trim($_POST["name"]);
	$phone = trim($_POST["phone"]); 
	
	$message = "Имя: $name \nТелефон: $phone" ;.
	$headers = "From: $from_email \r\n";
	$headers .= "Content-type: text/html; charset=\"utf-8\"";
	
	$send_mail = mail($to_email, $project_name, $message, $headers);
	if($send_mail){
		
	}
	else{
		echo "Ошибка!";
	}
?>
