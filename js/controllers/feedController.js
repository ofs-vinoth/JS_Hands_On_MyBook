var FeedController = function() {
	var that = this;
	
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
		
		deleteFeed : function(feed) {
			service.deleteFeed(feed.getId());
			renderUI();
		},
		
		createFeed : function(feed) {
			if (this.isURL(feed)) {
				service.addFeed(new URLFeed(+new Date, feed));	
			} else {
				service.addFeed(new TextFeed(+new Date, feed));
			}
			renderUI();
		},
		
		isURL : function(str) {
			var pattern = new RegExp('^(?:[a-z]+:)?//', 'i');
			if(!pattern.test(str)) {
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
		}, 
		
	    addFeedDiv : function(feed) {

			var feedDiv = document.createElement("div");
			feedDiv.setAttribute("id", feed.getId());
							
			var feedHolderDiv = document.createElement("div");
			feedHolderDiv.className = "feedDiv";
			
			var feedImg = document.createElement("img");
			feedImg.src = profile.getImageSrc();
			feedImg.className = "proImg"
			feedHolderDiv.appendChild(feedImg);
			
			var feedLabel = null;
			if (feed instanceof URLFeed) {
				feedDiv.className = "urlFeedDiv";
				feedLabel = document.createElement("label");
				feedLabel.setAttribute("style", "cursor: pointer");
				feedLabel.onclick = function() {window.open(feed.getFeed(), '_blank');};
			} else {
				feedLabel = document.createElement("label");
				feedDiv.className = "txtFeedDiv";
			}
			
			feedLabel.className = "feedText";
			feedLabel.innerHTML  = feed.getFeed();
			feedHolderDiv.appendChild(feedLabel);
			
			feedLabel = document.createElement("label");
			feedLabel.className = "feedLabel";
			feedLabel.innerHTML  = new Date (feed.getId()).toLocaleString();
			feedHolderDiv.appendChild(feedLabel);
			
			var element = document.createElement("input");
			element.className = "btnDelFeed";
			element.setAttribute("type", "button");
			element.setAttribute("value", "X");
			element.onclick = function() {
				new FeedController().deleteFeed(feed);
			};
			feedHolderDiv.appendChild(element);
			
			feedDiv.appendChild(feedHolderDiv);
			
			var element = document.getElementById("feeds");
			element.appendChild(feedDiv);
				
		},
		
		viewFeeds : function(e) {
			document.getElementById("feedPage").classList.add("show");
			document.getElementById("profilePage").classList.add("hidden");
			document.getElementById("feedPage").classList.remove("hidden");
			document.getElementById("profilePage").classList.remove("show");	
			refreshMenu(e);
		}
	}
}