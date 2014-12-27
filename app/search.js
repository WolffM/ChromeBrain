

var main = function() {


	var changefunc = function(){
		document.getElementById("searchResultField").innerHTML= document.getElementById("mainSearchBox").value

	}
	document.getElementById("mainSearchBox").addEventListener("input", changefunc)

}


document.addEventListener('DOMContentLoaded', function () {
main();
});
