var builder			=		require("botbuilder");



var info	=	{
	Label		: 		"Info-Subject",
	Dialog 		: 		[
		function(session, args, next){
			var Subject= builder.EntityRecognizer.findEntity(args.entities, 'Subject');
			if(!Subject){
				builder.Prompts.text(session,"regarding what exactly do you want to know? \n like the projects he's worked on.. the languages he knows... ");
			}
			else{
				next({response:Subject.entity});
			}
		},
		function(session,args,next){
			if(args.response){
				var subjectString = args.response ;
				switch (true){
					case /java/i.test(subjectString):
						session.send("Keith has the basic knowledge about Java Programming.");
						session.send("he worked on a project which involved using Java. ");
						session.send("the project was : \'A JAVA application which reads all the account informations from a excel file and prints the corresponding receipts.\'");
						break;
					case /(music|hobby)/i.test(subjectString):
						session.send("music info");
						break;
					case /(html|javascript|js|css|jquery|bootstrap|node|angular)/i.test(subjectString):
						session.beginDialog('webdev',subjectString);
						break;
					case /(android)/i.test(subjectString):
						session.send("Keith is still learning %s",subjectString);
						break;
					case /(project)/i.test(subjectString):
						session.beginDialog('webdev',subjectString);
						break;
					case /(graduate|graduating|passing)/i.test(subjectString):
						session.send(" Keith will be finishing his engineering by June,2017.");
						break;
					case /(major|course|skills)/i.test(subjectString):
						session.send("currently Keith is completing his bachelors in computer science engineering.");
						session.send("added to which he has completed courses in Web Development \n And halfway through a course on \n \'Data science with R \'");
						break;
					case /(past|experience)/i.test(subjectString):
						session.send("Keith has one internship at a startup, Events Ki Dunia.");
						session.send("As a intern Keith helped with designing the : \n 1) the landing page \n 2) the forms to upload event details\n 3) A console to display event details to organziers");
						break;

				}
			}else{
				session.send("err");
			}
			session.endDialog();
		}
	]
};



module.exports = info;