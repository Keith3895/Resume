var builder			=		require("botbuilder");
var helper 			= require("../helper");

help	=	{
	Label		: 		'Help',
	Dialog   	: 		[
	function(session,args,next){
		var helpPhrase = builder.EntityRecognizer.findEntity(args.entities,'HelpPhrase');
		if(!helpPhrase){
			builder.Prompts.text(session,"How can I help you?");
		}else{
			next({response:helpPhrase.entity});
		}
	},
	function(session,args,next){
		if(args.response){
			session.userData.help= args.response;
			session.send('comming up with a solution for %s',session.userData.help);
			session.send(helper.help(session.userData.help));
		}
	}
	]
};
module.exports = help;