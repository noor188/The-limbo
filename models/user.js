var mongoose              = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate')

var UserSchema= new mongoose.Schema({
	username: String,
	password: String,
	googleId: { type: String },
  	googleProfile: { type: Object },
  	googleAccessToken: {type: String}
});

UserSchema.index({username: 1, googleId: 1}, {unique: true});
UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", UserSchema);