
var builder = require('botbuilder');
var express = require("express");
var router = express.Router();
var mongoose            =       require("mongoose");
var User                =       require("../models/user");
var bodyParser          =       require("body-parser");
var helper				= 		require("../helper");

//=========================================================
// dialogs
//=========================================================

var Greet 				= 		require("../dialog/greet");
var Profile				=		require("../dialog/profile");
var Help 				= 		require("../dialog/help");
var GenralInfo  		= 		require("../dialog/info-general");
var SubjectInfo 		= 		require("../dialog/info-subject");
var WebDev 	    		=      	require("../dialog/webdev");
var MakeAppointment		= 		require("../dialog/makeApointment");
//=========================================================
// Bot Setup
//=========================================================
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID|| 'cf79fde4-0886-4a5f-9388-5afbeb608ede',
    appPassword: process.env.MICROSOFT_APP_PASSWORD || 'AoRqywNmbqMMvKPM5GxphYG'
 });
var bot = new builder.UniversalBot(connector);
var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/704619d4-75c8-444d-adf8-8fc4f9b275da?subscription-key=e1c57927de8240149a148206f5050cc4&verbose=true&spellCheck=true&q=';
var recognizer = new builder.LuisRecognizer(model);
var intents = new builder.IntentDialog({ recognizers: [recognizer] });


//=========================================================
// Bots Dialogs
//=========================================================
bot.dialog('/', intents);
bot.dialog('greet',Greet.Dialog);
bot.dialog('profile',Profile.Dialog);
bot.dialog('help',Help.Dialog);
bot.dialog('info-general',GenralInfo.Dialog);
bot.dialog('webdev', WebDev.Dialog);
bot.dialog('makeAppointment',MakeAppointment.Dialog);
intents.onBegin(function(session){
	session.beginDialog('greet',session.userData.greet);
});

intents.matches(/help/,Help.Dialog);
intents.matches('info-general',GenralInfo.Dialog);
intents.matches('info-subject',SubjectInfo.Dialog);
intents.matches('Make-Appointment',MakeAppointment.Dialog);
router.post("/",connector.listen());

module.exports = router;

