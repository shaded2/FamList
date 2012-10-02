module.exports = function(mongoose) {
    var collection = 'roles';
    var Schema = mongoose.Schema;

    var schema = new Schema({
        role: Number,
        description: String,
        created: Date,
        last_modified: Date
    });

    return mongoose.model(collection, schema);
};