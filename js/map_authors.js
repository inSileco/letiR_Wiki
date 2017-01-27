// Script to creat a map of collaborators
collabo = YAML.load("../data/authors_info.yml");
document.getElementById('map_authors').innerHTML += "coll"
//
var mymapc = L.map('map_authors', {
    zoomControl: false
});
mymapc.setView([47, -32], 3);
//
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2Y2F6IiwiYSI6ImNpdjFocHZwczAwcGkydG1pNGs1a2ppd3MifQ.0jdxiQSbgzu7wfanSkreaA', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
     maxZoom: 20,
 }).addTo(mymapc);

//
var zoomHomec = new L.Control.zoomHome([47, -32], 3);
zoomHomec.addTo(mymapc);

//
var myMarkerc = L.AwesomeMarkers.icon({
  icon: 'user',
  prefix: 'fa',
  markerColor: 'darkblue'
});
//
var myMarkerme = L.AwesomeMarkers.icon({
  icon: 'user',
  prefix: 'fa',
  markerColor: 'darkred'
});

//
function add_hyperlink(arg, arg2) {
  var out;
  if (arg == null) {
    out = "";
  }
  else {
    out = "<a href=" + arg + ">" + arg2 + "<a/>";
  }
  return out;
}

// L.marker([48.452900, -68.512790], {icon: myMarkerme}).addTo(mymapc);

//
//
//
// for (var i=0; i<collabo.length; i++){
//   for (var j=0; j<collabo[i].institution.length; j++){
//     var lat=collabo[i].institution[j].lat;
//     var lon=collabo[i].institution[j].lon;
//      L.marker([lat,lon], {icon: myMarkerc}).addTo(mymapc)
//      .bindPopup(collabo[i].given_name + " " + collabo[i].family_name
//      + "<br>" + collabo[i].institution[j].name + "<br>"
//      + add_hyperlink(collabo[i].institution[j].osmlink, "<i class='fa fa-globe fa'></i> &nbsp;")
//      + add_hyperlink(collabo[i].website, " Website &nbsp;")
//      + add_hyperlink(collabo[i].github, " <i class='fa fa-github fa'></i> &nbsp;")
//    );
//   }
// }
