var builder			=		require("botbuilder");



var webdev	=	{
	Label		: 		"web Dev",
	Dialog 		: 		[
	function(session, args, next){
		// session.send('info on webdev regarding %s',args);
		session.send('Keith has worked on a few small projects to improve his skills in Web Development');
		session.send('some of these projects are:');
		var msg = new builder.Message(session)
                    .attachments([ 
                    new builder.HeroCard(session)
			        .title('FestMaMu website')
			        .subtitle('An event service aggregator')
			        .text('A website for event service providers and event planners to use to lookup their respective needs.')
			        .images([
			            builder.CardImage.create(session, 'https://s3.ap-south-1.amazonaws.com/keithfranlin/festmamu.jpeg')
			        ])
			        .buttons([
			            builder.CardAction.openUrl(session, 'http://www.festmamu.tk/', 'go to page')
			        ])
                ]);
        session.send(msg);
        msg = new builder.Message(session)
                    .attachments([ 
                    new builder.HeroCard(session)
			        .title('Online Portfolio')
			        .subtitle('www.keithfranklin.xyz')
			        .text('A webpage to act as an online portfolio for Keith')
			        .images([
			            builder.CardImage.create(session, 'https://s3.ap-south-1.amazonaws.com/keithfranlin/keithfranklin.jpeg')
			        ])
			        .buttons([
			            builder.CardAction.openUrl(session, 'http://www.keithfranklin.xyz/', 'go to page')
			        ])
                ]);
        session.send(msg);
		session.endDialog();
	}
	]
};

module.exports =  webdev;