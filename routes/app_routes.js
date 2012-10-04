module.exports = function(app, models, mongoose){
    /*  =====================================================================  */
    /*  Setup application route handlers.  */
    /*  =====================================================================  */

    // Handler for GET /health
    app.get('/health', function(req, res){
        res.send('1');
    });

    // Handler for GET /
    app.get('/', function(req, res){
        //get all the shopping items
        models.shopping_items.find({}, function(err, docs){
            res.render( 'index.ejs', {
                locals: {
                    title: 'FamList - A shopping list for the entire family, Node.js',
                    page: 'index',
                    items: docs
                }
            });
        });
    });
};