module.exports = function(app, models, mongoose){
    /*  =====================================================================  */
    /*  Setup route handlers.  */
    /*  =====================================================================  */

    // Handler for GET /health
    app.get('/health', function(req, res){
        res.send('1');
    });

    // Handler for GET /asciimo
    app.get('/asciimo', function(req, res){
        var link="https://a248.e.akamai.net/assets.github.com/img/d84f00f173afcf3bc81b4fad855e39838b23d8ff/687474703a2f2f696d6775722e636f6d2f6b6d626a422e706e67";
        res.send("<html><body><img src='" + link + "'><h1>testing html</h1></body></html>");
    });

    // Handler for GET /
    app.get('/', function(req, res){
        //get all the examples
        models.examples.find({}, function(err, docs){
            res.render( 'index.ejs', {
                locals: {
                    title: 'Node.js Index page',
                    page: 'index',
                    examples: docs
                }
            });
        });
    });
};