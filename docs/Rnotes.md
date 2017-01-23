## R notes

This is a page where some helpful R resources are indexed.
It is a actually a selection of blogposts mainly found via the R-bloggers (a blog hub) mailing list.

<div id="myDiv">
</div>




<script>
  var post = YAML.load("../data/Rblogposts.yml");
  for (var i=0; i<post.length; i++){
    document.getElementById('myDiv').innerHTML += "<h3>" + post[i].category + "</h3>"
    + "<hr>"
    + "<b><a href=" + post[i].url + ">"
    + post[i].title + "</b></a>"
    + " <i>" + post[i].date + "</i> "
    + post[i].description;
  }
</script>
