<?php
$servername = "vectorieqisite.mysql.db";
$username = "vectorieqisite";
$password = "R593ErF63Jw";
$dbname = "vectorieqisite";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
  exit('Could not connect');
} else {

	$sql = "DELETE  FROM rdv WHERE id=".$_REQUEST["id"];
	$result = mysqli_query($conn,$sql);
	$conn->close();
}
?>