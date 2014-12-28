

var main = function() {


	var changefunc = function(){


		 chrome.history.search({
		 	"text": document.getElementById("mainSearchBox").value
		 },
		 function(historyItems) {
		 var result = document.createElement("div");
		 	for(var x = 0; x < historyItems.length; x+=1){
		 		var temp = document.createElement("P");
		 		temp.innerHTML = historyItems[x].title;
		 		result.appendChild(temp);
		 	}
		 	console.log(result);
			document.getElementById("searchResultField").innerHTML=result.innerHTML;
		 })
	}
	document.getElementById("mainSearchBox").addEventListener("input", changefunc)
	
	chrome.tabs.query({active:true,currentWindow:true},function(tabArray){
	    console.log(tabArray[0].url);
	});
}


document.addEventListener('DOMContentLoaded', function () {
main();
});
