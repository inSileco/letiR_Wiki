## leti-R Wiki page

This wiki is an attempt at structuring our research efforts in as structure-free an environment as possible!

------
### MkDocs

The goal was to find an easy tool that can be customized and can work with markdown documents. [MkDocs](http://www.mkdocs.org/) provides these features. MkDocs works quite simply by using a .yaml file for configuration, and a folder of .md files to create pages for the wiki. It's  highly customizable and seems like a good candidate to address our needs. I also have not gone through the whole documentation or their [github repository](https://github.com/mkdocs/mkdocs/), so it may be that what I have found unsatisfying thus far has already been addressed.

------------------------
### Tagging in documents

The search function provided by MkDocs does not allow for strict searches (*e.g.* "ggplot2"). I therefore suggest adding a tags section for each document to facilitate indexation and search through the wiki, with all tags preceded by '\_' (\# doesn't work). It would give something like this:

#### Tags
\_Kévin;
\_Steve;
\_Nicolas

-----------------------------------
### Useful commands

#### Local visualization

Use the following command to visualize the wiki locally at the following address in your web browser: http://127.0.0.1:8000

> mkdocs serve

#### Deploying online
Use the following command to push modifications to gh-pages branch after modifications to the wiki have been markdown-cheatsheet

> mkdocs gh-deploy --clean

---------------------------
### Useful links for MkDocs

[MkDocs](http://www.mkdocs.org/) - Overview and installation

[sitepoint](https://www.sitepoint.com/building-product-documentation-mkdocs/) - Building and deploying product documentation with MkDocs

[Embedded Log](http://www.embeddedlog.com/static-docs-from-github-wiki.html)- Automatic update of MkDocs from github wiki with python script

---------------------------
### Useful links for Markdown

<!-- That's mostly for David! -->
[Markdown cheat sheet](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf)

Kévin Cazelle's [repository](https://github.com/KevCaz/Rmarkdowndocfr) on R markdown in french
