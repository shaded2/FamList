module.exports = function(app, models, mongoose){
    /*  =====================================================================  */
    /*  Setup api route handlers.  */
    /*  =====================================================================  */

    var acceptedContent = 'application/json';

    // id should be only alphanumeric
    app.param('id', /^\w+$/);

    // Handler for GET /api/health
    app.get('/api/health', function(req, res) {
        res.send('1');
    });

    // Handler for GET /api/shopping_items
    app.get('/api/v1/shopping_items', function(req, res) {
        //get all the shopping items, only need the id, description and ownner
        models.shopping_items.find({}, '_id description owner', function(err, docs) {
            if (!err) {
                return res.send(docs);
            }
            else {
                return console.log(err);
            }
        });
    });

    // Handler for GET /api/shopping_items/id
    app.get('/api/v1/shopping_items/:id', function(req, res) {
        //get the shopping item, only need the id, description and ownner
        models.shopping_items.findById(req.params.id, '_id description owner', function(err, doc) {
            if (!err) {
                return res.send(doc);
            }
            else {
                return console.log(err);
            }
        });
    });

    // Handler for POST /api/shopping_items
    app.post('/api/v1/shopping_items', function(req, res) {
        //add a shopping item
        var shoppingItemModel = new models.shopping_items();
        var now = new Date();

        if (req.is(acceptedContent)) {
            shoppingItemModel.description = req.body.description;
            shoppingItemModel.owner = mongoose.Types.ObjectId.fromString(req.body.owner);
            shoppingItemModel.created = now;
            shoppingItemModel.last_modified = now;

            shoppingItemModel.save(function(err) {
                if(!err) {
                    console.log('created');
                    return res.send(201);
                }
                else {
                    console.log(err);
                    return res.send(500);
                }
            });
        }
        else {
            console.log('unaccepted content type');
            return res.send(400);
        }
    });

    //add or update a specified item
    app.put('/api/v1/shopping_items/:id', function(req, res) {
        if (req.is(acceptedContent)) {
            //get the shopping item to update
            models.shopping_items.findById(req.params.id, function(err, doc) {
                if (!err) {
                    // update if found
                    if (doc) {
                        doc.description = req.body.description;
                        doc.last_modified = new Date();
                        doc.save(function(err) {
                            if(!err) {
                                console.log('saved');
                                return res.send(200);
                            }
                            else {
                                console.log(err);
                                return res.send(500);
                            }
                        });
                    }
                    else { // does not exist, create it
                        var shoppingItemModel = new models.shopping_items();
                        var now = new Date();

                        shoppingItemModel.description = req.body.description;
                        shoppingItemModel.owner = mongoose.Types.ObjectId.fromString(req.body.owner);
                        shoppingItemModel.created = now;
                        shoppingItemModel.last_modified = now;

                        shoppingItemModel.save(function(err) {
                            if(!err) {
                                console.log('created');
                                return res.send(201);
                            }
                            else {
                                console.log(err);
                                return res.send(500);
                            }
                        });
                    }
                }
                else {
                    return console.log(err);
                }
            });
        }
        else {
            console.log('unaccepted content type');
            return res.send(400);
        }
    });

    //delete a specified item
    app.delete('/api/v1/shopping_items/:id', function(req, res) {
        models.shopping_items.remove({ _id: req.params.id }, function(err) {
            if(!err) {
                res.send(200);
            }
            else {
                res.send(500);
            }
        });
    });
};