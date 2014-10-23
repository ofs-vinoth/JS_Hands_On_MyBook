/**
 * Profile Class
 * 
 */ 
function Profile() {

	this.name = null;
	this.age = null;
	this.phone = null;
	this.email = null;
	this.address = null;
	this.imageSrc = null;
	this.userId = null;
};
Profile.prototype = {

	getName: function() {
		return this.name; 
	},
	getAge: function() {
		return this.age;
	},
	getPhone: function() {
		return this.phone;
	},
	getEmail: function() {
		return this.email;
	},
	getAddress: function() {
		return this.address;
	},
	getImageSrc: function() {
		return this.imageSrc;
	},
	getUserId: function() {
		return this.userId; 
	},
	setName: function(name) {
		this.name = name; 
	},
	setAge: function(age) {
		this.age = age;
	},
	setPhone: function(phone) {
		this.phone = phone;
	},
	setEmail: function(email) {
		this.email = email;
	},
	setAddress: function(address) {
		this.address = address;
	},
	setImageSrc: function(imageSrc) {
		this.imageSrc = imageSrc;
	},
	setUserId: function(userId) {
		this.userId = userId; 
	}
};
