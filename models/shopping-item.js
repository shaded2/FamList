module.exports = function(mongoose) {
    var collection = 'shopping_items';
    var Schema = mongoose.Schema;
    var ObjectId = Schema.ObjectId;

    var schema = new Schema({
        description: {type: String, required: true},
        owner: {type: ObjectId, required: true},
        created: {type: Date, default: Date.now},
        last_modified: {type: Date, default: Date.now}
    });

    return mongoose.model(collection, schema);
};