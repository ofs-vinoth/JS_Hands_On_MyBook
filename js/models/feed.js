/**
 * Feed Class
 * id - > timestamp
 * type -> URL or TEXT
 */ 
function Feed(id,type) {
	this.id = id;
	this.type = type;
};
Feed.prototype = {
	getId: function() {
		return this.id; 
	},
	getType: function() {
		return this.type;
	}
};

/**
 * URLFeed Class
 * extends from Feed
 */ 
function URLFeed(id, url) {
	this.id = id;
	this.type = "URL";
	this.url = url;
};
URLFeed.prototype = Object.create(Feed.prototype);
URLFeed.prototype.getFeed = function() {
		return this.url; 
};


/**
 * TextFeed Class
 * extends from Feed
 */ 
function TextFeed(id, text){
	this.id = id;
	this.type = "Text";
	this.text = text;	
};
TextFeed.prototype = Object.create(Feed.prototype, TextFeed.prototype);
TextFeed.prototype.getFeed = function() {
		return this.text; 
}
