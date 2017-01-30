// contains() and unique() functions were found here
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


//https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}



// function do add hyperlinks
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
