var builder             =       require("botbuilder");
var express             =       require("express");
var app                 =       express();
var BotRoutes           =       require("./routes/bot");
app.use('/api/messages',BotRoutes);
var mongoose            =       require("mongoose");
var User                =       require("./models/user");




// app.use(bodyParser.urlencoded({extended: true}));
// mongoose.connect("mongodb://localhost/keith");
mongoose.connect("mongodb://admin:resume@ds149040.mlab.com:49040/resume"); // public hosted mongo db
// mongodb://<dbuser>:<dbpassword>@ds149040.mlab.com:49040/resume
// app.use(session({
//     secret: "Keith is",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60000 }
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.listen(3000, '127.0.0.1',function(a){
    console.log("server started");
});

// app.listen(process.env.PORT, process.env.IP,function(){
//     console.log("server started");
// });

