

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
	    var magicClosureVar = tabArray[0].url;
	    var magicTitle = tabArray[0].title;
	    chrome.history.search({"text":"google","maxResults":5,
	    	"startTime":(new Date).getTime()-60*60*6*1000000}

	    	,
		    	function(someQueries){
		    		var qName = "Question Unknown :(";
		    		if(someQueries.length>0){
		    			qName = someQueries[0].title;
		    		}	
		    		//Time to log question answer pair 
		    	}

	    	);

	});

	chrome.history.search ( )

}


document.addEventListener('DOMContentLoaded', function () {
main();
});
