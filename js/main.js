/**
 * LOGIN Class
 * Do all Login page related operation like sign in, validation .. etc.
 *
 */
var LOGIN = function() {
	
	var username = "";
	var password = "";
	
	return {
		/**
		 * Get username & password from text field.
		 * Validate username & password.
		 * Once user credential validated, it will redirect to Feed page.
		 */
		signIn: function() {
			username = document.getElementById("usename").value;
			password = document.getElementById("password").value;
			try {
				if (!this.validate(username, password)) return;
				
				if ("raj" == username && "vinoth" == password) {
					window.location = "feed.html"
					return;
				} else {
										
				}
			} catch (err) {
				alert(err);
				document.getElementById("usename").value = "";
				document.getElementById("password").value = "";
			}			
		},
		
		/**
		 * Validate username & password.
		 * Username field Should be 1-8 characters .
		 * Password field should be 1-6 characters
		 */
		validate:function(username, password) {
		
			var message = null;
			if (username == null || username.length <1 || username.length > 8) {
				throw("Invalid User Name : User Name should not empty & gretaer than 8 characters");
				
			} else if (password == null || password.length < 1 || password.length < 6) {
				throw("Invalid Password : Password should not empty & less than 6 characters");				
			}
			return true;
		}
	}

};