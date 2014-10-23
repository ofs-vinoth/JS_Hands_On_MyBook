/**
 * ProfileService Class
 * Do all Profile page related operation like Production, updation .. etc.
 *
 */ 
var ProfileService  = function() {

	return {
		/**
		 * 
		 */
		addProfile: function(profile) {
			if(this[profile.getUserId()] == undefined) {
				this[profile.getUserId()] = profile;
			} else {
				throw (profile.getUserId() + " User Already Exist");
			}
		},
		
		/**
		 * 
		 */
		updateProfile:function(profile) {		
			if(this[profile.getUserId()] != undefined) {
				this[profile.getUserId()] = profile;
			} else {
				throw ( profile.getUserId() + " User not Exist");
			}
		},
		
		getProfile:function(userId) {
			if(this[userId] != null && this[userId] != undefined) {
				return this[profile.getUserId()];
			} else {
				throw ( profile.getUserId() + " User not Exist");
			}
		}
	};

};