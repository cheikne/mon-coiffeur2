//Demande la confirmation client avant supprimer un rdv
function ModalConfirmation(){
  document.getElementById("askConfirmation").innerHTML=`<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
		    <div class='modal-dialog'>
		        <div class='modal-content'>
		            <div class='modal-header'>
		                <div class='d-flex pl-0'><img src='https://imgur.com/Kh1gwTq.png'>
		                    <h5 class='modal-title ml-2' id='exampleModalLabel'>Delete the link?</h5>
		                </div> <button type='button' class='close' data-dismiss='modal' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button>
		            </div>
		            <div class='modal-body'>
		                <p class='text-muted'>Si vous effacez, le rendez-vous sera effacé pour toujour.Vous êtes sûr de vouloir continuer?</p>
		            </div>
		            <div class='modal-footer'> <button type='button' id="cancel" class='btn btn-light' data-dismiss='modal'>Cancel</button>
		             <button type='button' id="Confirmer"  class='btn btn-danger' data-dismiss='modal'>Confirmer</button> </div>
		        </div>
		    </div>
		</div>`;
		return;
}
function BarreNavigation(is_home,is_rdv,is_edit){
  document.getElementById("menu").innerHTML=`<nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#" style="border:1px dashed white;border-radius:30px;">Salon de Coifure</a>
            </div>
            <ul class="nav navbar-nav">
              <li class=${is_home?"active":""}><a href="index.html">Home</a></li>
              <li class=${is_rdv?"active":""}><a href="rdv.html">Prendre un rendez-vous</a></li>
              <li class=${is_edit?"active":""}><a href="modifie_rdv.html">Modifier un Rendez-Vous</a></li>
            </ul>
          </div>
        </nav>`;
}
function MyModal(email,is_emailvalide,is_ChampVide,is_NonResponseRdv){
  document.getElementById("myModal").innerHTML=` <div class="modal-dialog">
            
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title" id="message"></h4>
                </div>
                <div class="modal-body">
                  <p style="color:black;">Merci pour votre bienveillance!.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal" onclick=${is_NonResponseRdv?"RechargePage()":""}>Fermer</button>
                </div>
               </div>
            </div>`;
        if(is_emailvalide){
          document.getElementById("message").innerHTML="Adresse E-mail non valide.";
          document.getElementById("message").style.color="black";
        }
        if(is_ChampVide){
           document.getElementById("message").innerHTML="Veuillez remplir tous les champs.!";
           document.getElementById("message").style.color="black";
         }
        if(is_NonResponseRdv){
          document.getElementById("message").innerHTML="Vous n'avez pas un rdv en cours. Veuillez verifier votre adresse email.";
          document.getElementById("message").style.color="black";
        }
}
function ModalSucces(is_edit,is_rdv,email) {
  document.getElementById("id01").innerHTML=`
          <div class="w3-modal-content w3-animate-top w3-card-4" style="margin-top:0;">
            <header class="w3-container w3-teal"> 
              <span onclick="PageAcueil(${is_edit},${is_rdv},'${email}')" class="w3-button w3-display-topright">&times;</span>
              <h2 id="id_h2"></h2>
            </header>
            <div class="w3-container">
              <p id="id_p1"></p>
              <p id ="email_client"></p>
            </div>
            <footer class="w3-container w3-teal">
              <p>Merci pour votre bienveillance.!</p>
           </footer>
         </div>`;
      if(is_rdv){
        document.getElementById("id_h2").innerHTML="Votre rendez-vous a été enregistré par succès.";
        document.getElementById("email_client").innerHTML=email;
        document.getElementById("id_p1").innerHTML="Vous receverez un e-mail dans quelques secondes.";
      }
      if(is_edit){
        document.getElementById("id_h2").innerHTML="Votre rendez-vous a été Modifie par succès.";
        document.getElementById("email_client").innerHTML=email;
        document.getElementById("id_p1").innerHTML="Vous receverez un e-mail dans quelques secondes.";
      }
}
function HideDate(element){
  console.log("hello world",element.selectedIndex);
  var thirtyDays=[4,6,10,11];
  if(thirtyDays.indexOf(element.selectedIndex)>0){
    var x = document.getElementById("jour");
    for(var i=x.length-1;i>=1;i--){
      x.remove(i);
    }
    for(var i=1;i<=30;i++){
      var option = document.createElement("option");
      option.text = i;
      x.add(option);
    }
  }else if(element.selectedIndex==2){
    var x = document.getElementById("jour");
    for(var i=x.length-1;i>=1;i--){
      x.remove(i);
    }
    for(var i=1;i<=28;i++){
      var option = document.createElement("option");
      option.text = i;
      x.add(option);
    }
  }else{
    var x = document.getElementById("jour");
    for(var i=x.length-1;i>=1;i--){
      x.remove(i);
    }
    for(var i=1;i<=31;i++){
      var option = document.createElement("option");
      option.text = i;
      x.add(option);
    }
  }
}
function displayForm(id,email) {
  document.body.innerHTML = `<div id="menu"></div>
        <div id="info">
        <h1 style="font-family: monospace;text-align:center;">Bienvenue Chez Kanela Coiffeur</h1>
        <div class="container" onload="ChampFocus()">
            <form  onsubmit="return LoadInfo()">
                <div  class="form-group">
                    <label for="usr">Nom:</label>
                    <input class="form-control" id="Nom" type="text" placeholder ="Nom ici.....">
                </div><br>
                <div  class="form-group">
                <label for="usr">Prenom:</label>
                    <input class="form-control" id="prenom" type="text" placeholder="prenom ici....">
                </div><br>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <div class="input-group">
                    <input id="email" type="text" class="form-control" name="email" placeholder="Email">
                    <br><span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>   
                  </div>
                </div>
                <div  class="form-group">
                    <label for="num">Numero de telephone:</label>
                    <input type="tel" class="form-control" id="tel"  placeholder="numero de telephone...">
                </div><br>
                <div class="form-group" id="date_value" style="width:300px;display:flex;" onload="DateComplet()">
                </div><br>
                <div  class="form-group">
                    <label>
                      <input type="time"  id="heure" value="12:00">  Heure
                    </label>
                </div>
            <div class="form-group">
              <label for="sel1">Choix du quartier</label>
              <select class="form-control" id="choix_quartier" name="sellist1">
              <option selected disabled>Choix du quartier</option>
                <option>Banconi</option>
                <option>Djikoroni</option>
                <option>Hamdalaye</option>
                <option>Sirakoro</option>
              </select>
              <br>
          </div>
          <h2 style="font-family: courrier;">Voulez vous :</h2>
          <label class="checkbox-inline">
            <input type="checkbox" class="form-check-input" id="option1"  value="Visite du salon">  Visiter le salon
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" class="form-check-input" id="option2"  value="Achat d'un produit">  Acheter un produit
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" class="form-check-input" id="option3" value="Coiffure">  Se Coiffer
          </label><br><br>
          <div class="form-group">
            <label for="comment">Commentaire:</label>
            <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
          </div>
      <button id="modal_error" style="display:none;color:black" data-toggle="modal" data-target="#myModal">button</button>
      <div class="modal fade" id="myModal" role="dialog" > </div>
      <div class="w3-container">
        <button class="btn btn-info btn-lg" onclick ="LoadInfo(${id},'${email}')">Soumettre</button>
        <div  id="id01" class="w3-modal" class="w3-modal w3-animate-opacity"></div>
         <button type="button" class="btn btn-info btn-lg" data-toggle="modal"  onclick="AnnulerRDV()">Reprendre</button>
      </div>
      </form>
    </div><br><br><br>
    <div id="footer"></div>
  </div><br><br>
  <h2 class="conf" id="demo1"></h2><p id="demo"></p>`;
  BarreNavigation(false,true,false);
  DateComplet();
  ChampFocus();
  ModalSucces(false,false,false);
    $(function() {
      $("#footer").load("footer.html");    
      //document.getElementById("header").innerHTML='<object type="text/html" width="100%"; height="100%" data="header.html" ></object>';
            console.log("celle la est le footer");

    });
}