<?php
$servername = "vectorieqisite.mysql.db";
$username = "vectorieqisite";
$password = "R593ErF63Jw";
$dbname = "vectorieqisite";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
  exit('Could not connect');
} else {
	$sql = "SELECT * FROM rdv WHERE email='".$_REQUEST["email"]."'";
    $result = mysqli_query($conn,$sql);
    if (mysqli_num_rows($result) > 0) {
	  $randomNumber = strval(rand(0,9)).strval(rand(0,9)).strval(rand(0,9)).strval(rand(0,9));
	  $newSql = "UPDATE rdv SET auth_code = '".$randomNumber."' WHERE email = '".$_REQUEST["email"]."'";
	  mysqli_query($conn,$newSql);
	  $to = $_REQUEST["email"];
	$subject = "mon-coiffeur:Code secret";
	$message ="Votre code est :".$randomNumber;
	$headers = "From: contact@maliwaatisera.org";
	mail($to, $subject, $message,$headers);
	  echo 1;
	} else {
	  echo 0;
	}
	$conn->close();
}
?>