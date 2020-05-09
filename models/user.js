var mongoose              = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate')

var UserSchema= new mongoose.Schema({
	username: String,
	password: String,
	gender: String,
	email: String,
	loved_one_email:String,
	agree: String,	
	words_of_affirmation: Number,
	acts_of_service: Number,
	receiving_gifts: Number,
	quality_time: Number,
	physical_touch : Number,
	googleId: { type: String },
  	googleProfile: { type: Object },
  	googleAccessToken: {type: String}
});

UserSchema.index({username: 1, googleId: 1}, {unique: true});
UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", UserSchema);