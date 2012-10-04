module.exports = function(app, models, mongoose){
    /*  =====================================================================  */
    /*  Setup api route handlers.  */
    /*  =====================================================================  */

    // Handler for GET /api/examples
    app.get('/api/shopping_items', function(req, res){
        //get all the shopping items
        models.shopping_items.find({}, '_id description owner', function(err, docs){
            if (!err) {
                return res.send(docs);
            }
            else {
                return console.log(err);
            }
        });
    });

    // Handler for GET /api/health
    app.get('/api/health', function(req, res){
        res.send('1');
    });
};