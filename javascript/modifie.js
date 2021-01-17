 var id;
 function Loadpage(){
 	BarreNavigation(false,false,true);
 	document.getElementById("email_modify").focus();
 	document.getElementById("email_modify").addEventListener("keypress", handleKeyPress);
}

function LoadRdvInfo(infoRdv) {
	displayForm(infoRdv["id"],infoRdv["email"]);
	document.getElementById("Nom").value = infoRdv["nom"];
	document.getElementById("prenom").value = infoRdv["prenom"];
	document.getElementById("email").value = infoRdv["email"];
	document.getElementById("tel").value = infoRdv["tel"];
	var selectvalue = document.getElementById("choix_quartier").selectedIndex;
	document.getElementById("choix_quartier").options[selectvalue].value = infoRdv["quartier"];
	document.getElementById("service").value = infoRdv["service"];
	document.getElementById("date").value = infoRdv["Date"];
	document.getElementById("heure").value = infoRdv["heure"];
	document.getElementById("commentaire").value = infoRdv["commentaire"];
}
//Une fonction qui recharge la page de client
function ReLoadRdvClient(email_reload) {
	const callback = function(response) {
		if(response ==0){
   			document.getElementById("demo").innerHTML="Vous n'avez plus un rendez-vous en cours";
   		}else{
   			document.getElementById("demo").innerHTML = response;
   		}
  };
  var url = "php/ReLoadInfoClient.php?email="+email_reload;
  sendToServer(url,callback);
}
var continu=0;
function DeleteRdvServer(delete_rdv){
	continu =0;
	var email= delete_rdv["email"];
	ModalConfirmation();
	document.getElementById("Confirmer").onclick=function () {
		
		const callback = function(response) {
				document.getElementById("demo").innerHTML = response;
			};
		var id;
		id = delete_rdv["id"];
		var url = "php/DeleteRdv.php?id="+id;

		sendToServer(url,callback);
		ReLoadRdvClient(delete_rdv["email"]);
	};
}
//The function whoreturn the rdv of client
function displayInfoClient(){
var x = document.getElementById("demo");
	if(x.style.display != "block"){
		x.style.display = "block";
	}
	const callback = function(response) {
		if (response == 0) {
			document.getElementById("demo").innerHTML = "Le code saisi est incorrect. Veuillez reessayer!";
		} else {
			document.getElementById("mainContainer").style.display = "none";
			document.getElementById("demo").innerHTML = response;
		}
    
  };
  var email = document.getElementById("email_modify").value;
  var auth_code = document.getElementById("email_modify_code").value;
	var url = "php/DisplayInfoClient.php?email="+email+ "&auth_code="+auth_code;
	sendToServer(url, callback);
	//var auth_code = authen_code();
}
function handleKeyPress(event) {
	var email =document.getElementById("email_modify").value;
	if (event.keyCode == 13) {
		var x = VerificationEmail(email);
		if(x)
			document.getElementById("valider").style.display="none";
	}
}
function RechargePage(){
	window.location.assign("modifie_rdv.html");
}
	//declare dans le fichier modifie_rdv.html
	function ValidationEmail(){
		var email =document.getElementById("email_modify").value;
		var x= VerificationEmail(email);
		if(x)
			document.getElementById("valider").style.display="none";
	}
function VerificationEmail(email) {
		if(!email){
			alert("Veuillez entrer votre Adresse e-mail");
	       	document.getElementById("email_modify").style.border = "1px solid red";
		}else if (!checkEmail(email)) {
		  	alert("Adresse e-mail non valide");
	       	document.getElementById("email_modify").style.border = "1px solid red";
	    } else {
	        
		const callback = function(response) {
			if (response == 0) {
				document.getElementById("modal_error").click();
				MyModal(false,false,false,true);
			} else {
				document.getElementById("email_modify").disabled = true;
			    document.getElementById("email_modify").style.border = "none";	
				var x = document.getElementById("CodeConfidentiel");
				if(x.style.display != "block"){
					x.style.display = "block";
					document.getElementById("email_modify_code").focus();
				}
			}
			
		};
		const url = "php/checkUser.php?email=" +email;
		sendToServer(url, callback);
		return true;
	}
}
