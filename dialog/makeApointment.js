var builder			=		require("botbuilder");



var appointment	=	{
	Label		: 		"Make Appointment",
	Dialog 		: 		[
		function(session, args, next){
			session.send("in make appointment");
		}
	]
};

module.exports = appointment;