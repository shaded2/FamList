module.exports = function(app, models, mongoose){
    /*  =====================================================================  */
    /*  Setup application route handlers.  */
    /*  =====================================================================  */

    // Handler for GET /
    app.get('/', function(req, res){
        //get all the shopping items, only need the id, description and ownner
        models.shopping_items.find({}, '_id description owner', function(err, docs){
            res.render( 'index.ejs', {
                locals: {
                    title: 'FamList - A shopping list for the entire family',
                    page: 'index',
                    items: docs
                }
            });
        });
    });

    // Handler for GET /health
    app.get('/health', function(req, res){
        res.send('1');
    });
};