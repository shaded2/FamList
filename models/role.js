module.exports = function(mongoose) {
    var collection = 'roles';
    var Schema = mongoose.Schema;

    var schema = new Schema({
        role: {type: Number, required: true},
        description: {type: String, required: true},
        created: {type: Date, default: Date.now},
        last_modified: {type: Date, default: Date.now}
    });

    return mongoose.model(collection, schema);
};