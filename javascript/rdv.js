var nom,prenom,email,date,heure,tel,choix_quartier,comment,id_pr;
var service  = [];
// const sr = scrollReveal();
// sr.reveal('h1');
// id_pr =id_primaire();
function ChampFocus(){
  document.getElementById("Nom").focus();
  document.getElementById("Nom").addEventListener("keypress",champNom);
  document.getElementById("prenom").addEventListener("keypress",champPrenom);
  document.getElementById("email").addEventListener("keypress",champEmail);
  document.getElementById("email").addEventListener("keypress",champEmail);
  document.getElementById("tel").addEventListener("keypress",champTel);
}
function champNom(event){
  if(event.keyCode==13){
    document.getElementById("prenom").focus();
    event.preventDefault();
  }
}
function champPrenom(event){
  if(event.keyCode==13){
    document.getElementById("email").focus();
    event.preventDefault();
  }
}
function champEmail(event){
  if(event.keyCode==13){
    document.getElementById("tel").focus();
    event.preventDefault();
  }
}
function champTel(event){
  if(event.keyCode==13){
   event.preventDefault();
  }
}
function LoadInfo(id_pr,email){
  // debugger;
  if(!id_pr)
    id_pr = -1;
  nom = document.getElementById("Nom").value;
  prenom = document.getElementById("prenom").value;
  email = document.getElementById("email").value;
  tel = document.getElementById("tel").value;
  heure = document.getElementById("heure").value;
  var Select_mois =document.getElementById("mois").selectedIndex;
  var mois = document.getElementById("mois").options[Select_mois].value;
  var Select_jour =document.getElementById("jour").selectedIndex;
  var jour = document.getElementById("jour").options[Select_jour].value;
  var Select_annee =document.getElementById("annee").selectedIndex;
  var annee = document.getElementById("annee").options[Select_annee].value;
  date = jour+" "+mois+" "+annee;
  var selectvalue = document.getElementById("choix_quartier").selectedIndex;
  choix_quartier = document.getElementById("choix_quartier").options[selectvalue].value;
  var i=0;
  var service1 = document.getElementById("option1").checked;
  var service2 = document.getElementById("option2").checked;
  var service3 = document.getElementById("option3").checked;
  if(service1 == true){
    service[i] = document.getElementById("option1").value;i++;
  }
  if(service2 == true){
    service[i] = document.getElementById("option2").value;i++;
  }
  if(service3 == true){
    service[i] = document.getElementById("option3").value;
  }
  comment  = document.getElementById("comment").value;
  if(!nom ||!prenom ||!email|| !tel){
    DisplayError(email,nom,prenom,tel);
    document.getElementById("modal_error").click();
    MyModal(email,false,true,false);
    event.preventDefault();
  }
 else if(!checkEmail(email)) {
    //console.log("email valide");  
     document.getElementById("modal_error").click();
     MyModal(email,true,false,false);
     event.preventDefault();
     document.getElementById("email").style.border="1px solid red";
     document.getElementById("email").focus();
     BorderNone();
   }else{
  SendInfo(nom,prenom,email,date,heure,tel,choix_quartier,comment,service,id_pr);
  var x=0;
  if(id_pr!=-1){
    document.getElementById('id01').style.display='block';
    ModalSucces(true,false,email);
  }
  else{
    //x = ModalSuccess();
    document.getElementById('id01').style.display='block';
    ModalSucces(false,true,email)
  }
}
  return false;
}
//verifier la validite de l'adresse email
 function checkEmail(email) {
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
 }
 function BorderNone(){
  document.getElementById("Nom").style.border="none";
  document.getElementById("prenom").style.border="none";
  document.getElementById("tel").style.border="none";
  document.getElementById("heure").style.border="none";
  document.getElementById("date").style.border="none";
 }
function DisplayError(email,nom,prenom,tel){
  if(!email){
    document.getElementById("email").style.border="1px solid red";
  }
  if(!nom){
    document.getElementById("Nom").style.border="1px solid red";
  }
  if(!prenom){
    document.getElementById("prenom").style.border="1px solid red";
  }
  if(!tel){
    document.getElementById("tel").style.border="1px solid red";
  }
}
//Annuler un rendez vous 
function AnnulerRDV(){
  var email = "kane.cheickne@gmail.com";
  displayForm(19,email);
}
function SendInfo(nom,prenom,email,date,heure,tel,choix_quartier,comment,service,id_pr){
  //alert("id == "+id_pr);
  var str = "php/rdv.php?nom=" + nom + "&prenom=" + prenom + "&email=" + email + "&date=" + date + "&heure=" + heure + "&tel=" + tel + "&quartier=" + choix_quartier + "&commentaire=" + comment + "&service=" + service + (id_pr == undefined ? "" : "&id=" + id_pr);
  const callback = function(response) {
    document.getElementById("demo").innerHTML = response;
  };
  sendToServer(str, callback);
}
function sendToServer(url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      callback(this.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
//Redirige le client vers la liste de rende-vous, declare dans ModalModifieRDV
function LoadRdvAfterModifie(email){
    const callback = function(response) {
    document.getElementById("info").style.display = "none";
    document.getElementById("demo1").innerHTML = response;
  };
  var auth_code = -1;
   var url ="php/DisplayInfoClient.php?email="+email+"&auth_code="+auth_code;
  sendToServer(url, callback);
  
}
//Redirige le client vers la page d'acueil, declare dans ModalSuccess
 function PageAcueil(is_modifie,is_rdv,email){
  document.getElementById('id01').style.display='none'
   // document.getElementById("info").style.display = "none";
   //  document.getElementById("demo1").innerHTML = "votre rendez-vous a ete enregistre par succes."+"<br>"+
   //  "Vous receverez un e-mail dans quelques secondes";
   if(is_rdv)
     window.location.assign("index.html");
   if(is_modifie)
    LoadRdvAfterModifie(email)

}