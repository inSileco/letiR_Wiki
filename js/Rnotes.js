// The two first functions were found here
//http://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array

Array.prototype.contains = function(v) {
  for(var i = 0; i < this.length; i++) {
      if(this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
      if(!arr.contains(this[i])) {
          arr.push(this[i]);
      }
  }
  return arr;
}

var post = YAML.load("../data/Rblogposts.yml");
var categ = [];
for (var i=0; i<post.length; i++){
  categ.push(post[i].category);
}
var ucateg = categ.unique();
var uscateg = ucateg.sort();

document.getElementById('myDiv').innerHTML += "<br/>"

for (var i=0; i<uscateg.length; i++){
  document.getElementById('myDiv').innerHTML += "<h3>" + uscateg[i] + "</h3>" + "<hr>";
  for (var j=0; j<post.length; j++){
    if (post[j].category === uscateg[i]){
      document.getElementById('myDiv').innerHTML += "<b><a href=" + post[i].url + ">"
      + post[i].title + "</b></a>"
      + " <i>" + post[i].date + "</i> "
      + post[i].description;
    }
  }
  document.getElementById('myDiv').innerHTML += "<br/><br/>"
}
