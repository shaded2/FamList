module.exports = function(app, models, mongoose){
    /*  =====================================================================  */
    /*  Setup api route handlers.  */
    /*  =====================================================================  */

    // Handler for GET /api/health
    app.get('/api/health', function(req, res){
        res.send('1');
    });

    // Handler for GET /api/examples
    app.get('/api/examples', function(req, res){
        //get all the examples
        models.examples.find({}, function(err, docs){
            if (!err) {
                return res.send(docs);
            }
            else {
                return console.log(err);
            }
        });
    });
};