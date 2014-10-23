var ProfileController = function() {

	return {
		getDefaultprofile : function() {
			var profile = new Profile();
			profile.setName("Vinoth");
			profile.setAge(26);
			profile.setPhone("9894312712");
			profile.setEmail("vinoth@hotmail.com");
			profile.setAddress("chennai");
			profile.setImageSrc("D:\\vin_backUp\\dev\\training\\mean\\js-handson\\MyBook\\images\\me.jpg");
			profile.setUserId("raj");
			
			return profile;
		},
		loadProfile : function(profile) {
		
			document.getElementById("name").setAttribute("value", profile.getName());
			document.getElementById("age").setAttribute("value", profile.getAge());
			document.getElementById("phone").setAttribute("value", profile.getPhone());
			document.getElementById("email").setAttribute("value", profile.getEmail());
			document.getElementById("address").value = profile.getAddress();
			document.getElementById("pImage").setAttribute("src", profile.getImageSrc());
			document.getElementById("saveProfile").onclick = function() {new ProfileController().saveProfile(profile);}		
		},
		
		saveProfile : function(profile) {
			profile.setName(document.getElementById("name").value);
			profile.setAge(document.getElementById("age").value);
			profile.setPhone(document.getElementById("phone").value);
			profile.setEmail(document.getElementById("email").value);
			profile.setAddress(document.getElementById("address").value);
			//TODO:Not able to get resource location in Java script
			//profile.setImageSrc(document.getElementById("myFile").value);
			profileService.updateProfile(profile);
			new ProfileController().loadProfile(profile);
		}, 
		
		viewProfile : function(e) {
			document.getElementById("feedPage").className = "hidden";
			document.getElementById("profilePage").className = "show";
			refreshMenu(e);
		}
	};
};