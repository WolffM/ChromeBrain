

var main = function() {


	var changefunc = function(){
		document.getElementById("searchResultField").innerHTML= document.getElementById("mainSearchBox").value

		 chrome.history.search({
		 	"text": document.getElementById("mainSearchBox").value
		 },
		 function(historyItems) {
		 var result = document.createElement("div");
		 	for(var x = 0; x < historyItems.length; x+=1){
		 		var temp = document.createElement("P");
		 		temp.innterHTML = historyItems[x].title;
		 		result.appendChild(temp);
		 	}
		 	document.getElementById("searchResultField").appendChild(result);

		 })
	}
	document.getElementById("mainSearchBox").addEventListener("input", changefunc)
}


document.addEventListener('DOMContentLoaded', function () {
main();
});
