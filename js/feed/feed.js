var service = new FEEDSERVICE();
var FeedController = function() {
	
	return {
		postFeed:function() {
			try {
				var feed = document.getElementById("postFeed").value;
				this.validate(feed);				
				this.createFeed(feed);
			} catch(err) {
				alert(err);
			}
		},
		
		createFeed : function(feed) {
			if (this.isURL(feed)) {
				service.addFeed(new URLFeed(+new Date, feed));	
			} else {
				service.addFeed(new TextFeed(+new Date, feed));
			}
			new RenderUI();
		},
		
		isURL : function(str) {
			var pattern = new RegExp('^(?:[a-z]+:)?//', 'i');
			if(!pattern.test(str)) {
				alert("Please enter a valid URL.");
				return false;
			} else {
				return true;
			}
		},
		
		validate:function(feed) {			
			var message = null;
			if (feed == null || feed.length <1) {
				throw("Invalid Feed : Fedd should not empty");					
			} 
			return true;
		}
	}
}
var RenderUI = function() {
	var feeds = service.getFeeds();
	
	var addFeedDiv = function(element, index, array) {

		var feed = element;
			
		var feedDiv = document.createElement("div");
		feedDiv.setAttribute("id", feed.getId());
		feedDiv.className = feed.getType() == "URL" ? "urlFeedDiv" : "txtFeedDiv";
		
		var feedHolderDiv = document.createElement("div");
		feedHolderDiv.className = "feedDiv";
		
		var feedImg = document.createElement("img");
		feedImg.src="p1.jpg";
		feedHolderDiv.appendChild(feedImg);
		
		var feedLabel = document.createElement("label");
		feedLabel.className = "feedLabel";
		feedLabel.innerHTML  = feed.getType() + " Feed";
		feedHolderDiv.appendChild(feedLabel);
		
		feedLabel = document.createElement("label");
		feedLabel.className = "feedLabel";
		feedLabel.innerHTML  = new Date (feed.getId()).toLocaleString();
		feedHolderDiv.appendChild(feedLabel);
		
		var element = document.createElement("input");
		element.className = "btnDelFeed";
		element.setAttribute("type", "button");
		element.setAttribute("value", "X");
		element.setAttribute("onclick", "foo()");
		feedHolderDiv.appendChild(element);
		
		feedDiv.appendChild(feedHolderDiv);
		
		var element = document.getElementById("feeds");
		element.appendChild(feedDiv);
		
	};
	
	var element = document.getElementById("feeds");
	element.innerHTML = "";
	feeds.forEach(addFeedDiv);
}

new RenderUI();
