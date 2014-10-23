/**
 * Feed Class
 * Do all Feed page related operation like Production, deletion .. etc.
 *
 */
 
var FEEDSERVICE  = function() {
	var feeds = [];
	var urlFeed = new URLFeed(+new Date, "http://www.google.com");
	var textFeed = new TextFeed(+new Date, "google");
	feeds.push(urlFeed);
	feeds.push(textFeed);
	return {
		/**
		 * Get username & password from text field.
		 * Validate username & password.
		 * Once user credential validated, it will redirect to Feed page.
		 */
		addFeed: function(feed) {
			feeds.push(feed);
		},
		
		/**
		 * Validate username & password.
		 * Username field Should be 1-8 characters .
		 * Password field should be 1-6 characters
		 */
		deleteFeed:function(feedId) {		
			for (var i = 0, length = feeds.length; i < length; i++) {
				if (feeds[i].getId() == feedId) {
					feeds.removeByIndex(i);
					return;
				}
			}
		},
		
		/**
		 *
		 */
		getFeeds:function() {
			return feeds;
		}
	}

};