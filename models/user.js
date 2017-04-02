var mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    Name: String,
    email: { type: String,  unique: true },
    // password: { type: String },
});

//UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);