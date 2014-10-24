var ProfileController = function() {

	return {
		getDefaultprofile : function() {
			var profile = new Profile();
			profile.setName("Vinoth");
			profile.setAge(26);
			profile.setPhone("9894312712");
			profile.setEmail("vinoth@hotmail.com");
			profile.setAddress("chennai");
			profile.setImageSrc("images\\me.jpg");
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
			try {
				new ProfileController().validateProfile(profile);			
			} catch (err) {
				alert(err);
			}
			profileService.updateProfile(profile);
			new ProfileController().loadProfile(profile);
		}, 
		
		validateProfile : function(profile) {
		
			if (!profile.getName()) 
				throw ("Invalid name");
			else if (!profile.getAge()) 
				throw ("Invalid Age");
			else if (!profile.getPhone()) 
				throw ("Invalid Phone");
			else if (!profile.getEmail()) 
				throw ("Invalid Email");			 
		}, 
		
		viewProfile : function(e) {
			document.getElementById("feedPage").classList.remove("show");
			document.getElementById("profilePage").classList.remove("hidden");
			document.getElementById("feedPage").classList.add("hidden");
			document.getElementById("profilePage").classList.add("show");			
			refreshMenu(e);
		}
	};
};