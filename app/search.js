var main = function() {

	this.box = document.getElementByID("mainSearchBox");

	this.changefunc = function(){
		document.getElementByID("searchResultField").value("changed");

	}

	box.addEventListener("onChange", this.changefunc)

}

main();
