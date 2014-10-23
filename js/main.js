
//Maintainig Gloabl level
var service = new FEEDSERVICE();
var profileService = new ProfileService();
var feedCont = new FeedController();
var proCont = new ProfileController();
var profile = new ProfileController().getDefaultprofile();
profileService.addProfile(profile);
Array.prototype.removeByIndex = function(index) {
    this.splice(index, 1);
};

var renderUI = function() {
	var feeds = service.getFeeds();
	var profile = profileService.getProfile("raj");
	
	
	var loadProfile = function(profile) {
		document.getElementById("name").setAttribute("value", profile.getName());
		document.getElementById("age").setAttribute("value", profile.getAge());
		document.getElementById("phone").setAttribute("value", profile.getPhone());
		document.getElementById("email").setAttribute("value", profile.getEmail());
		document.getElementById("address").value = profile.getAddress();
		document.getElementById("pImage").setAttribute("src", profile.getImageSrc());
		document.getElementById("saveProfile").onclick = function() {new FeedController().deleteFeed(feed);}		
	}
	
	var element = document.getElementById("feeds");
	element.innerHTML = "";
	feeds.forEach(feedCont.addFeedDiv);
	document.getElementById("name").className = "main-container";
	proCont.loadProfile(profile);
}

var refreshMenu = function(currentMenu) {

   var found = false;
   var elements = document.getElementsByClassName("a_menu");
   if (currentMenu) { 
	   for (i = 0; i < elements.length; i++) {
			if(elements[i].innerHTML==currentMenu.innerHTML) {
				elements[i].parentElement.classList.add('selected');
			 found = true;
			} else {
				elements[i].parentElement.classList.remove('selected');
			}
		}
	}
   if(!found){
	  document.getElementByClass("a_menu")[0].parentElement.classList.add('selected');
   }
}
renderUI();

