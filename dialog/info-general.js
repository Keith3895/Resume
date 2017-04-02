var builder			=		require("botbuilder");



var info	=	{
	Label		: 		"Info-general",
	Dialog 		: 		[
		function(session, args, next){
			session.send("So basically Keith is doing his Bachelors in engineering. in the computer science department.");
			session.send("his major interests for now lie in web development which include both front and back end parts of the development process.");
			session.send("If there is something specific that you'd want to learn about Keith just ask about it..");
			session.endDialog();
		}
	]
};



module.exports = info;