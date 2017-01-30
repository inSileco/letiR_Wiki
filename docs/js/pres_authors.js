// Script to introduce ourselves
// last edit KC: 30/01/2017


collabo = YAML.load("../data/authors_info.yml");

for (var i=0; i<collabo.length; i++){
  document.getElementById('pres_authors').innerHTML += "<b>" + collabo[i].given_name + " "+ collabo[i].family_name + "</b>"
  for (var j=0; j<collabo[i].institution.length; j++){
    document.getElementById('pres_authors').innerHTML += " " + collabo[i].institution[j].name;
  }
  document.getElementById('pres_authors').innerHTML += "<br/>" 
}
