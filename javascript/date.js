function  DateComplet() {
	document.getElementById('date_value').innerHTML=`
	      <select class="form-control" id="mois" onchange="HideDate(this)">
	        <option disabled selected>Mois</option>
	        <option>Janvier</option>
	        <option>Fevrier</option>
	        <option>Mars</option>
	        <option>Avril</option>
	        <option>Mai</option>
	        <option>Juin</option>
	        <option>Juillet</option>
	        <option>Août</option>
	        <option>Septembere</option>
	        <option>Octobre</option>
	        <option>Novembre</option>
	        <option>Decembre</option>
	      </select>
	      <select class="form-control" id="jour" style="margin-left:20px;border-raduis:60px;">
	      <option disabled selected>jours</option>
	      </select>
	      <select class="form-control" id="annee"  style="margin-left:20px;">
	        <option disabled selected>2020</option>
	      </select>`;
}