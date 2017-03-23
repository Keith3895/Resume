var express =       require("express"),
app         =       express();
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
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server started");
    console.log("listening to "+process.env);
});



