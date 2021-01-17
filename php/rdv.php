<?php
$servername = "vectorieqisite.mysql.db";
$username = "vectorieqisite";
$password = "R593ErF63Jw";
$dbname = "vectorieqisite";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
  exit('Could not connect');
} 
$id_pr = $_REQUEST["id"];
if($id_pr==-1) {
	$nom = $_REQUEST["nom"];
	$prenom = $_REQUEST["prenom"];
	$email = $_REQUEST["email"];
	$tel = $_REQUEST["tel"];
	$heure = $_REQUEST["heure"];
	$Date_value = $_REQUEST["date"];
	$service = $_REQUEST["service"];
	$quartier = $_REQUEST["quartier"];
	$commentaire = $_REQUEST["commentaire"];

	$sql = "INSERT INTO rdv (nom, prenom, email,tel,heure,Date,service,quartier,commentaire) VALUES ('".$nom."','".$prenom."','".$email."','".$tel."','".$heure."','".$Date_value."','".$service."','".$quartier."','".$commentaire."')";
	$result = mysqli_query($conn,$sql);
	//Envoi de l'email
	$to = $_REQUEST["email"];
	$subject = "Votre rendez-vous en cours";
$message="<!DOCTYPE html>
    <html>
    <head>
     <meta name='viewport' content='width=device-width, initial-scale=1.0'>
     <link rel='stylesheet' href='4/w3.css'>
     <link rel='stylesheet' href='../lib/w3-colors-flat.css'>
        <style>
        .infoClient{
            display:flex;
            margin:10px;
            padding:8px;;
        }
        .button_nodifie{
            text-align:center;
        }
        </style>
    </head>
    <body>
    <div class='w3-container w3-flat-concrete'>
        <h1>Kanela Coiffeur</h1>
        <div class='en_tete'>Bonjour/Bonsoir Mr/M <b>".$prenom."<b/><b>".$nom."<b/>.Bienvenue chez <b>Kanela Coiffeur<b/>votre rendez-vous a ete faite par succes</div>
        <div class='infoClient'>
            <div>
                <p><b>Nom :</b> ".$nom."</p>
                <p><b>Prenom :</b> ".$prenom."</p>
                <p><b>Number :</b> ".$tel."</p>
                <p><b>Date :</b> ".$Date_value."</p>
            </div>
            <div>
                <p><b>Email :</b> ".$email."</p>
                <p><b>Quartier choisi :</b> ".$quartier."</p>
                <p><b>Service demande :</b> ".$service."</p>
                <p><b>Heure :</b> ".$heure."</p>
            </div>
        </div>
    </div>
    <div class='button_nodifie'><b>Modifier votre rendez-vous:</b><a href='maliwaatisera.org/mon-coiffeur/rdv.html' onclick='LoadRdvInfo(".json_encode($_REQUEST).")'>Modifier</a></div>
    </body>
    </html>";
		$headers = "From:  contact@maliwaatisera.org\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		mail($to, $subject, $message,$headers);
} else {
		$newSql = "UPDATE rdv SET email = '".$_REQUEST["email"]."', nom = '".$_REQUEST["nom"]."', prenom = '".$_REQUEST["prenom"]."', tel = '".$_REQUEST["tel"]."', heure = '".$_REQUEST["heure"]."', Date ='".$_REQUEST["date"]."', service = '".$_REQUEST["service"]."', quartier = '".$_REQUEST["quartier"]."', commentaire = '".$_REQUEST["commentaire"]."' WHERE id = ".$_REQUEST["id"];
		$result = mysqli_query($conn,$newSql);
	}
	$conn->close();
?>