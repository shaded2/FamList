module.exports = function(mongoose) {
    var collection = 'shopping_items';
    var Schema = mongoose.Schema;
    var ObjectId = Schema.ObjectId;

    var schema = new Schema({
        description: String,
        owner: ObjectId,
        created: Date,
        last_modified: Date
    });

    return mongoose.model(collection, schema);
};