
var html = "<style>li{margin-bottom:5px}</style><div class=row><div class='col offset-s3 s6'><span class=flow-text>A list of the Basic thing that you have to know to build the bot</span></div><ol class='col offset-s4 s3'><li><a href=#/node class='btn dropdown-button waves-effect waves-light node'data-activates=NodeJS ng-click=node()>Node JS Syntax</a><ul class=dropdown-content id=NodeJS><li><a href=#/node>All</a><li class=divider><li><a href=#/node#var>Variable</a><li><a href=#/node#loop>loops</a><li><a href=#/node#loop>Branch</a><li><a href=#/node#object>Objects</a><li><a href=#/node#mod>Module</a></ul><li><a href=#/express class='btn dropdown-button waves-effect waves-light expr'data-activates=express ng-click=express()>Express JS</a><ul class=dropdown-content id=express><li><a href=#/express>All</a><li class=divider><li><a href=#/express#load>load module</a><li><a href=#/express#rest>REST</a><li><a href=#/express#get>Get and post</a><li><a href=#/express#listen>listen</a><li><a href=#/express#router>router</a></ul><li><a href=#/mongo class='btn dropdown-button waves-effect waves-light mongo'data-activates=mongo ng-click=mongo()>MongoDB</a><ul class=dropdown-content id=mongo><li><a href=#/mongo>All</a><li class=divider><li><a href=#/mongo#comp>vs SQL</a><li><a href=#/mongo#mongs>API</a><li><a href=#/mongo#schema>Schema</a></ul><li><a href=#/json class='btn dropdown-button waves-effect waves-light'>JSON</a><li><a href=#/botbuilder class='btn dropdown-button waves-effect waves-light'>botbuilder</a><li><a href=#/luis class='btn dropdown-button waves-effect waves-light'>LUIS</a></ol></div> <script type='text/javascript'>$('.button-collapse').sideNav();$('.button-collapse').click();</script>";

var node ="<style>nav.top-nav a.page-title{font-size:48px}dt{font-weight:600;font-size:20px}.package_span{color:red}code{background"+":#f0f0f0;padding:4px}.highlight{padding:2px;border:1px solid #f0f0f0}.span_pur{color:purple}.span_grey{color:grey}</style><nav class=top-nav><div class=container><div class=nav-wrapper><a class=page-title>Node JS</a></div></div></nav><div class=container><div class=row><div class='col s10'><dl><dt>Introduction<dd><p>To Start with node js we need to install it on the host system. After installing node on the system the <span class=package_span>package.json</span> file must be created. to create the <span class=package_span>package.json</span> file we use the command:<blockquote><code>npm init</code></blockquote>This command will ask you a bunch of questions, and then write a <span class=package_span>package.json</span> for you. The content of the <span class=package_span>package.json</span> will be like:<blockquote><pre style=overflow:auto;height:320px>"+
"								<code>"+
"\n{"+
"\n  'name': 'Test package',"+
"\n  'version': '1.0.0',"+
"\n  'description': 'test',"+
"\n  'main': 'app.js',"+
"\n  'scripts': {"+
"\n    'test': 'echo \'Error: no test specified\' && exit 1',"+
"\n    'start': 'node app.js'"+
"\n  },"+
"\n  'author': 'Keith',"+
"\n  'license': 'ISC',"+
"\n  'dependencies': {"+
 "\n   'express': '^4.14.0',"+
"\n    'express-session': '^1.15.0',"+
"\n    'google': '^2.1.0',"+
"\n    'mongoose': '^4.8.1',"+
"\n    'passport': '^0.3.2',"+
"\n    'passport-local': '^1.0.0',"+
"\n    'passport-local-mongoose': '^4.0.0'"+
"\n  }"+
"\n}"+
								"</code></pre></blockquote>for easier understanding imagine a package is equivalent to a API. To install a package we use the:<blockquote><code>npm install --save &lt; package name ></code></blockquote>This command installs a package, and any packages that it depends on.<p>To Start the execution of a Node js file use the :<blockquote><code>node app.js</code></blockquote><dt id='var'>Variables<dd><p>Variables In Node are similar to JavaScript, you declare a variable via a var statement before you use it, there are two types of variable declared and undeclared:<blockquote><code>var foo=3; //declared Variables<br>boo = 5; // undeclared variable</code></blockquote><p>Node allows you to work with three primitive data types −<ul class='col s12 offset-s1'style=margin-top:-15px><li><p><b>Numbers,</b> eg. 123, 120.50 etc.<li><p><b>Strings</b> of text e.g. 'This text string' etc.<li><p><b>Boolean</b> e.g. true or false.</ul><p>Node also defines two trivial data types, null and undefined, each of which defines only a single value. In addition to these primitive data types, Node supports a composite data type known as object which is there in the later parts of the document.<dt id='loop'>Loops & Branch<dd><h5>loops</h5><p>node has provisions for the same looping statements as in JavaScript and the syntax for these are also pretty much the same.<h5>branch</h5><p>node defines and uses the if and switch statements to control the flow of the program.<dt id='func'>Function<dd><p>A function in node js is the same as a function in any other programing language. How the function is declared is the unique attribute of node js. There are three main concepts to keep in mind when talking about function in node:<p><ol class='col s12 offset-s1'style=margin-top:-15px><li><p><b>function declaration</b><li><p><b>anonymous function</b><li><p><b>callback function</b></ol><blockquote class='col s12'><pre>"+
"							<code>"+
"\n <span class=span_grey>// function declaration</span>"+
"\n var addX = function(value){"+
"\n 	return value + x;"+
"\n };"+
"\n <span class=span_grey>// anonymous function are used without any name</span>"+
"\n function(value){"+
"\n 	return value + x;"+
"\n }"+
"\n <span class=span_grey>//callback function</span>"+
"\n <span class=span_grey>fs.readFile('input.txt',</span> function (err, data) {"+
"\n    if (err) return console.error(err);"+
"\n    console.log(data.toString());"+
"\n });"+
"\n 							</code>"+
"						</pre></blockquote><dt id='obj'>Object<dd><p>Objects are variables too. But objects can contain many values.<"+"blockquote><code>var car = {<br>type:'Fiat',<br>model:'500',<br>color:'white'<br>};</code></blockquote><p>To access object properties we use the following notation<blockquote><code>object.propertyName;<br><span class=span_grey>// for example</span><br>car.color; <span class=span_grey>// output=> white</span><br><span class=span_grey>// for a function</span><br>objectName.methodName();</code></blockquote><dt id='Module'>Module<dd><p>In Node, things are only visible to other things in the same file. By things, I mean variables, functions, classes and class members. So, given a file misc.js with the following contents:<blockquote><pre>"+
"								<code>"+
"\n var x = 5;"+
"\n var addX = function(value) {"+
"\n   return value + x;"+
"\n };"+
"								</code>"+
"							</pre></blockquote><p>Another file cannot access the <span class=highlight>x</span> variable or <span "+"class=highlight>addX</span>function.So we could say that the above file corresponds to a module named <span class=span_pur>file1</span> and everything within that module (or any module) is private.<p><span class=package_span>require</span> is used to load a module, which is why its return value is typically assigned to a variable:<blockquote><code>var misc = require('./misc');</code></blockquote><p>as long as our module doesn&#39;t expose anything, the above isn&#39;t very useful. To expose things we use <span class=highlight>module.exports </span>and export everything we want:<blockquote><pre>"+
"								<code>"+
"\n var x = 5;"+
"\n var addX = function(value) {"+
"\n   return value + x;"+
"\n };"+
"\n module.exports.x = x;"+
"\n module.exports.addX = addX;"+
"								</code>"+
"							</pre></blockquote><p>Now we can use our loaded module:<blockquote><pre>"+
"								<code>"+
"\n var misc = require('./misc');"+
"\n console.log('Adding %d to 10 gives us %d', misc.x, misc.addX(10));"+
"								</code>"+
"							</pre></blockquote><p>There&#39;s another way to expose things in a module:<blockquote><pre>"+
"								<code>"+
"\n var User = function(name, email) {"+
"\n   this.name = name;"+
"\n   this.email = email;"+
"\n };"+
"\n module.exports = User;"+
"								</code>"+
"							</pre></blockquote><p>The only difference between the two is how we use them.</dl></div></div></div>";
var json="<style>nav.top-nav a.page-title{font-size:48px}nav{background-color:#009688}dt{font-weight:600;font-size:20px}.package_span{color:red}code{background:#f0f0f0;padding:4px}</style><nav class=top-nav><div class=container><div class=nav-wrapper><a class=page-title>JSON</a></div></div></nav><div class=container><div><dl><dt>Introduction<dd><p><span class=package_span>JSON</span> is a format for storing and transporting data. <span class=package_span>JSON</span> is often used when data is sent from a server to a web page.<p><ul style=list-style-type:disc><li>JSON stands for <b>J</b>ava<b>S</b>cript <b>O</b>bject <b>N</b>otation<li>JSON is lightweight data interchange format<li>JSON is language independent<li>JSON is 'self-describing' and easy to understand</ul><blockquote><pre>"+
"    						<code>"+
"\n var text = {"+
"\n 'employees':["+
"\n     {'firstName':'John', 'lastName':'Doe'}, "+
"\n     {'firstName':'Anna', 'lastName':'Smith'},"+
"\n     {'firstName':'Peter', 'lastName':'Jones'}"+
"\n ]"+
"\n }   						</code>"+
"    					</pre></blockquote><p>Use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:<blockquote><code>var obj = JSON.parse(text);</code></blockquote><p>An example of the JSON that we will be reciveing from LUIS is:<blockquote><pre>"+
"    						<code>"+
"\n {"+
"\n       'query': 'show me news about greenland',"+
"\n       'intents': ["+
 "\n        {"+
 "\n          'intent': 'FindNews',"+
"\n           'score': 0.99669075"+
"\n         },"+
"\n        {"+
"\n           'intent': 'None',"+
"\n           'score': 0.1676137"+
"\n         },"+
"\n         {"+
"\n           'intent': 'Read',"+
"\n           'score': 8.29925648E-06"+
"\n         },"+
"\n         {"+
"\n           'intent': 'ShareNews',"+
"\n           'score': 2.39546625E-06"+
"\n         }"+
"\n       ],"+
"\n       'entities': ["+
"\n         {"+
"\n           'entity': 'greenland',"+
"\n           'type': 'Topic'"+
"\n         }"+
"\n       ]"+
"\n     }"+
"\n     						</code>"+
"\n     					</pre></blockquote></dl></div></div>";



var express = "<style>nav.top-nav a.page-title{font-size:48px}nav{background-color:#9c27b0}dt{font-weight:600;font-size:20px}.package_span{color:red}code{background:#f0f0f0;padding:4px}.doc{color:#a54d4d;font-style:italic;font-size:19px}.span_grey{color:grey}</style><nav class=top-nav><div class=container><div class=nav-wrapper><a class=page-title>Express</a></div></div></nav><div class=container><div class=row><dl class='col s12'><dt>Introduction<dd><p>Express is an API which gives us the ability to use the concepts of REST with node. from the documentation express can be *expressed as* <span class=doc>'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'</span><blockquote><code>npm install --save express</code></blockquote><dt id='rest'>REST<dd><p>Representational state transfer (<span class=rest>REST</span>) or RESTful Web services, is used to transfer control or flow of the web page with the help of routes. We use <span>REST</span> for two integral parts of the pheno bot code.<ol><li>To send the POST request made to the '/api/messages' route.<li>To handle every dialog or conversation of the bot with the user.</ol>An example of how various routes are handled is:<blockquote><table class='centered highlight'><thead><tr><th data-field=id>Verb<th data-field=name>Path<th data-field=price>action<th>used for<tbody><tr><td>GET<td>/stage<td>index<td>display the list of stages<tr><td>GET<td>/stage/:id<td>show<td>display specific stage<tr><td>post<td>/stage<td>create<td>upload new stage info<tr><td>GET<td>/artist/band<td>index<td>display a list of artists</table></blockquote><dt id='load'>Load module<dd><p>To load the modules that were downloaded with the <span class=blue>npm</span> command we use the:<blockquote><code>var express = require('express');<br>var app = express();</code></blockquote><dt id='get'>Routing<dd><p>A route method is derived from one of the HTTP methods, and is attached to an instance of the express class. The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.<blockquote><pre>"+
"    						<code>"+
"\n <span class=span_grey>//GET method route</span>"+
"\n app.get('/', function (req, res) {"+
"\n   res.send('GET request to the homepage')"+
"\n });"+
""+
"\n <span class=span_grey>// POST method route</span>"+
"\n app.post('/', function (req, res) {"+
"\n   res.send('POST request to the homepage')"+
"\n });"+
"    						</code>"+
"    					</pre></blockquote><dt id='listen'>Listen<dd><p>the <span>app.listen</span> method is used to tell the node compiler which port to monitor for the traffic pertaining to the website. The general syntax for this method is:<blockquote><pre>"+
"    						<code>"+
"\n app.listen(process.env.port || process.env.PORT, function () {"+
"\n    console.log('server started'); "+
"\n });"+
"	 						</code>"+
"    					</pre></blockquote><dt id= 'router'>Router<dd><p>By making use of the express.Router class to create modular, mountable route handlers. It is often referred to as a “mini-app”.<p>example code of a router to handle requests to '/birds':<blockquote><pre>"+
"    						<code>"+
"\n var express = require('express');"+
"\n var router  = express.Router();"+
"<span class=span_grey>// define the home page route</span>"+
"\n router.get('/', function (req, res) {"+
"\n   res.send('Birds home page')"+
"\n })"+
"\n <span class=span_grey>// define the about route</span>"+
"\n router.get('/about', function (req, res) {"+
"\n   res.send('About birds')"+
"\n })"+
"\n "+
"\n module.exports = router"+
"    						</code>"+
"    					</pre></blockquote><p>Then, load the router module in the app:<blockquote><pre>"+
"    						<code>"+
"\n var birds = require('./birds')"+
"\n "+
"\n // ..."+
"\n "+
"\n app.use('/birds', birds)"+
"    						</code>"+
"    					</pre></blockquote></dl></div></div>";



var mongo="<style>.keyword{font-style:italics;color:blue;}nav.top-nav a.page-title{font-size:48px}nav{background-color:#3f51b5}dt{font-weight:600;font-size:20px}.package_span{color:red}code{background:#f0f0f0;padding:4px}.heaq{font-size:15px;font-weight:500}</style><nav class=top-nav><div class=container><div class=nav-wrapper><a class=page-title>MongoDB</a></div></div></nav><div class=container><div class=row><dl class='col s12'><dt>Introduction<dd><p style=word-spacing:6px>MongoDB is an open-source database developed by MongoDB, Inc. MongoDB stores data in <span class=keyword>JSON-like</span> documents that can vary in structure. Related information is stored together for fast query access through the MongoDB query language. MongoDB uses <span class=keyword>dynamic schemas</span>, meaning that you can create records without first defining the structure, such as the fields or the types of their values. You can change the structure of records (which we call documents) simply by adding new fields or deleting existing ones. This data model give you the ability to represent hierarchical relationships, to store arrays, and other more complex structures easily.<dt id='comp'>Comparison<dd><p class=heaq>Comparison between SQL concepts and MongoDB :<blockquote><table class='centered table highlight responsive-table'><thead><tr><th><strong>MySQL</strong><th><strong>MongoDB</strong><tbody><tr><td>Table<td>Collection<tr><td>Row<td>Document<tr><td>Column<td>Field<tr><td>Joins<td>Embedded documents, linking</table></blockquote><p class=heaq>comparison between SQL and MongoDB queries:<blockquote><table class='centered table bordered responsive-table'><tr><th><strong>MySQL</strong><th><strong>MongoDB</strong><tr><td><pre><code>INSERT INTO users (user_id, age, status)"+
"\n VALUES ('bcd001', 45, 'A')</code></pre><td><pre>"+
"            <code>"+
"\n db.users.insert({"+
"\n   user_id: 'bcd001',"+
"\n   age: 45,"+
"\n   status: 'A'"+
"\n })</code></pre><tr><td><pre><code>SELECT * FROM users</code></pre><td><pre><code>db.users.find()</code></pre><tr><td><pre><code>UPDATE users SET status = 'C'"+
"\n WHERE age > 25</code></pre><td><pre><code>db.users.update("+
"\n   { age: { $gt: 25 } },"+
"\n   { $set: { status: 'C' } },"+
"\n   { multi: true }"+
"\n )</pre></table></blockquote><dt id='mongs'>Mongoose<dd><p>Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.<p>example code segment for usage of mongoose:<blockquote><pre>"+
"    						<code>"+
"\n var mongoose = require('mongoose');"+
"\n mongoose.connect('mongodb://localhost/test');"+
"\n "+
"\n var Cat = mongoose.model('Cat', { name: String });"+
"\n "+
"\n var kitty = new Cat({ name: 'Zildjian' });"+
"\n kitty.save(function (err) {"+
"\n   if (err) {"+
"\n     console.log(err);"+
"\n   } else {"+
"\n     console.log('meow');"+
"\n   }"+
"\n });"+
"    						</code>"+
"    					</pre></blockquote><dt id='schema'>Schema<dd><p>Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.<blockquote><pre>"+
"    						<code>"+
"\n var mongoose = require('mongoose');"+
"\n var Schema = mongoose.Schema;"+
"\n "+
"\n var blogSchema = new Schema({"+
"\n   title:  String,"+
"\n   author: String,"+
"\n   body:   String,"+
"\n   comments: [{ body: String, date: Date }],"+
"\n   date: { type: Date, default: Date.now },"+
"\n   hidden: Boolean,"+
"\n   meta: {"+
"\n     votes: Number,"+
"\n     favs:  Number"+
"\n   }"+
"\n });"+
"    						</code>"+
"    					</pre></blockquote><dt>models, Query functions, populate, relations<dd>I&#39;ll explain it to you and then add it here.</dl></div></div>";

var bot="<style>nav.top-nav a.page-title{font-size:48px}nav{background-color:#3a96dd}dt{font-weight:600;font-size:20px}ul dt{padding-left:1rem}dl dl dl dt{font-size:17px;font-weight:500}.uv-title{font-weight:600;font-size:20px;font-style:italic;font-family:serif;color:#a2207e}.comment{color:grey}.package_span{color:red}code{background:#f0f0f0;padding:4px}ul.disl li{list-style-type:disc}ol.rom li{list-style-type:lower-roman}.collapsible-body{background:#fefefe}.key-green{color:green}.collapsible-body p{padding:1rem}.rom{margin-left:8%}ol.num li{list-style-type:katakana}</style><nav class=top-nav><div class=container><div class=nav-wrapper><a class=page-title>Bot Builder</a></div></div></nav><div class=container><div class=row><div class='col s12'><dl><dt>Preface<dd><p>Finally BotBulder Framework! This I think is the biggest section to cover and has a lot of code segments and a lot of concepts to remember added to all the previous topics. Every topic that is is covered in this section is something we&#39;ll be using. All the code segments that are in this section maybe used as it is with small changes. I&#39;ve added tag like <sup>[4]</sup> in the explanation of the code to make it easier to understand what code is being spoken of. So lets dive in and take each part like little pieces of momo&#39;s with some spicy chilly sauce.<dt>Introduction<dd><p>Bot Builder for Node.js is a powerful framework for constructing bots that can handle both freeform interactions and more guided ones where the possibilities are explicitly shown to the user. Main Features of Bot Builder Framework are:<ul class=disl><li>Powerful dialog system with dialogs that are isolated and composable.<li>Built-in prompts for simple things like Yes/No, strings, numbers, enumerations.<li>Built-in dialogs that utilize powerful AI frameworks like <a href=http://luis.ai target=_blank>LUIS</a>.<li>Bots are stateless which helps them scale.<li>Bots can run on almost any bot platform like the <a href=http://botframework.com target=_blank>Microsoft Bot Framework</a>, <a href=http://skype.com target=_blank>Skype</a>, and <a href=http://slack.com target=_blank>Slack</a>.</ul>For understanding how the whole system works use this as a reference:<blockquote><img src=BotArch.png class='responsive-img'></blockquote><dt>Universal Bot<dd style=margin:-15px><ul class='collapsible popout'data-collapsible=accordion><li><div class='collapsible-header uv-title active'>Intro</div><div class=collapsible-body><p>The UniversalBot class forms the brains of your bot. It&#39;s responsible for managing all of the conversations your bot has with a user. You first initialize your bot with a connector that connects your bot to either the Bot Framework or the console. Next you can configure your bot with dialogs that implement the actual conversation logic for your bot.</div><li><div class='collapsible-header uv-title'>Connectors</div><div class=collapsible-body><dl><dt>brief<dd><p>The UniversalBot class supports an extensible connector system the lets you configure the bot to receive messages & events and sources. Out of the box, Bot Builder includes a <span class=key-green>ChatConnector</span> class for connecting to the Bot Framework and a <span class=key-green>ConsoleConnector</span> class for interacting with a bot from a console window. we&#39;ll be using the ChatConnector class to connect with the various communication channels we&#39;ll be using.<dt>ChatConnector<dd><p>The ChatConnector class configures the UniversalBot to communicate with either the emulator or any of the channels supported by the Bot Framework.<p>Below is an example of a &#34;hello world&#34; bot that&#39;s configured to use the ChatConnector:<blockquote><pre>"+
"                            <code>"+
"\n <span class=comment>//express load</span>"+
"\n var builder = require('botbuilder');"+
"\n "+
"\n <span class=comment>//=========================================================</span>"+
"\n <span class=comment>// Bot Setup</span>"+
"\n <span class=comment>//=========================================================</span>"+
"\n"+
"\n <span class=comment>// Setup Restify Server</span>"+
"\n <span class=comment>//app.listen();</span>"+
"\n"+  
"\n <span class=comment>// Create chat bot</span>"+
"\n var connector = new builder.ChatConnector({"+
"\n     <span id=1>appId: process.env.MICROSOFT_APP_ID,"+
"\n     appPassword: process.env.MICROSOFT_APP_PASSWORD</span>"+
"\n });"+
"\n var bot = new builder.UniversalBot(connector);"+
"\n app.post('/api/messages', connector.listen());<span class=comment>// express app.post command</span>"+
"\n "+
"\n <span class=comment>//=========================================================</span>"+
"\n <span class=comment>// Bots Dialogs</span>"+
"\n <span class=comment>//=========================================================</span>"+
"\n "+
"\n bot.dialog('/', function (session) {"+
"\n     session.send('Hello World');"+
"\n });"+
"                            </code>"+
"                          </pre></blockquote><p>The appId & appPassword <sup><a href=#1 onclick='$('#1').css('background','yellow')'>[1]</a></sup> settings are generally required and will be generated when registering the bot in the developer portal.</dl></div><li><div class='collapsible-header uv-title' ng-click='dialog()'><span id='dialog'></span>Dialog</div><div class=collapsible-body><dl><dt>intro<dd><p>Bot Builder uses dialogs to manage a bots conversations with a user. To understand dialogs its easiest to think of them as the equivalent of routes for a website. All bots will have at least one root &#39;/&#39; dialog just like all websites typically have at least one root &#39;/&#39; route. When the framework receives a message from the user it will be routed to this root &#39;/&#39; dialog for processing. For many bots this single root &#39;/&#39; dialog is all that&#39;s needed but just like websites often have multiple routes, bots will often have multiple dialogs.<blockquote><pre>"+
"                          <code>"+
"\n <span class=comment>// connector code and builder load ...</span>"+
"\n <span class=comment>//=========================================</span>"+
"\n <span class=comment>//Dialogs</span>"+
"\n <span class=comment>//=========================================</span>"+
"\n <span id=2>bot.dialog('/', [</span>"+
"\n     function (session, args, next) {"+
"\n         <span id=3>if (!session.userData.name) {</span>"+
"\n             <span id=4>session.beginDialog('/profile');</span>"+
"\n         } else {"+
"\n             next();"+
"\n         }"+
"\n     },"+
"\n     <span id=6>function (session, results) {"+
"\n         session.send('Hello %s!', session.userData.name);"+
"\n     }</span>"+
"\n ]);"+
"\n "+
"\n bot.dialog('/profile', ["+
"\n     function (session) {"+
"\n         builder.Prompts.text(session, 'Hi! What is your name?');"+
"\n     },"+
"\n     <span id=5>function (session, results) {</span>"+
"\n         session.userData.name = results.response;"+
"\n         session.endDialog();"+
"\n     }"+
"\n ]);"+
 "                         </code>"+
"                        </pre></blockquote><p>The example above shows a bot with 2 dialogs. The first message from a user will be routed to the Dialog Handler for the root &#39;/&#39; dialog<sup><a href=#2 onclick='$('#2').css('background','yellow')'>[2]</a></sup>. This function gets passed a session object which can be used to<ol class=rom><li>inspect the users messages<li>send a reply to the user<li>save the state on behalf of the user<li>redirect to another dialog</ol><p>When a user starts a conversation with our bot we&#39;ll first look to see if we know the users name by checking a property off the session.userData <sup><a href=#3 onclick='$('#3').css('background','yellow')'>[3]</a></sup> object. This data will be persisted across all of the users interactions with the bot and can be used to store things like profile information. If we don&#39;t know the users name we&#39;re going to redirect them to the &#39;/profile&#39; dialog to ask them their name using a call to session.beginDialog()<sup><a href=#4 onclick='$('#4').css('background','yellow')'>[4]</a></sup>.<p>The &#39;/profile&#39; dialog is implemented as a waterfall and when beginDialog() is called the first step of the waterfall will be immediately executed. This step simply calls Prompts.text() to ask the user their name. This built-in prompt is just another dialog that gets redirected to. The framework maintains a stack of dialogs for each conversation so if we were to inspect our bots dialog stack at this point it would look something like [&#39;/&#39;, &#39;/profile&#39;, &#39;BotBuilder:Prompts&#39;]. The conversations dialog stack helps the framework know where to route the users reply to.<p>When the user replies with their name, this response will be passed as an argument to the second step of the &#39;/profile&#39; dialogs waterfall. <sup><a href=#5 onclick='$('#5').css('background','yellow')'>[5]</a></sup>In this step we&#39;ll save the users name to session.userData.name property and return control back to the root &#39;/&#39; dialog through a call to endDialog(). At that point the next step of the root &#39;/&#39; dialogs<sup><a href=#6 onclick='$('#6').css('background','yellow')'>[6]</a></sup> waterfall will be executed ad a custom greeting will be sent to the user.<dt>Dialog Handlers<dd><p>A Dialog Handler is basically how we program the bot and how we handle or route the various conversations with the users.There are 4 types of dialog handlers:<ol class=num><li>Waterfall<sup>*</sup><li><a href=https://docs.botframework.com/en-us/node/builder/chat/dialogs/#closure>Closure</a><li><a href=https://docs.botframework.com/en-us/node/builder/chat/dialogs/#dialog-object>Dialog Object</a><li><a href=https://docs.botframework.com/en-us/node/builder/chat/dialogs/#SimpleDialog>Simple Object</a></ol>* we are using the waterfall handler but if you want to read up on the others you can go to the link by clicking on the hyperlinked point.<dt>Waterfall<dd>Waterfalls will likely be the most common form of dialog you use so understanding how they work is a fundamental skill in bot development. Waterfalls let you collect input from a user using a sequence of steps. A bot is always in a state of providing a user with information or asking a question and then waiting for input. In the Node version of Bot Builder its waterfalls that drive this back-n-forth flow. The previous example can be used as a example for a waterfall handler.</dl></div><li><div class='collapsible-header uv-title'>Session</div><div class=collapsible-body><dl><dt>intro<dd><p>The session object is passed to your dialog handlers anytime your bot receives a message from the user. The session object is the primary mechanism you’ll use to send messages to the user and to manipulate the bots dialog stack.<dt>Sending Messages<dd><p>The session.send() method can be used to easily send messages, attachments, and rich cards to the user. Your bot is free to call send() as many times as it likes in response to a message from the user. When sending multiple replies, the individual replies will be automatically grouped into a batch and delivered to the user as a set in an effort to preserve the original order of the messages.<dl><dt>Text Messages<dd><p>To send a simple text message to the user you can simply call <code>session.send('hello there')</code>. The message can also contain template parameters which can be expanded using <code>session.send('hello there %s', name)</code>.<dt>Attachment<dd><p>Many chat services support sending image, video, and file attachments to the user. You can use <code>session.send()</code> for this as well but you’ll need to use it in conjunction with the SDK’s Message builder class. You can use either the <code>attachments()</code> or <code>addAttachment()</code> methods to create a message containing an image:<blockquote><pre>"+
"                                <code>"+
"\n bot.dialog('/picture', ["+
"\n     function (session) {"+
"\n         session.send('You can easily send pictures to a user...');"+
"\n         var msg = new builder.Message(session)"+
"\n             .attachments([{"+
"\n                 contentType: 'image/jpeg',"+
"\n                 contentUrl: 'http://www.theoldrobots.com/images62/Bender-18.JPG'"+
"\n             }]);"+
"\n         session.endDialog(msg);"+
 "\n    }"+
"\n ]);"+
"                                </code>"+
"                              </pre></blockquote><dt>Cards<dd>Several chat services are starting to support the sending of rich cards to the user containing text, images, and even buttons. Not all chat services support cards or have the same level of richness so you&#39;ll need to consult the individual services documentation to determine what’s currently supported. We&#39;ll see the code when we use it in our bot.</dl><dt>Dialog Stack<dd><p>With the Bot Builder SDK you’ll use dialogs to organize your bots conversations with the user. The bot tracks where it is in the conversation with a user using a stack that’s on the bots storage system(server). When the bot receives the first message from a user it will push the bots default dialog onto the stack and pass that dialog the users message<dl><dt>start and end<dd><p>You can use <code>session.beginDialog()</code> to call a dialog (pushing it onto the stack) and then either <code>session.endDialog()</code> or <code>session.endDialogWithResults()</code> to return control back to the caller (popping off the stack.) When paired with waterfalls you have a simple mechanism for driving conversations forward.<dt>Replacing Dialogs<dd><p>The <code>session.replaceDialog()</code> method lets you end the current dialog and replace it with a new one without returning to the caller. This method can be used to create a number of interesting flows. One of the most useful being the creation of loops.<blockquote><pre>"+
"                                <code>"+
"\n bot.dialog('/', ["+
"\n     function (session) {"+
"\n         session.beginDialog('/phonePrompt');"+
"\n     },"+
"\n     function (session, results) {"+
"\n         session.send('Got it... Setting number to %s', results.response);"+
"\n     }"+
"\n ]);"+
"\n bot.dialog('/phonePrompt', ["+
"\n     function (session, args) {"+
"\n         if (args && args.reprompt) {"+
"\n             builder.Prompts.text(session, 'Enter the number using a format of either: '(555) 123-4567' or '555-123-4567' or '5551234567'')"+
"\n         } else {"+
"\n             builder.Prompts.text(session, 'What's your phone number?');"+
"\n         }"+
"\n     },"+
"\n     function (session, results) {"+
"\n         var matched = results.response.match(/\d+/g);"+
 "\n        var number = matched ? matched.join('') : '';"+
"\n         if (number.length == 10 || number.length == 11) {"+
"\n             session.endDialogWithResult({ response: number });"+
"\n         } else {"+
"\n             session.replaceDialog('/phonePrompt', { reprompt: true });"+
"\n         }"+
"\n     }"+
"\n ]);"+
"                                </code>"+
"                              </pre></blockquote><p>why not use <code>session.beginDialog()</code> instead of <code>session.replaceDialog()</code> ? That&#39;s cause <code>session.beginDialog()</code> a new entry is added into the stack and its a extra entry.<dt>Cancel Dialog<dd><p>Sometimes you may want to do more extensive stack manipulation. For that you can use the <code>session.cancelDialog()</code> to end a dialog at any arbitrary point in the dialog stack and optionally start a new dialog in its place. You can call session.cancelDialog('/placeOrder') with the ID of a dialog to cancel. The stack will be searched backwards and the first occurrence of that dialog will be canceled causing that dialog plus all of its children to be removed from the stack. Control will be returned to the original caller and they can check for a results.resumed code equal to ResumeReason.notCompleted to detect the cancelation.</dl></dl></div><li><div class='collapsible-header uv-title'>Prompts</div><div class=collapsible-body><dl><dt>Intro<dd><p>Bot Builder comes with a number of built-in prompts that can be used to collect input from a user.These built-in prompts are implemented as a Dialog so they&#39;ll return the users response through a call to <code>session.endDialogWithresult()</code>.The users response will be contained in the results.response field and may be null. There are a number of reasons for the response to be null.<blockquote><table class='centered highlight'><thead><tr><th><strong>Prompt Type</strong><th><strong>Description</strong><tbody><tr><td><a href=#/botbuilder#promptstext>Prompts.text</a><td>Asks the user to enter a string of text.<tr><td><a href=#/botbuilder#promptsconfirm>Prompts.confirm</a><td>Asks the user to confirm an action.<tr><td><a href=#/botbuilder#promptsnumber>Prompts.number</a><td>Asks the user to enter a number.<tr><td><a href=#/botbuilder#promptstime>Prompts.time</a><td>Asks the user for a time or date.<tr><td><a href=#/botbuilder#promptschoice>Prompts.choice</a><td>Asks the user to choose from a list of choices.<tr><td><a href=#/botbuilder#promptsattachment>Prompts.attachment</a><td>Asks the user to upload a picture or video.</table></blockquote><dl><dt id=promptstext>Prompts.text()<dd><p>The <code>Prompts.text()</code> method asks the user for a string of text. The users response will be returned as an IPromptTextResult.<blockquote><pre>"+
"                                <code>"+
"\n builder.Prompts.text(session, 'What is your name?');"+
"                                </code>"+
"                              </pre></blockquote><dt id=promptsconfirm>Prompts.confirm()<dd><p>The <code>Prompts.confirm()</code> method will ask the user to confirm an action with yes/no response. The users response will be returned as an IPromptConfirmResult.<blockquote><pre>"+
"                                <code>"+
"\n builder.Prompts.confirm(session, 'Are you sure you wish to cancel your order?');"+
"                                </code>"+
"                              </pre></blockquote><dt id=promptsnumber>Prompts.number()<dd><p>The <code>Prompts.number()</code> method will ask the user to reply with a number. The users response will be returned as an IPromptNumberResult.<blockquote><pre>"+
"                                <code>"+
"\n builder.Prompts.number(session, 'How many would you like to order?');                                  "+
"                                </code>"+
"                              </pre></blockquote><dt id=promptstime>Prompts.time()<dd>We will not be using this in our code. So we can skip.<dt id=promptschoice>Prompts.choice()<dd><p>The <code>Prompts.choice()</code> method asks the user to pick an option from a list. The users response will be returned as an IPromptChoiceResult.The user can express their choice by either entering the number of the option or its name. Both full and partial matches of the options name are supported. The list of choices can be passed to <code>Prompts.choice()</code> in a variety of ways.<p>As a pipe &#39;|&#39; delimited string.<blockquote><pre>"+
"                                <code>"+
"\n builder.Prompts.choice(session, 'Which color?', 'red|green|blue');"+
"                                </code>"+
"                              </pre></blockquote><p>As an array of strings.<blockquote><pre>"+
"                                <code>"+
"\n builder.Prompts.choice(session, 'Which color?', ['red','green','blue']);"+
"                                </code>"+
"                              </pre></blockquote><p>Or as an Object map. When an Object is passed in Objects keys will be used to determine the choices.<blockquote><pre>"+
"                                <code>"+
"\n var salesData = {"+
"\n     'west': {"+
"\n         units: 200,"+
"\n         total: '$6,000'"+
"\n     },"+
"\n     'central': {"+
"\n         units: 100,"+
"\n         total: '$3,000'"+
"\n     },"+
"\n     'east': {"+
"\n         units: 300,"+
"\n         total: '$9,000'"+
"\n     }"+
"\n };"+
"\n "+
"\n bot.dialog('/', ["+
"\n     function (session) {"+
"\n         builder.Prompts.choice(session, 'Which region would you like sales for?', salesData); "+
"\n     },"+
"\n     function (session, results) {"+
"\n         if (results.response) {"+
"\n             var region = salesData[results.response.entity];"+
"\n             session.send('We sold %(units)d units for a total of %(total)s.', region); "+
"\n         } else {"+
"\n             session.send('ok');"+
"\n         }"+
"\n     }"+
"\n ]);"+
"                                </code>"+
"                              </pre></blockquote><dt id=promptsattachment>Prompts.attachment()<dd><p>The <code>Prompts.attachment()</code> method will ask the user to upload a file attachment like an image or video. The users response will be returned as an IPromptAttachmentResult.<blockquote><pre>"+
"                                <code>"+
"\n builder.Prompts.attachment(session, 'Upload a picture for me to transform.');"+
"                                </code>"+
"                              </pre></blockquote></dl></dl></div><li><div class='collapsible-header uv-title active'>Intent Dialog</div><div class=collapsible-body><dl><dt>Intro<dd><p>The IntentDialog class lets you listen for the user to say a specific keyword or phrase. We call this intent detection because you are attempting to determine what the user is intending to do. IntentDialogs are useful for building more open ended bots that support natural language style understanding.<dt>Matching Regular Expression<dd><p>The <code>IntentDialog.matches()</code> method lets us start dialogs based on the user input by matching it with a regular expression.<blockquote><pre>"+
"                          <code>"+
"\n var intents = new builder.IntentDialog();"+
"\n bot.dialog('/', intents);"+
"\n "+
"\n intents.matches(/^echo/i, ["+
"\n     function (session) {"+
"\n         builder.Prompts.text(session, 'What would you like me to say?');"+
"\n     },"+
"\n     function (session, results) {"+
"\n         session.send('Ok... %s', results.response);"+
"\n     }"+
"\n ]);"+
"                          </code>"+
"                        </pre></blockquote></dl></div></ul></dl></div></div></div>";
var luis="<style>nav.top-nav a.page-title{font-size:48px}nav{background-color:#373737}dt{font-weight:600;font-size:20px}.package_span{color:red}code{background:#f0f0f0;padding:4px}.keyword{color:red}.key_ye{color:#a9a90d;font-weight:600}ol.main li{list-style-type:lower-alpha}ol.nested li{list-style-type:lower-roman}</style><nav class=top-nav><div class=container><div class=nav-wrapper><a class=page-title>LUIS</a></div></div></nav><div class=container><div class=row><dl class='col s12'><dt>Introduction<dd><p>Microsoft's Language Understanding Intelligent Service (LUIS) offers a fast and effective way of adding language understanding to applications. With LUIS, you can use pre-existing, world-class, pre-built models from Bing and Cortana whenever they suit your purposes – and when you need specialized models, LUIS guides you through the process of quickly building them.<p>Bot Builder lets you use LUIS to add natural language understanding to your bot via the LuisDialog class. You can add an instance of a LuisDialog that references your published language model and then add intent handlers to take actions in response to users utterances.<p>I'll be showing an example of how to train LUIS to recognize and process search requests and then show how it is integrated with the bot. It would be great if you'd try to code along, leave out the LUIS part cause the subscription is a tricky issue. So basically what I'll be doing is<ol class=main><li>setup and train LUIS<li>integrate with chatbot</ol><dt>setup Luis<dd><ol><li><p>Go to <a href=https://www.luis.ai>luis.ai</a> and go to the <span class=keyword>My Applications</span><blockquote><img class=responsive-img src=luis/My_apps.jpeg></blockquote><li><p>Click on <span class=keyword>new App</span> and it will lead you to:<blockquote><img class=responsive-img src=luis/learnin.jpeg></blockquote><li><p>Add a new intent<ol class=nested><li>click on the <span class=keyword>+</span>plus next to intent.<li><p>enter the intent name and a example trigger and <span class=keyword>save</span>.<blockquote><img class=responsive-img src=luis/add_search.jpeg></blockquote>which should show this as the next window and click on <span class=keyword>submit</span>.<blockquote><img class=responsive-img src=luis/post_add_search.jpeg></blockquote></li><p>Follow the same process and create a help intent.</ol><li><p>Add a new Entity.<ol class=nested><li>Click on the <span class=keyword>+</span> and add a entity <span class=key_ye>searchPhrase</span>.<blockquote><img class=responsive-img src=luis/add_searchPh.jpeg></blockquote>Do the same and add a <span class=key_ye>helpPhrase</span>.</ol><li>Add new utterance for a search.<blockquote><img class=responsive-img src=luis/add_searchUt.jpeg></blockquote>click on <span class=keyword>Jazz</span> and a window suggesting the entites will popup. select <span class=key_ye>searchPhrase</span> and from the dropdown(where it says none) select search and submit.<p>do the same for help.<blockquote><img class=responsive-img src=luis/add_helpUt.jpeg></blockquote>add 2 or 3 more utterances and then click the <span class=keyword>Train</span> button on the bottom-left corner.<p>After training you can try a utterance and it will suggest the intent and the entity:<blockquote><img class=responsive-img src=luis/trained.jpeg></blockquote>I added a utterance ' hlp with search '<li>Publish<ol class=nested><li>Click on publish->publish web service.<blockquote><img class=responsive-img src=luis/publish.jpeg></blockquote><li>In the query field type a question and press <span class=keyword>enter</span>. It Should open a page:<blockquote><img class=responsive-img src=luis/json.jpeg></blockquote>this is the JSON that will be returned to the bot.</ol></ol><dt>Integrate with bot<dd><dl><dt>Intent recognition<dd><p>The IntentDialog class can be configured to use cloud based intent recognition services like LUIS through an extensible set of recognizer plugins. Out of the box, Bot Builder comes with a LuisRecognizer that can be used to call a machine learning model you've trained via the web site.<blockquote><pre>"+
"                    <code>"+
"\n var recognizer = new builder.LuisRecognizer('<your models url>');"+
"\n var intents = new builder.IntentDialog({ recognizers: [recognizer] });"+
"\n bot.dialog('/', intents);"+
"\n "+
"\n intents.matches('Help', '/help');"+
"\n "+
"                    </code>"+
"                  </pre></blockquote><p>the &lt;your models url> is the url in the publish option in the luis website.<p>Intent recognizers return matches as named intents. By default the recognizers will be evaluated in parallel and the recognizer returning the intent with the highest score will be matched.<dt>Entity Recognition<dd><p>LUIS can not only identify a users intention given an utterance, it can extract entities from their utterance as well. Any entities recognized in the users utterance will be passed to the intent handler via its args parameter.<blockquote><pre>"+
"                    <code>"+
"\n intents.matches('search', ["+
"\n function (session, args, next) {"+
"\n     var searchPhrase = builder.EntityRecognizer.findEntity(args.entities, 'SearchPhrase');"+
"\n     if (!searchPhrase) {"+
"\n         builder.Prompts.text(session, 'What can I help you find?');"+
"\n     } else {"+
"\n         next({ response: searchPhrase.entity });"+
"\n     }"+
"\n     },"+
"\n     ..."+
"\n       ..."+
"                    </code>"+
"                  </pre></blockquote></dl></dl></div></div><div><pre>"+
"\n Yay!! let us"+
"\n write, code like we are running out of time"+
"\n Write day and night like we are running out time, non-stop!!"+
"\n lets practice the code like we practically perfected it!"+
"    </pre></div>";