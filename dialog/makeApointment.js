var builder			=		require("botbuilder");
var Appointment		=		require('../models/appointment');


var appointment	=	{
	Label		: 		"Make Appointment",
	Dialog 		: 		[
		function(session, args, next){

			session.userData.Subject      = builder.EntityRecognizer.findEntity(args.entities, 'Subject');
			session.userData.target 	  = builder.EntityRecognizer.findEntity(args.entities, 'Appointment-target');
			session.userData.datetime  	  = builder.EntityRecognizer.findEntity(args.entities, 'datetime'); 
			
			if(!session.userData.Subject){
				builder.Prompts.text(session,"what would the appointment be for?");
			}
			else{
				next({response: session.userData.Subject.entity});
			}
		},
		function(session,args,next){
			if(args.response){
				session.userData.App_Subject=args.response;
			}
			if(!session.userData.target){
				builder.Prompts.text(session,"where would you like to setup the meeting?");
			}
			else{
				next({response: session.userData.target.entity});
			}
		},
		function(session,args,next){
			if(args.response){
				session.userData.App_target=args.response;
			}
			if(!session.userData.datetime){
				builder.Prompts.text(session,"when would you like to meet?");
			}
			else{
				next({response: session.userData.datetime.entity});
			}
		},
		function(session,args,next){
			if(args.response){
				session.userData.App_datetime=args.response;
			}
			session.send("the appointment is set!");
			appointment = {
				subject : session.userData.App_Subject,
				target  : session.userData.App_target,
				date 	: session.userData.App_datetime  
			}
			
		},
	]
};

module.exports = appointment;