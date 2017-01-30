// Script to creat a map of to locate ourselves
// KC: 30/01/2017

collabo = YAML.load("../data/authors_info.yml");
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


// NB: you cam use your own icon: http://leafletjs.com/examples/custom-icons/
//
//
for (var i=0; i<collabo.length; i++){
  for (var j=0; j<collabo[i].institution.length; j++){
    var lat=collabo[i].institution[j].lat;
    var lon=collabo[i].institution[j].lon;
     L.marker([lat,lon]).addTo(mymapc)
     .bindPopup("<b>" + collabo[i].given_name + collabo[i].family_name + "</b>"
     + "<br>" + collabo[i].institution[j].name + "<br>"
     + add_hyperlink(collabo[i].institution[j].osmlink, "<i class='fa fa-expand' aria-hidden='true'></i> &nbsp;")
     + add_hyperlink(collabo[i].website, " <i class='fa fa-link' aria-hidden='true'></i> &nbsp;")
     + add_hyperlink(collabo[i].github, " <i class='fa fa-github fa'></i> &nbsp;")
   );
  }
}
