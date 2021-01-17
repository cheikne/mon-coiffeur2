<?php
$servername = "vectorieqisite.mysql.db";
$username = "vectorieqisite";
$password = "R593ErF63Jw";
$dbname = "vectorieqisite";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
  exit('Could not connect');
} else {
	$auth_code = $_REQUEST["auth_code"];
	if($auth_code!=-1){
	$sql = "SELECT * FROM rdv WHERE email='".$_REQUEST["email"]."' AND auth_code='".$_REQUEST["auth_code"]."'";
	}else{
		$sql = "SELECT * FROM rdv WHERE email='".$_REQUEST["email"]."'";
	}
    $result = mysqli_query($conn,$sql);
    if (mysqli_num_rows($result) > 0) {
    	echo "<div class='table-responsive'>";
    	echo "<table class='table' style='border-spacing: 55px;'>";
        echo "<tr>";
        echo "<th>Nom  </th>";
        echo "<th>Prenom  </th>";
        echo "<th class='action'>Email  </th>";
        echo "<th>Numero  </th>";
        echo "<th>Choix du quartier  </th>";
        echo "<th>Service demande  </th>";
        echo "<th>Date  </th>";
        echo "<th>Heure  </th>";
        echo "<th colspan='3' class='action'>Actions  </th>";
	    echo "</tr>";
	  while($row = mysqli_fetch_assoc($result)) {
	    echo "<tr>";
	    echo "<td>".$row["nom"]."</td>";
	    echo "<td>".$row["prenom"]."</td>";
	    echo "<td>".$row["email"]."</td>";
	    echo "<td>".$row["tel"]."</td>";
	    echo "<td>".$row["quartier"]."</td>";
	    echo "<td>".$row["service"]."</td>";
	    echo "<td>".$row["Date"]."</td>";
	    echo "<td>".$row["heure"]."</td>";
	    echo "<td>";
	    echo "<th>";
	    echo "<a href='rdv.html' class='action' onclick='LoadRdvInfo(".json_encode($row).")'>Modifier</a><br>";
	    echo "</th>";
	    echo "<th>";
	    echo "<div class='d-flex justify-content-center'> <button type='button' class='btn btn-danger btn-lg' data-toggle='modal' data-target='#exampleModal' onclick='DeleteRdvServer(".json_encode($row).")'>DELETE</button></div>";
	    echo "</th>";
	    echo "</td>";
        echo "</th>";
	  }
	  echo "</table>";
	  echo "</div>";
	} else {
	  echo 0;
	}
	$conn->close();
}
?>