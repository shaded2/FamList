module.exports = function(app, express, mongoose){
    var config = this;

    app.requireAuth = false;

    //generic config
    app.configure(function(){
        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.use(express.bodyParser());
        app.use(express.cookieParser());
        app.use(express.session({ secret: 'topsecret' }));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(express.static(__dirname + '/public'));
    });

    //env specific config
    app.configure('development', function(){
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

        app.mongoose.connect('mongodb://localhost/famlist');
        //app.mongoose.connect('mongodb://<dbuser>:<dbpassword>@<XXXXXXXX>.mongolab.com:37977/famlist');
    });

    app.configure('production', function(){
        app.use(express.errorHandler());

        app.mongoose.connect('mongodb://localhost/famlist');
        //app.mongoose.connect('mongodb://<dbuser>:<dbpassword>@<XXXXXXXX>.mongolab.com:37977/famlist');
    });

    return config;
};