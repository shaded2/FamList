module.exports = function(mongoose) {
    var collection = 'users';
    var Schema = mongoose.Schema;

    var schema = new Schema({
        name: {
                first: String,
                last: String
              },
        role: Number,
        user_name: String,
        password: String,
        salt: String,
        created: Date,
        last_modified: Date
    });

    return mongoose.model(collection, schema);
};