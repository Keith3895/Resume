var builder             =       require("botbuilder");
var express             =       require("express");
var app                 =       express();
var BotRoutes           =       require("./routes/bot");
app.use('/api/messages',BotRoutes);

var mongoose            =       require("mongoose");
var passport            =       require("passport");
var LocalStrategy       =       require("passport-local");
var session             =       require("express-session");
var User                =       require("./models/user");
var bodyParser          =       require("body-parser");




app.use(bodyParser.urlencoded({extended: true}));
// mongoose.connect("mongodb://localhost/keith");
mongoose.connect("mongodb://admin:resume@ds141410.mlab.com:49040/resume"); // public hosted mongo db
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





app.get("/",function(req,res){
    res.render("index");
});
app.get("/cert",function(req,res){
    res.render("cert");
});
app.get("/priv",function(req,res){
    res.render("privacypolicy");
});
app.get("/chatbot",function(req, res) {
    res.render("chatbot"); 
});
app.get("/pheno",function(req, res) {
    res.render("pheno readup.ejs");
});
app.get("/review",function(req, res) {
    res.render("review");
});


app.post('/login',function(req,res){
    console.log(req.body.UName);
    console.log(req.body.email);
   var userData = {
       Name : req.body.UName,
       email :  req.body.email
   }; 
   
   User.create(userData,function(err,newUser){
       if(err){
           console.log(err);
       }
       else{
           newUser.save();
       }
   });
});

// app.listen(3000, '127.0.0.1',function(a){
//     console.log("server started");
// });

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server started");
});

