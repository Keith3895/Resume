var builder			=		require("botbuilder");

var date = new Date();
var hr = date.getHours();
console.log(hr);
greet	=	{
	Label		: 		'Greet',
	Dialog   	: 		[
		function(session,args,next){
			// if(!args || args == undefined){
				if(hr > 4 && hr<12){
					session.send('Good morning!');
				}else if(hr>=12 && hr < 17){
					session.send('Good Afternoon!');
				}else if (hr>= 17 && hr <21 ) {
					session.send('good evening!');
				}else{
					session.send('Hi, at this late hour. good evening I suppose.');
				}
				// session.send("I am résumé bot.");
				// next();
			// }
			// else
				next();
		},
		function(session,args,next){
			if(!session.userData.greet){
				session.send("I am designed to answer all your questions about Keith Franklin");
				session.send("I know everything about him, professionally P-).");	
				// session.send("Pheno demo run");
				// session.send("I'm still in development so please pardon my mistakes");
			}
			next();
		},
		function(session,args,next){
			session.userData.greet=true;
			// session.send("if you have any difficulties with interacting with me just type 'help ...' ");
			session.beginDialog('profile',session.userData.profile);
		}
	]
};

module.exports = greet;