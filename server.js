var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")

const config = require('./config');
const util = require('util');

mongoose.connect("mongodb://localhost:27017/love_language");


var app = express();

app.use(express.static(__dirname + '/views'));
//app.use("/css", express.static(__dirname + '/'));
//app.use("/js", express.static(__dirname + '/client/js'));
//app.use("/img", express.static(__dirname + '/client/img'));

app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "Noor is the best ever in the world",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
  res.locals.currentuser = req.user;
  next();
});

/* conver user object into id that is saved in the session */
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

/* takes userId from session and loads whole user object from the database */
passport.deserializeUser(function(userId, done) {
    User.findById(userId, (err, user) => done(err, user));
});


// ======= ROUTES ===========


app.get("/", function(req,res){
	res.render("index");
});

app.get("/profile",isLoggedIn, function(req,res){
  res.render("profile");
});

app.get("/QUIZZ", isLoggedIn, function(req,res){
    res.render("QUIZZ");
});

app.get("/RELATIONSHIP_ISSUES", function(req,res){
    res.render("RELATIONSHIP_ISSUES");
});


app.get("/CONTACT_US", function(req,res){
    res.render("CONTACT_US");
});


// auth routs
// show sign up form
app.get("/register" , function(req,res){
	res.render("register");
});

//handling user sign up
app.post("/register", function(req, res){
	// create new user object and only pass the username 
	// dont save password 
	//User.register takes user name and hashes the password and stores in db
	// pass user object then the password separetly  
	//if everthing goes well it will return  a new user 
	//	that has everything inside of it (user name + password)
    User.register(new User({username: req.body.username , email: req.body.user_email, loved_one_email:req.body.partner_email,agree :req.body.agree}), req.body.password, function(err, user){
        if(err){
        	// if there is a problem go back 
            console.log(err);
            return res.render('register');
        }
        // log user in , take care of everything in the session store 
        // coorect information , run serialize user metes.render("login");hod 
        // change local to google !!! with other tweks 
        passport.authenticate("local")(req, res, function(){
        // here go to what ever page you want
           res.redirect("/");
        });
    });
});

//login routes 
app.get("/login" , function(req,res){
	res.render("login");
   
});

//login logic
//middleware
// takes username and password from the body and compare
// to the one in db 
app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
}) ,function(req, res){
});


/* -------------------google --------------------   */
//setup google oauth2 strategy for login
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var googleStrategy = new GoogleStrategy({
  clientID: config.googleKey,
  clientSecret: config.googleSecret,
  callbackURL: "http://localhost:3000/auth/google/callback"
}, function(accessToken, refreshToken, profile, done) {
  // find or create user from the database based on googleId and googleDisplayName
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    if(!err){
      //save google profile and access token to the user object
      user.googleProfile = profile;
      user.googleAccessToken = accessToken;
      user.save(function(err){
        done(err, user);
      });
    }
    else{
      done(err, user);
    } 
  });}
);

passport.use(googleStrategy);

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.  
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

app.get("/logout", function(req, res){
	
	// passport distroies user data in the session
    req.logout();
    // redirect 
    res.redirect("/");
});

// to check if the user is logged in
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    if((passport.authenticate('google', {failureRedirect: '/' }))){
        return next();
    }
    
    // if user not loged in
    res.redirect("/");
}

app.listen(3000, process.env.IP, function(){
	console.log("server started at port 3000 .......")
});